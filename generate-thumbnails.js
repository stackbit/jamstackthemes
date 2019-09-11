#!/usr/bin/env node

const fs = require('fs');
const im = require('imagemagick');
const path = require('path');
const sharp = require('sharp')

const imageFolder = path.join(__dirname, 'static/capture');
const outputFolder = path.join(__dirname, 'static/images/theme/thumbnail')
const imageFiles = fs.readdirSync(imageFolder);

console.log(`Generating thumbnails from images in ./static/capture'`)
console.log(`images folder: ${imageFolder}`);

imageFiles.forEach((image) => {
  const inputImage = path.join(imageFolder, image)
  const imageName = path.parse(image).name
  const imageExtension = path.parse(image).ext
  const outputImage = path.join(outputFolder, `${imageName}.jpg`)

  sharp(inputImage)
    .resize({
      width: 280,
      height: 180,
      fit: 'cover',
      position: 'top',
    })
    .jpeg({
      quality: 80,
    })
    .toFile(outputImage)
    .then( (ImageResult) => {
      console.log(ImageResult);
    })
});
