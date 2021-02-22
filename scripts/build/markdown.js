#!/usr/bin/env node
const fs = require('fs');
const yamlFront = require('yaml-front-matter');
const yaml = require('js-yaml');
const parseGithubUrl = require('parse-github-url');
const argv = require('yargs').argv

const updateFrontmatter = (file, update = {}) => {
    console.log(`Updating frontmatter ${file}`, update)
    const fileData = fs.existsSync(file) ? fs.readFileSync(file) : null;

    if (!fileData) {
        console.log("file not found", file);
        return;
    }

    let frontmatter = yamlFront.loadFront(fileData);
    let content = frontmatter.__content;
    delete frontmatter.__content;

    Object.keys(update).forEach((key, index) => {
        frontmatter[key] = update[key]
    });

    const fm = `---\n${yaml.dump(frontmatter)}---${content}`;

    fs.writeFileSync(file, fm);
}

const loadMarkdownData = (markdownFiles) => {

    const filter = {
        draft: true,
        disabled: true
    };

    let filterCounts = {
        draft: 0,
        disabled: 0,
        latest: 0,
        skipped: 0
    }

    // Filter themes before fetching from Github
    const markdownData = markdownFiles.map(absFilename => loadThemeFrontMatter(absFilename)).filter(theme => {
        // Don't fetch themes with draft or disabled in the frontmatter
        for (let key in filter) {
            if (theme[key]) {
                filterCounts[key] += 1
                return false;
            }
        }
        // if the cli command --latest is used, only fetch new themes which don't already exist in `data/themes.json`
        if (argv.latest) {
            if (themesData[theme.themeKey]) {
                filterCounts.latest += 1
                return false
            }
        }
        // if the cli command --file=hugo-swift-theme.md is used, only fetch that specific theme
        if (argv.file) {
            if (argv.file !== theme.file) {
                filterCounts.skipped += 1
                return false
            }
        }
        return true;
    });

    console.log(`Loading (${markdownData.length}/${markdownFiles.length}) themes`)
    console.log("Disabled ", markdownData.filter(data => data.disabled).length)
    console.log("Drafts ", markdownData.filter(data => data.draft).length)
    console.log("Latest ", filterCounts.latest)
    console.log("Skipped ", filterCounts.skipped)

    return markdownData;
}

const loadThemeFrontMatter = absFilename => {
    const fileData = fs.readFileSync(absFilename);
    const frontmatter = yamlFront.loadFront(fileData);

    try {
        let title = frontmatter.title;
        let description = frontmatter.description;
        let draft = frontmatter.draft;
        let disabled = frontmatter.disabled;
        let repoUrl = frontmatter.github;
        let repoName = parseGithubUrl(frontmatter.github).repo; // stackbithq/stackbit-theme-fresh
        let demoUrl = frontmatter.demo;
        let branch = frontmatter.github_branch;
        let themeKey = repoName.replace("/", "-").toLowerCase() + "-" + branch;
        let file = absFilename;
        return { title, description, file, repoUrl, repoName, demoUrl, branch, themeKey, disabled, draft }
    }
    catch {
        throw new Error(`${fileName} invalid github frontmatter`)
    }
};

module.exports ={
    loadMarkdownData,
    updateFrontmatter
}