#!/usr/bin/env node
const axios = require('axios');
const allSettled = require('promise.allsettled');
const {errorLog} = require('./errors')
const ora = require('ora');

const spinner = ora('Loading')

const testDemo = (theme) => {
    return axios.get(theme.demo_url).then((res) => {
        spinner.text = `${theme.demo_url} => checking Demo URL - ${res.status}`;
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
        spinner.text = `${theme.demo_url} => checking Demo URL - ${error}`;
        errorLog.push({
            themeKey: theme.theme_key || undefined,
            file: theme.file,
            repoUrl: theme.github_url,
            error
        })
    });
}

const testDemoUrls = async (themes) => {
    console.log("** Testing demo URL's **")
    spinner.start();
    await allSettled(themes.map(theme => testDemo(theme)))
    spinner.succeed("Success");
}


module.exports = {
    testDemoUrls
}