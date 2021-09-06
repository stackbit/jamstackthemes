#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const yaml = require('js-yaml');
const {getThemeKey} = require('./utils');
const config = require('./config');

const updateFrontmatter = (file, update = {}) => {
    const absFilepath = path.resolve(config.themesMarkdownFolder, file)
    const fileData = fs.existsSync(absFilepath) ? fs.readFileSync(absFilepath) : null;

    let frontmatter = yamlFront.loadFront(fileData);
    let content = frontmatter.__content;
    delete frontmatter.__content;

    Object.keys(update).forEach((key, index) => {
        frontmatter[key] = update[key]
    });

    const fm = `---\n${yaml.dump(frontmatter)}---${content}`;

    fs.writeFileSync(absFilepath, fm);
}

const loadThemeFrontMatter = absFilename => {
    const fileData = fs.readFileSync(absFilename);
    const frontmatter = yamlFront.loadFront(fileData);

    if (!frontmatter.github) {
        const file = path.parse(absFilename).base;
        if (file === ".DS_Store") {
            fs.unlinkSync(absFilename)
            throw new Error(`${absFilename} invalid file. This file was deleted, try again...`)
        }
        throw new Error(`${absFilename} invalid github frontmatter`)
    }

    let title = frontmatter.title;
    let description = frontmatter.description;
    let draft = frontmatter.draft;
    let disabled = frontmatter.disabled;
    let github = frontmatter.github;
    let demo = frontmatter.demo;
    let github_branch = frontmatter.github_branch;
    let file = path.parse(absFilename).base;
    let absFile = absFilename
    let ssg = frontmatter.ssg
    let cms = frontmatter.cms
    return {
        title,
        description,
        draft,
        disabled,
        github,
        demo,
        github_branch,
        file,
        absFile,
        ssg,
        cms
    }

};

const generateMarkdownData = async (markdownFiles, options = {}) => {

    let filterCounts = {
        draft: 0,
        disabled: 0,
        latest: 0,
        skipped: 0
    }

    const markdownData = markdownFiles.map(absFilename => loadThemeFrontMatter(absFilename)).filter(frontmatter => {

        if (options.file) {
            // if the cli command --file=hugo-swift-theme.md is used, only fetch that specific theme
            if (options.file !== frontmatter.file) {
                filterCounts.skipped += 1
                return false
            }
            return true;
        }

        if (options.latest) {
            // if the cli command --latest is used, only fetch new themes which don't already exist in `data/themes.json`
            const themeKey = getThemeKey(frontmatter.github)
            if (config.themesJsonData[themeKey]) {
                filterCounts.latest += 1
                return false
            }
            return true
        }

        if (options.disabled) {
            if (frontmatter.disabled) {
                filterCounts.disabled += 1
                return false;
            }
        }
        if (options.draft) {
            if (frontmatter.draft) {
                filterCounts.draft += 1
                return false;
            }
        }

        return true;
    });


    if (options.file) {
        console.log(`Processing single theme - ${options.file}`)
    } else if (options.latest) {
        console.log(`Processing latest themes`)
    } else {
        console.log(`Processing all themes`)
        console.log(`Total ${markdownFiles.length} themes`)
        console.log(`Skipping ${filterCounts.disabled} disabled themes`)
        console.log(`Skipping ${filterCounts.draft} draft themes`)
        console.log(`Skipping ${filterCounts.latest} existing themes`)
        console.log(`Processing ${markdownData.length}/${markdownFiles.length} themes...`)
    }

    return markdownData;
}

module.exports = {
    generateMarkdownData,
    updateFrontmatter
}

