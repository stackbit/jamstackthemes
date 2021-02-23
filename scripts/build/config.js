#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const subYears = require('date-fns/subYears');

const errorJsonFile = path.join(process.cwd(), '/data/errors.json');
const stackbitJsonFile = path.join(process.cwd(), '/data/stackbit.json');
const stackbitJsonData = fs.existsSync(stackbitJsonFile) ? JSON.parse(fs.readFileSync(stackbitJsonFile)) : {};
const themesMarkdownFolder = path.join(process.cwd(), '/content/theme')
const themesMarkdownFiles = fs.readdirSync(themesMarkdownFolder).map(relFilename => path.resolve(themesMarkdownFolder, relFilename))
const themesJsonFile = path.join(process.cwd(), '/data/themes.json');
const themesJsonData = fs.existsSync(themesJsonFile) ? JSON.parse(fs.readFileSync(themesJsonFile)) : {};
const hiresImagesFolder = path.join(process.cwd(), '/static/capture');
const thumbnailImagesFolder = path.join(process.cwd(), '/static/images/theme/thumbnail')
const thumbnailImagesFolder2x = path.join(process.cwd(), '/static/images/theme/thumbnail/2x')
const staleBeforeDate = subYears(new Date(), 1);

module.exports = {
    errorJsonFile,
    themesJsonFile,
    themesMarkdownFolder,
    themesMarkdownFiles,
    themesJsonData,
    stackbitJsonFile,
    stackbitJsonData,
    hiresImagesFolder,
    thumbnailImagesFolder,
    thumbnailImagesFolder2x,
    staleBeforeDate
}