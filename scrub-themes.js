#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');
const isAfter = require('date-fns/isAfter')
const parseISO = require('date-fns/parseISO')

const themesFolder = './content/theme';
const themeFiles = fs.readdirSync(themesFolder);
const themesData =  JSON.parse(fs.readFileSync('./data/themes.json'));

console.log("***********************************")
console.log("Scrubbing Themes")
console.log("***********************************")

const loadThemeData = file => {
  const fileData = fs.readFileSync(path.join(themesFolder, file));
  const frontmatter = yamlFront.loadFront(fileData);
  
    if (frontmatter.disabled) {
      return false
    }

    let repoUrl = frontmatter.github
    let repoName = gh(frontmatter.github).repo;
    let branch = frontmatter.github_branch ? frontmatter.github_branch : 'master';
    let themeKey = repoName.replace("/", "-").toLowerCase() + "-" + branch;

    const lastCommit = themesData[themeKey].last_commit
    console.log(parseISO(lastCommit));
    console.log(isAfter(parseISO(lastCommit), new Date(2018, 0, 1)))

};

const getThemes = async () => {
  for(const file of themeFiles) {
    loadThemeData(file)
  }
}

getThemes()
