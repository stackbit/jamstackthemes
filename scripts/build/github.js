#!/usr/bin/env node
const axios = require('axios');
const allSettled = require('promise.allsettled');
const rateLimit = require('axios-rate-limit');
const isBefore = require('date-fns/isBefore');
const parseISO = require('date-fns/parseISO');
const subYears = require('date-fns/subYears');
const formatDistanceToNow = require('date-fns/formatDistanceToNow')

if (!process.env.GITHUB_TOKEN) {
  throw new Error(
      'Cannot access Github API - environment variable "GITHUB_TOKEN" is missing'
  )
}

const token = process.env.GITHUB_TOKEN;
const axiosLimit = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 200 })

let errors = []

const fetchRepoData = async (markdownData) => {

  let themeKey = null;

  try {
    const res = await axiosLimit.get(
      `https://api.github.com/repos/${markdownData.repoName}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      })

      console.log(`${markdownData.file} => ${res.data.html_url} - ${res.status}`);
      const defaultBranch = res.data.default_branch
      const branch = markdownData.branch ? markdownData.branch : defaultBranch;
      const lastCommit = await fetchBranchData(markdownData.repoName, branch);
      themeKey = markdownData.repoName.replace("/", "-").toLowerCase() + "-" + branch;

      return {
        theme_key: themeKey,
        file: markdownData.file,
        name: res.data.name,
        title: markdownData.title,
        github_username: res.data.owner.login,
        repo: res.data.full_name,
        branch: branch,
        default_branch: defaultBranch,
        github_url: res.data.html_url,
        demo_url: markdownData.demoUrl,
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
    errors.push({
      theme_key: themeKey,
      file: markdownData.file,
      repoUrl: markdownData.repoUrl,
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
      console.log(`${repo} => last commit to branch '${branch}' ${lastCommitToNow}`)
      return lastCommit;
    }).catch((err) => {
      throw err
    });
}

const generateThemesData = async (markdownData, themesJsonData) => {

  console.log("** Fetching Repo data **")
  const result = await allSettled(markdownData.map(data => fetchRepoData(data)))
  const themes = result.filter(res => res.status === 'fulfilled').map(res => res.value)

  return {
    errors,
    themes
  }
}

module.exports ={
  generateThemesData
}