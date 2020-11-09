#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');

const themesDataFile = path.join(__dirname, '../data/stackbit.json');
const themesContentFolder = path.join(__dirname, '../content/theme');

let themesFiles = fs.readdirSync(themesContentFolder);
let themesData = {};

console.log("Generating Stackbit")
console.log(`themesDataFile ${themesDataFile}`)
console.log(`themesContentFolder ${themesContentFolder}\n`)

const loadThemeFrontMatter = fileName => {
  const fileData = fs.readFileSync(path.join(themesContentFolder, fileName));
  const frontmatter = yamlFront.loadFront(fileData);
  // if (fileName === "stackbit-theme-starter-gatsby.md") {
  //   console.log(fileName)
  //   console.log(frontmatter)
  // }

  try {
    let title = frontmatter.title;
    let repoUrl = frontmatter.github;
    let repoName = gh(frontmatter.github).repo; // stackbithq/stackbit-theme-fresh
    let file = fileName;
    let ssg = frontmatter.ssg;
    let cms = frontmatter.cms;
    return { title, ssg, cms, file, repoUrl, repoName }
  }
  catch {
    throw new Error(`${fileName} invalid github frontmatter`)
  }
};

const generateStackbit = (theme) => {
      const defaultBranch = theme.branch ? theme.branch : "master";
      const themeKey = theme.repoName.replace("/", "-").toLowerCase() + "-" + defaultBranch;
      const allowedSsgs = ["Hugo", "Jekyll", "Gatsby", "Next", "Eleventy", "Vuepress", "Gridsome"]
      if (theme.ssg.some(ssg => allowedSsgs.includes(ssg))) {
        themesData[themeKey] = {
          theme_key: themeKey,
          stackbit: `https://app.stackbit.com/create?theme=${theme.repoUrl}`
        };
        return themesData[themeKey]
      }
      return false;
};

const getThemes = async () => {

  const themesFrontMatter = themesFiles.map(fileName => {
    return loadThemeFrontMatter(fileName)
  });

  const stackbit = themesFrontMatter.map(theme => {
    return generateStackbit(theme)
  });

  // Sort data
  let sortedThemesData = {};
  Object.keys(themesData).sort().forEach(key => {
    sortedThemesData[key] = themesData[key];
  });

  return sortedThemesData;
};

getThemes().then(res => {
  console.log("Success");
  console.log("Writing data/stackbit.json...");
  fs.writeFileSync(themesDataFile, JSON.stringify(res, null, 2));
}).catch(err => {
  console.log(err);
});
