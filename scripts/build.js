#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2)).argv
const config = require('./build/config');
const {errorLog} = require('./build/errors');
const {generateGithubData} = require('./build/github');
const {generateMarkdownData, updateStale} = require('./build/markdown');
const {testDemoUrls} = require('./build/demo');
const {writeThemesFile, writeErrorFile, writeStackbitFile} = require('./build/write')
const {generateStackbitData} = require('./build/stackbit')
const {generateScreenshots, generateThumbnails} = require('./build/screenshot')

const build = async (options) => {
    const themesMarkdown = await generateMarkdownData(config.themesMarkdownFiles, options)
    const themesGithub = await generateGithubData(themesMarkdown)
    const stackbit = generateStackbitData(themesMarkdown)
    await testDemoUrls(themesGithub)
    console.log("** Updating Markdown **")
    updateStale(themesGithub);
    console.log("** Writing Files **")
    writeThemesFile(themesGithub)
    writeStackbitFile(stackbit);
    writeErrorFile(errorLog)
    await generateScreenshots(themesMarkdown)
    generateThumbnails(themesMarkdown)
    console.log("Build Successful")
    console.log("Error Log")
    console.log(errorLog)
}

const options = {
    filter: {
        disabled: true, // Skip processing themes that have front-matter `disabled: true`
        draft: true, // Skip processing themes that have front-matter `draft: true`
    },
    latest: argv.latest || false, // build.js --latest | only process themes which don't already exist in `themes.json`
    file: argv.file || false // build.js --file=hugo-swift-theme.md | only process the specified file
}
console.log(argv)

build(options);