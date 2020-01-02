#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const isAfter = require('date-fns/isAfter');
const parseISO = require('date-fns/parseISO');
const subYears = require('date-fns/subYears');

// Set this to the date you want to consider themes stale if there have 
// been no commits since.
const staleBeforeDate = subYears(new Date(), 1);

const themesDataFile = path.join(__dirname, '../data/themes.json');
const themesFolder = './content/theme';
const themesData = fs.existsSync(themesDataFile) ? JSON.parse(fs.readFileSync(themesDataFile)) : {};

var filesUpdated = 0;

function loadFrontmatter(dir, file, themeKey) {
  const fileData = fs.existsSync(path.join(dir, file)) ? fs.readFileSync(path.join(dir, file)) : null;
  
  if (!fileData) {
    console.log("file not found", file, themesData[themeKey]);
    delete themesData[themeKey];
    console.log(`entry deleted from ${themesDataFile}`);
    fs.writeFileSync(themesDataFile, JSON.stringify(themesData, null, 2));
    return {fileData: null, frontmatter: null};
  }

  var frontmatter = yamlFront.loadFront(fileData);

  if (frontmatter.stale === undefined) {
    // Assume not stale if stale status is missing from frontmatter.
    frontmatter.stale = false;
  }

  return { fileData, frontmatter };
}

console.log("***********************************")
console.log("Scrubbing Themes")
console.log("***********************************")

const themeKeys = Object.keys(themesData);

for (const themeKey of themeKeys) {
  const theme = themesData[themeKey];
  const { fileData, frontmatter } = loadFrontmatter(themesFolder, theme.file, themeKey);
  const newFrontmatterEntries = [];

  const isThemeStale = !isAfter(parseISO(theme.last_commit), staleBeforeDate);

  if (!fileData) {
    return false;
  }

  if (frontmatter.description === undefined) {
    console.log(theme.description)
    if (theme.description) {
      let description = theme.description.replace(/["]/g, "'")
      newFrontmatterEntries.push(`description: "${description}"`);
    }
  }

  if (frontmatter.date === undefined) {
    if (frontmatter.date != theme.created_at) {
      newFrontmatterEntries.push('date: ' + theme.created_at);
    }
  }

  // If there is a change in the stale state, generate new frontmatter 
  // entry for stale setting.
  if (isThemeStale != frontmatter.stale) {
    newFrontmatterEntries.push('stale: ' + isThemeStale);
  }

  // If the github branch is missing, generate new frontmatter entry
  // for github branch setting.
  if (frontmatter.github_branch === undefined) {
    newFrontmatterEntries.push('github_branch: ' + theme.branch);
  }

  // When there are new frontmatter entries re-write the theme markdown file
  // with those new entries.
  if (newFrontmatterEntries.length > 0) {
    var frontmatterLines;

    if (frontmatter.stale != undefined) {
      frontmatterLines = fileData.toString().split('\n').filter((entry) => !/^\s*stale:/.test(entry));
      // frontmatterLines = fileData.toString().split('\n').filter((entry) => !/^\s*draft:/.test(entry));
    } else {
      frontmatterLines = fileData.toString().split('\n');
    }
    const idx = frontmatterLines.lastIndexOf('---');
    frontmatterLines.splice(idx, 0, ...newFrontmatterEntries);
    console.log('Updating: ' + theme.file);
    fs.writeFileSync(path.join(themesFolder, theme.file), frontmatterLines.join("\n"));
    filesUpdated++;
  }
}

console.log(filesUpdated + " files updated.");
