#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const yaml = require('js-yaml');
const isBefore = require('date-fns/isBefore');
const parseISO = require('date-fns/parseISO');
const subYears = require('date-fns/subYears');
const {getThemeKey} = require('./utils');
const {themeMap} = require('./write');
const {generateMarkdownData} = require('./markdown')
const config = require('./config');
const staleBeforeDate = subYears(new Date(), 1);

const deleteOldThemes = async (themesMarkdown, themesGithub) => {
    const themesMarkdown = await generateMarkdownData(config.themesMarkdownFiles)
    const themesMarkdownMap = themeMap(themesMarkdown)
}

module.exports = {
    deleteOldThemes
}

