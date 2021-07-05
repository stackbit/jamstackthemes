#!/usr/bin/env node
const urlSlug = require('url-slug');
const {getThemeKey, getRepoName} = require('./utils');
const ora = require('ora');
const spinner = ora('Loading')
const allowedSsg = ["hugo", "jekyll", "gatsby", "unibit"]
const allowedCms = ["contentful", "sanity", "no-cms"]

const generateStackbit = (frontmatter) => {
    const themeKey = getThemeKey(frontmatter.github)

    spinner.text = `${frontmatter.file}`

    let stackbitData = {
        theme_key: themeKey
    };

    if (frontmatter.ssg?.some(ssg => allowedSsg.includes(urlSlug(ssg))) && frontmatter.cms?.some(cms => allowedCms.includes(urlSlug(cms)))) {
        if (frontmatter.ssg.length > 1) {
            stackbitData.createUrl = `https://app.stackbit.com/create?theme=${frontmatter.github}`
        } else {
            stackbitData.createUrl = `https://app.stackbit.com/create?theme=${frontmatter.github}&ssg=${urlSlug(frontmatter.ssg)}`
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
        'https://github.com/guangmean/Niello',
        'https://github.com/fabien0102/gatsby-starter',
        'https://github.com/netlify-templates/one-click-hugo-cms'

    ];
    manualDisabled.forEach(url => {
        if (url === frontmatter.github) {
            if (stackbitData.createUrl) {
                delete stackbitData.createUrl
            }
        }
    })
    const manualEnabled = ['https://github.com/rohitguptab/rg-portfolio', 'https://github.com/narative/gatsby-theme-novela']
    manualEnabled.forEach(url => {
        if (url === frontmatter.github) {
            stackbitData.createUrl = `https://app.stackbit.com/create?theme=${frontmatter.github}&ssg=${urlSlug(frontmatter.ssg)}&cms=${urlSlug(frontmatter.cms)}`
        }
    })
    if (stackbitData.createUrl) {
        return stackbitData;
    }
    return false;

};

const generateStackbitData = (markdownData) => {
    console.log("** Generating Stackbit data **")
    spinner.start();
    const stackbitData = markdownData.map(theme => {
        return generateStackbit(theme)
    }).filter(stackbit => stackbit.createUrl);
    spinner.succeed("Success");
    return stackbitData;
};

module.exports = {
    generateStackbitData
}