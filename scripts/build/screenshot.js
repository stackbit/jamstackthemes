#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const Pageres = require('pageres');
const sharp = require('sharp')
const {getThemeKey} = require('./utils');
const config = require('./config');
const ora = require('ora');
const spinner = ora('Loading')

const captureScreenshot = async (frontmatter, overwrite = false) => {
    const themeKey = getThemeKey(frontmatter.github)
    const themeImage = `${themeKey}.png`

    if (!overwrite && fs.existsSync(path.join(config.hiresImagesFolder, themeImage))) {
        return false
    }

    try {
        const page = await new Pageres({delay: 2, filename: themeKey})
            .src(frontmatter.demo, ['1280x960'], {crop: true})
            .dest(config.hiresImagesFolder)
            .run();
        spinner.text = `${frontmatter.demo} => capturing`
        return page
    } catch {
        spinner.text = `${frontmatter.demo} => failed capturing`
        return false;
    }
};

const generateThumbnail = async (frontmatter, overwrite = false) => {
    const themeKey = getThemeKey(frontmatter.github)
    const hiresImage = path.join(config.hiresImagesFolder, `${themeKey}.png`)
    const imageName = path.parse(hiresImage).name
    const outputImage = path.join(config.thumbnailImagesFolder, `${imageName}.jpg`)
    const outputImage2x = path.join(config.thumbnailImagesFolder2x, `${imageName}-2x.jpg`)

    if (!hiresImage) {
        return false;
    }
    if (!overwrite && fs.existsSync(outputImage) && fs.existsSync(outputImage2x)) {
        return false;
    }
    fs.ensureDirSync(config.thumbnailImagesFolder);
    fs.ensureDirSync(config.thumbnailImagesFolder2x);

    try {
        spinner.text = `${imageName} => processing thumbnail`
        await sharp(hiresImage)
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

        spinner.text = `${imageName} => processing thumbnail@2x`
        await sharp(hiresImage)
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
    } catch {
        spinner.text = `${imageName} => processing failed`
        return false;
    }
};

const generateThumbnails = async (markdownData, overwrite) => {
    spinner.start("Generating Thumbnails");
    for (const theme of markdownData) {
        await generateThumbnail(theme, overwrite)
    }
    spinner.succeed("Success - Generating Thumbnails");
};

const generateScreenshots = async (markdownData, overwrite) => {
    spinner.start("Capturing Screenshots");
    for (const theme of markdownData) {
        await captureScreenshot(theme, overwrite)
    }
    spinner.succeed("Success - Capturing Screenshots");
}

module.exports = {
    generateScreenshots,
    generateThumbnails
}