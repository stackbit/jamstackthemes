#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');
const urlSlug = require('url-slug');

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

  // SSG
  if (frontmatter.ssg) {
    if (frontmatter.ssg.some(ssg => ["hugo", "jekyll", "gatsby", "unibit"].includes(urlSlug(ssg)))) {
      if (frontmatter.ssg.length > 1) {
        stackbitData[themeKey] = {
          createUrl: `https://app.stackbit.com/create?theme=${frontmatter.github}`
        };
      } else {
        stackbitData[themeKey] = {
          createUrl: `https://app.stackbit.com/create?theme=${frontmatter.github}&ssg=${urlSlug(frontmatter.ssg)}`
        };
      }
    }
  }

  // CMS
  if (frontmatter.cms) {
    if (frontmatter.cms.some(cms => ["netlifycms", "forestry"].includes(urlSlug(cms)))) {
      if (frontmatter.cms.length === 1) {
        if (stackbitData[themeKey]) {
          stackbitData[themeKey].createUrl += `&cms=${urlSlug(frontmatter.cms)}`
        }
      }
    }
    if (frontmatter.cms.some(cms => ["airtable", "contentful", "datocms", "firebase", "ghost", "kontent", "prismic", "sanity", "wordpress"].includes(urlSlug(cms)))) {
      if (frontmatter.ssg.some(ssg => ["unibit"].includes(urlSlug(ssg)))) {

      } else {
        delete stackbitData[themeKey]
      }
    }
  }

  // manual overrides
  const manualDisabled = [
    'https://github.com/runbytech/gatsby-theme-ultronele',
    'https://github.com/YoussefRaafatNasry/portfolYOU',
    'https://github.com/qwtel/hydejack',
    'https://github.com/joshgerdes/jekyll-uno',
    'https://github.com/GDGToulouse/devfest-theme-hugo',
    'https://github.com/h-enk/doks',
    'https://github.com/ahmadiqbal1/jekyll-webpack-boilerplate',
    'https://github.com/SupunKavinda/jekyll-theme-leaf.git',
    'https://github.com/techonomics69/gatsby-netlify-form-example',
    'https://github.com/lawrencecchen/headless-comments',
    'https://github.com/Joy3Luo/Joy3luo.github.io',
    'https://github.com/chrisbobbe/jekyll-theme-prologue',
    'https://github.com/adityatelange/hugo-PaperMod/',
    'https://github.com/Kentico/kontent-jekyll-blog',
    'https://github.com/longpdo/neumorphism',
    'https://github.com/puresyntax71/hugo-theme-chunky-poster',
    'https://github.com/sharadcodes/jekyll-theme-dark-reader',
    'https://github.com/wkocjan/gatsby-theme-intro',
    'https://github.com/jameshamann/jekyll-material-theme',
    'https://github.com/fncnt/vncnt-hugo',
    'https://github.com/wizlee/gatsby-portfolio',
    'https://github.com/EmaSuriano/gatsby-starter-mate',
    'https://github.com/guangmean/Niello'
  ];
  manualDisabled.forEach(url => {
    if (url === frontmatter.github) {
      if (stackbitData[themeKey]) {
        delete stackbitData[themeKey]
      }
    }
  })
  const manualEnabled = ['https://github.com/rohitguptab/rg-portfolio', 'https://github.com/narative/gatsby-theme-novela']
  manualEnabled.forEach(url => {
    if (url === frontmatter.github) {
      stackbitData[themeKey] = {
        createUrl: `https://app.stackbit.com/create?theme=${frontmatter.github}&ssg=${urlSlug(frontmatter.ssg)}&cms=${urlSlug(frontmatter.cms)}`
      };
    }
  })
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
