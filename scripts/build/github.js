#!/usr/bin/env node
const axios = require('axios');
const allSettled = require('promise.allsettled');
const rateLimit = require('axios-rate-limit');
const parseISO = require('date-fns/parseISO');
const formatDistanceToNow = require('date-fns/formatDistanceToNow')
const ora = require('ora');
const {errorLog} = require('./errors');
const {getThemeKey, getRepoName} = require('./utils');

if (!process.env.GITHUB_TOKEN) {
    throw new Error(
        'Cannot access Github API - environment variable "GITHUB_TOKEN" is missing'
    )
}

const token = process.env.GITHUB_TOKEN;
const axiosLimit = rateLimit(axios.create(), {maxRequests: 2, perMilliseconds: 200})
const spinner = ora('Loading')

const fetchRepoData = async (frontmatter) => {
    const themeKey = getThemeKey(frontmatter.github, frontmatter.github_branch)
    const repoName = getRepoName(frontmatter.github)
    try {
        const res = await axiosLimit.get(
            `https://api.github.com/repos/${repoName}`,
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
        spinner.text = `${frontmatter.file} => ${res.data.html_url} - ${res.status}`
        const lastCommit = await fetchBranchData(repoName, frontmatter.github_branch);

        return {
            theme_key: themeKey,
            file: frontmatter.file,
            name: res.data.name,
            title: frontmatter.title,
            github_username: res.data.owner.login,
            repo: res.data.full_name,
            branch: frontmatter.github_branch,
            default_branch: res.data.default_branch,
            github_url: res.data.html_url,
            demo_url: frontmatter.demo,
            stars: res.data.stargazers_count,
            forks: res.data.forks_count,
            open_issues: res.data.open_issues_count,
            last_commit: lastCommit,
            created_at: res.data.created_at,
            description: res.data.description,
            images: {
                hires: `https://www.jamstackthemes.dev/capture/${themeKey}.png`,
                thumbnail: `https://www.jamstackthemes.dev/images/theme/thumbnail/${themeKey}.jpg`,
                screenshot: `https://www.jamstackthemes.dev/images/theme/thumbnail/2x/${themeKey}-2x.jpg`
            }
        }
    } catch (err) {
        let error = "error fetching github repo"
        if (err?.response) {
            error = err.response
        }
        if (err?.response?.data) {
            error = err.response.data
        }
        spinner.text = `${frontmatter.file} => ${error}`
        errorLog.push({
            theme_key: themeKey,
            file: `file:/${frontmatter.absFile}`,
            repoUrl: frontmatter.github,
            error: error
        })
        throw err
    }
}

const fetchBranchData = (repo, branch) => {
    return axiosLimit.get(
        `https://api.github.com/repos/${repo}/branches/${branch}`,
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }).then((res) => {
        const lastCommit = res.data.commit.commit.author.date;
        const lastCommitToNow = formatDistanceToNow(parseISO(lastCommit));
        spinner.text = `${repo} => last commit to branch '${branch}' ${lastCommitToNow}`
        return lastCommit;
    }).catch((err) => {
        throw err
    });
}

const generateGithubData = async (markdownData, themesJsonData) => {
    spinner.start("Fetching data");
    const result = await allSettled(markdownData.map(frontmatter => fetchRepoData(frontmatter)))
    const themes = result.filter(res => res.status === 'fulfilled').map(res => res.value)
    spinner.succeed("Success - Fetching Github Data");
    return themes
}

module.exports = {
    generateGithubData
}