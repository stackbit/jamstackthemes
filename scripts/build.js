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
    console.log("Build options", options)
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
        await testDemoUrls(themesMarkdown)
    }

    if (options.images) {
        await generateScreenshots(themesMarkdown)
        await generateThumbnails(themesMarkdown)
    }

    writeErrorFile(errorLog)
    console.log("Build Successful")
    console.log("Error Log")
    console.log(errorLog)
}

const options = {
    disabled: true, // Skip processing themes that have front-matter `disabled: true`
    draft: true, // Skip processing themes that have front-matter `draft: true`
    demos: argv.demos !== "false",
    stackbit: argv.stackbit !== "false",
    github: argv.github !== "false",
    images: argv.images !== "false",
    latest: argv.latest || false, // build.js --latest | only process themes which don't already exist in `themes.json`
}

build(options);