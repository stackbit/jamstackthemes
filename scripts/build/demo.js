#!/usr/bin/env node
const axios = require('axios');
const allSettled = require('promise.allsettled');
const {errorLog} = require('./errors')
const ora = require('ora');
const {getThemeKey, getRepoName} = require('./utils');
const {updateFrontmatter} = require('./markdown');
const spinner = ora('Loading')

const testDemo = (frontmatter) => {
    const themeKey = getThemeKey(frontmatter.github)

    return axios.get(frontmatter.demo).then((res) => {
        spinner.text = `${frontmatter.demo} => checking Demo URL - ${res.status}`;
        if (frontmatter.disabled) {
            updateFrontmatter(frontmatter.file, {
                disabled: false,
                disabled_reason: ""
            })
        }
        return true;
    }).catch(err => {
        let error = "error checking demo url"
        if (err) {
            if (err.code === "ENOTFOUND") {
                error = "demo url not found"
            }
            if (err.code === "ECONNREFUSED") {
                error = "demo url connection refused"
            }
            if (err.response) {
                if (err.response.status === 404) {
                    error = "demo url not found"
                }
                if (err.response.data) {
                    if (err.response.data.message) {
                        error = err.response.data.message;
                    }
                }

            }
        }
        updateFrontmatter(frontmatter.file, {
            disabled: true,
            disabled_reason: error
        })
        spinner.text = `${frontmatter.demo} => checking Demo URL - ${error}`;
        errorLog.push({
            theme_key: themeKey,
            file: frontmatter.file,
            repoUrl: frontmatter.github,
            error
        })
    });
}

const testDemoUrls = async (themesMarkdown) => {
    spinner.start("Testing Demo URL's");
    await allSettled(themesMarkdown.map(theme => testDemo(theme)))
    spinner.succeed("Success - Testing Demo URL's");
}


module.exports = {
    testDemoUrls
}