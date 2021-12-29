#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const {generateGithubData} = require('./build/github');
const {generateMarkdownData} = require('./build/markdown');
const {testDemoUrls} = require('./build/demo');
const {writeThemesFile, writeErrorFile, writeStackbitFile} = require('./build/write')
const {generateStackbitData} = require('./build/stackbit')
const {generateScreenshots, generateThumbnails} = require('./build/screenshot')
const config = require('./build/config');
const {errorLog} = require('./build/errors');

const build = async (options) => {
    const themesMarkdown = await generateMarkdownData(config.themesMarkdownFiles, options)

    if (options.github) {
        // Updates themes.json
        const themesGithub = await generateGithubData(themesMarkdown)
        writeThemesFile(themesGithub)
    }
    if (options.stackbit) {
        // Updates stackbit.json
        const stackbit = generateStackbitData(themesMarkdown)
        writeStackbitFile(stackbit);
    }

    if (options.demos) {
        // Visits each demo URL with a headless browser and if the site cannot be reached sets the markdown file to disabled=true
        await testDemoUrls(themesMarkdown)
    }

    if (options.images) {
        await generateScreenshots(themesMarkdown, options.recaptureImage)
        await generateThumbnails(themesMarkdown, options.regenerateImage)
    }

    writeErrorFile(errorLog)
    console.log("Build Successful")
    console.log("Error Log")
    process.exit(0)
}

const options = {
    github: argv.github !== "false", // generates `data/themes.json` which is used for github stars, commits meta data etc
    stackbit: argv.stackbit !== "false", // generates `data/stackbit.json` which is used for the "create site" button
    demos: argv.demos !== "false", // tests the themes demo url using headless browser and disables the theme if the url does not resolve
    images: argv.images !== "false", // captures screenshots and generates thumbnails

    disabled: argv.disabled !== "false", // Skip processing themes that have front-matter `disabled: true`
    draft: argv.draft !== "false",  // Skip processing themes that have front-matter `draft: true`
    latest: argv.latest || false, // Only process themes which don't already exist in `data/themes.json`
    file: argv.file || false, // Only process a single file ie --file=gatsby-starter-advanced.md
    all: argv.all || false, // process all themes
    recaptureImage: argv.recaptureImage || false,
    regenerateImage: argv.regenerateImage || false
}

build(options);