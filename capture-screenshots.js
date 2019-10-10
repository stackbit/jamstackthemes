#!/usr/bin/env node
const Pageres = require('pageres');
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');

const themesFolder = './content/theme';
const themeFiles = fs.readdirSync(themesFolder);
const hiresImagesFolder = './static/capture';


console.log("******************")
console.log("Taking Screenshots")
console.log("******************")

captureWebScreenshot = async theme => {
  const data = fs.readFileSync(path.join(themesFolder, theme));
  const frontmatter = yamlFront.loadFront(data);
  let github = gh(frontmatter.github);
  let branch = frontmatter.github_branch ? frontmatter.github_branch : 'master';

  if (frontmatter.disabled) {
    return false
  }

  if (github) {
    let themeKey = github.repo.replace("/", "-").toLowerCase() + "-" + branch;
    let themeImage = `${themeKey}.png`
    const url = frontmatter.demo

    if (fs.existsSync(path.join(hiresImagesFolder, themeImage))) {
      console.log(`${theme} skipped`)
      return false
    } else {
      console.log(`${theme} capturing`);
      const page = await new Pageres({delay: 2, filename: themeKey})
      .src(url, ['1024x768'], {crop: true})
      .dest(hiresImagesFolder)
      .run();
      return page
    }
  }
  return false;
};

// Promise.all(themeFiles.map(theme => {
//     captureWebScreenshot(theme)
//   })).then(res => {
//   }).catch(error => {
//     console.log(error.message);
//   });

const captureAll = async ()  => {
  for(const theme of themeFiles) {
    await captureWebScreenshot(theme)
  }
}

captureAll()