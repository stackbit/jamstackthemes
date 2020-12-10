#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');

const stackbitDataFile = path.join(__dirname, '../data/stackbit.json');
const themesContentFolder = path.join(__dirname, '../content/theme');
const themesFiles = fs.readdirSync(themesContentFolder);

console.log("Generating Stackbit")
console.log(`stackbitDataFile ${stackbitDataFile}`)
console.log(`themesContentFolder ${themesContentFolder}\n`)

let stackbitData = {};

const generateStackbit = (fileName) => {
  const fileData = fs.readFileSync(path.join(themesContentFolder, fileName));
  const frontmatter = yamlFront.loadFront(fileData);

  const repoName = gh(frontmatter.github).repo;
  const defaultBranch = frontmatter.branch ? frontmatter.branch : "master";
  const themeKey = repoName.replace("/", "-").toLowerCase() + "-" + defaultBranch;

  if (frontmatter.stackbit) {
    // if frontmatter contains a stackbit value already, use that
    stackbitData[themeKey] = {
      createUrl: frontmatter.stackbit
    };
  } else if (frontmatter.ssg.includes("Hugo")) {
    // enable stackbit on all hugo themes
    stackbitData[themeKey] = {
      createUrl: `https://app.stackbit.com/create?theme=${frontmatter.github}&ssg=hugo`
    };
  }
  return false;
};

const getThemes = async () => {

  themesFiles.forEach(fileName => {
    generateStackbit(fileName)
  });

  // Sort data
  let sortedThemesData = {};
  Object.keys(stackbitData).sort().forEach(key => {
    sortedThemesData[key] = stackbitData[key];
  });

  return sortedThemesData;
};

getThemes().then(res => {
  console.log("Success");
  console.log("Writing data/stackbit.json...");
  fs.writeFileSync(stackbitDataFile, JSON.stringify(res, null, 2));
}).catch(err => {
  console.log(err);
});
