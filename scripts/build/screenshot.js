#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Pageres = require('pageres');
const sharp = require('sharp')
const {getThemeKey} = require('./utils');
const config = require('./config');

const captureScreenshot = async (frontmatter, overwrite = false) => {
    const themeKey = getThemeKey(frontmatter.github, frontmatter.github_branch)
    if (frontmatter.disabled) {
        return false
    }

    if (frontmatter.github) {
        let themeImage = `${themeKey}.png`
        const url = frontmatter.demo

        if (!overwrite && fs.existsSync(path.join(config.hiresImagesFolder, themeImage))) {
            return false
        } else {
            console.log(`${url} capturing`);
            const page = await new Pageres({delay: 2, filename: themeKey})
                .src(url, ['1280x960'], {crop: true})
                .dest(config.hiresImagesFolder)
                .run();
            return page
        }
    }
    return false;
};

const generateThumbnail = (frontmatter, overwrite = false) => {
    const themeKey = getThemeKey(frontmatter.github, frontmatter.github_branch)
    const inputImage = path.join(config.hiresImagesFolder, `${themeKey}.png`)
    const imageName = path.parse(inputImage).name
    // const imageExtension = path.parse(inputImage).ext
    const outputImage = path.join(config.thumbnailImagesFolder, `${imageName}.jpg`)
    const outputImage2x = path.join(config.thumbnailImagesFolder2x, `${imageName}-2x.jpg`)

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
            .then((ImageResult) => {
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
            .then((ImageResult) => {
                console.log(ImageResult);
            }).catch((err) => {
            console.log(inputImage)
            console.log(err);
        })
    }
};

const generateThumbnails = async (markdownData) => {
    console.log("** Generating thumbnails **");
    for (const theme of markdownData) {
        await generateThumbnail(theme)
    }
};


const generateScreenshots = async (markdownData) => {
    console.log("** Capturing screenshots **")
    for (const theme of markdownData) {
        await captureScreenshot(theme)
    }
}

module.exports = {
    generateScreenshots,
    generateThumbnails
}

// // if the cli command --theme=hugo-swift-theme.md is used, only capture that specific theme
// if (argv.theme) {
//   const theme = argv.theme;
//   console.log(`Capturing screenshot for ${theme}`)
//   captureWebScreenshot(theme, true)
// } else {
//   captureAll()
// }

// // if the cli command --theme=hugo-swift-theme.md is used, only capture that specific theme
// if (argv.image) {
//   const image = argv.image;
//   console.log(`Generating thumbnails for ${image}`)
//   generateThumbnails(image, true)
// } else {
//   generateThumbnailsAll()
// }
