#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp')
const argv = require('yargs').argv

const hiresImagesFolder = path.join(__dirname, '../static/capture');
const outputFolder = path.join(__dirname, '../static/images/theme/thumbnail')
const outputFolder2x = path.join(__dirname, '../static/images/theme/thumbnail/2x')
const imageFiles = fs.readdirSync(hiresImagesFolder);

console.log("******************************************************")
console.log(`Generating thumbnails from images in ${hiresImagesFolder}`)
console.log("******************************************************")

generateThumbnails = (image, overwrite = false) => {
  const inputImage = path.join(hiresImagesFolder, image)
  const imageName = path.parse(image).name
  const imageExtension = path.parse(image).ext
  const outputImage = path.join(outputFolder, `${imageName}.jpg`)
  const outputImage2x = path.join(outputFolder2x, `${imageName}-2x.jpg`)

  if (!overwrite && fs.existsSync(outputImage) && fs.existsSync(outputImage2x)) {
    return false
  } else {
    console.log(`processing ${inputImage}`)
    sharp(inputImage)
      .resize({
        width: 280,
        height: 210,
        fit: 'cover',
        position: 'top',
      })
      .jpeg({
        quality: 85,
      })
      .toFile(outputImage)
      .then( (ImageResult) => {
        console.log(ImageResult);
      }).catch((err) => {
        console.log(err);
      })

    sharp(inputImage)
      .resize({
        width: 560,
        height: 420,
        fit: 'cover',
        position: 'top',
      })
      .jpeg({
        quality: 85,
      })
      .toFile(outputImage2x)
      .then( (ImageResult) => {
        console.log(ImageResult);
      }).catch((err) => {
        console.log(inputImage)
        console.log(err);
      })
  }
};

const generateThumbnailsAll = () => {
    imageFiles.forEach(image => {
        generateThumbnails(image);
    });
};

// if the cli command --theme=hugo-swift-theme.md is used, only capture that specific theme
if (argv.image) {
    const image = argv.image;
    console.log(`Generating thumbnails for ${image}`)
    generateThumbnails(image, true)
} else {
    generateThumbnailsAll()
}
