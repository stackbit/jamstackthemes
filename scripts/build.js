#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const isBefore = require('date-fns/isBefore');
const parseISO = require('date-fns/parseISO');
const subYears = require('date-fns/subYears');
const {generateThemesData} = require('./build/github');
const {loadMarkdownData, updateFrontmatter} = require('./build/markdown');
const {testDemoUrls} = require('./build/demo');

const themesJsonDataFile = path.join(__dirname, '../test/themes.json');
const themesMarkdownFolder = path.join(__dirname, '../test/theme')
const themesMarkdownFiles = fs.readdirSync(themesMarkdownFolder).map(relFilename => path.resolve(themesMarkdownFolder, relFilename))
const themesMarkdownData = loadMarkdownData(themesMarkdownFiles)
const themesJsonData = fs.existsSync(themesJsonDataFile) ? JSON.parse(fs.readFileSync(themesJsonDataFile)) : {};

const staleBeforeDate = subYears(new Date(), 1);

let errorLog = []

generateThemesData(themesMarkdownData, themesJsonData).then(result => {
    const errors = result.errors
    const themes = result.themes;
    errorLog.push(...errors);
    return themes;
}).then(async (themes) => {
    const errors = await testDemoUrls(themes)
    errorLog.push(...errors);
    return themes;
}).then(async (themes) => {
    themes.forEach(theme => {
        const lastCommit = theme.last_commit;
        const isStale = isBefore(parseISO(lastCommit), staleBeforeDate)
        updateFrontmatter(theme.file, {
            stale: isStale
        })
    })
    errorLog.forEach(error => {

    })
    return themes;
}).then(themes => {
    let themesData = {}
    themes.forEach(theme => {
        themesData[theme.theme_key] = theme;
    })
    let sortedThemesData = {}
    Object.keys(themesData).sort().forEach(key => {
        sortedThemesData[key] = themesData[key];
    });
    console.log("Success")
    console.log(`Writing ${themesJsonDataFile}...`);
    fs.writeFileSync(themesJsonDataFile, JSON.stringify(sortedThemesData, null, 2));
    console.log(errorLog)
}).catch(err => {
    console.log(err);
})
