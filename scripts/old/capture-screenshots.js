#!/usr/bin/env node
const Pageres = require('pageres');
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');
const argv = require('yargs').argv

const themesFolder = path.join(__dirname, '../content/theme');
const hiresImagesFolder = path.join(__dirname, '../static/capture');

const themeFiles = fs.readdirSync(themesFolder);

console.log("******************")
console.log("Taking Screenshots")
console.log("******************")

captureWebScreenshot = async (theme, overwrite = false) => {
  const data = fs.readFileSync(path.join(themesFolder, theme));
  const frontmatter = yamlFront.loadFront(data);
  let github = gh(frontmatter.github);
  let branch = frontmatter.github_branch;

  if (frontmatter.disabled) {
    return false
  }

  if (github) {
    let themeKey = github.repo.replace("/", "-").toLowerCase() + "-" + branch;
    let themeImage = `${themeKey}.png`
    const url = frontmatter.demo

    if (!overwrite && fs.existsSync(path.join(hiresImagesFolder, themeImage))) {
      return false
    } else {
      console.log(`${theme} capturing`);
      const page = await new Pageres({delay: 2, filename: themeKey})
      .src(url, ['1280x960'], {crop: true})
      .dest(hiresImagesFolder)
      .run();
      return page
    }
  }
  return false;
};

const captureAll = async ()  => {
  for(const theme of themeFiles) {
    await captureWebScreenshot(theme)
  }
}

// if the cli command --theme=hugo-swift-theme.md is used, only capture that specific theme
if (argv.theme) {
  const theme = argv.theme;
  console.log(`Capturing screenshot for ${theme}`)
  captureWebScreenshot(theme, true)
} else {
  captureAll()
}

