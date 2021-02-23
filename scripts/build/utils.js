#!/usr/bin/env node
const parseGithubUrl = require('parse-github-url');

const getRepoName = (repoUrl) => {
    return parseGithubUrl(repoUrl).repo; // stackbithq/stackbit-theme-fresh
}

const getThemeKey = (repoUrl, branch) => {
    if (!repoUrl || !branch) {
        throw Error("Unable to generate themeKey")
    }
    const repoName = getRepoName(repoUrl)
    const themeKey = repoName.replace("/", "-").toLowerCase() + "-" + branch;
    return themeKey
}

module.exports = {
    getThemeKey,
    getRepoName
}