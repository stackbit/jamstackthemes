#!/usr/bin/env node
const axios = require('axios');
const allSettled = require('promise.allsettled');

let errors = []

const testDemo = (theme) => {
    return axios.get(theme.demo_url).then((res) => {
        console.log(`${theme.demo_url} => checking Demo URL - ${res.status}`);
        return true;
    }).catch(err => {
        let error = "error checking demo url"
        if (err?.response?.data?.message) {
            error = err.response.data.message
        }
        if (err?.response?.status === 404) {
            error = "demo url not found"
        }
        if (err.code === "ENOTFOUND") {
            error = "demo url not found"
        }
        if (err.code === "ECONNREFUSED") {
            error = "demo url connection refused"
        }
        console.log(`${theme.demo_url} => checking Demo URL - ${error}`);
        errors.push({
            themeKey: theme.theme_key || undefined,
            file: theme.file,
            repoUrl: theme.github_url,
            error
        })
    });
}

const testDemoUrls = async (themes) => {
    const result = await allSettled(themes.map(theme => testDemo(theme)))
    return errors
}


module.exports ={
    testDemoUrls
}