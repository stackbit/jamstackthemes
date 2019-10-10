#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');
const axios = require('axios');
const allSettled = require('promise.allsettled');
const rateLimit = require('axios-rate-limit');

const themesFolder = './content/theme';
const themeFiles = fs.readdirSync(themesFolder);

let githubData = {};
let errorsGithub = {}

const token = process.env.GITHUB_TOKEN;

console.log("***********************************")
console.log("fetching Github data for each theme")
console.log("***********************************")

const loadThemeData = file => {
  const fileData = fs.readFileSync(path.join(themesFolder, file));
  const frontmatter = yamlFront.loadFront(fileData);
  
  try {
    let enabled = true
    if (frontmatter.disabled) {
      enabled = false;
    }
    let repoUrl = frontmatter.github
    let repoName = gh(frontmatter.github).repo;
    let branch = frontmatter.github_branch ? frontmatter.github_branch : 'master';
    let themeKey = repoName.replace("/", "-").toLowerCase() + "-" + branch;
    return { file, themeKey, repoUrl, repoName, branch, enabled }
  }
  catch {
    throw new Error(`${file} invalid github frontmatter`)
  }
};

const axiosLimit = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 100 })

const getGithubData = (theme) => {
  
  return axiosLimit.get(
    `https://api.github.com/repos/${theme.repoName}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      console.log(`${theme.file} => ${res.data.html_url} - ${res.status}`);
      githubData[theme.themeKey] = {
        theme_key: theme.themeKey,
        file: theme.file,
        name: res.data.name,
        repo: res.data.full_name,
        branch: theme.branch,
        url: res.data.html_url,
        stars: res.data.stargazers_count,
        forks: res.data.forks_count,
        open_issues: res.data.open_issues_count,
        last_commit: res.data.pushed_at
      }
      return githubData[theme.themeKey]
    }).catch(err => {
      console.log(theme.file, err.message)
      errorsGithub[theme.repoName] = {
        file: theme.file,
        repoUrl: theme.repoUrl,
        error: err.response
      }
      throw err
    });
}

const getThemes = async () => {

  const themeData = themeFiles.map(file => {
    return loadThemeData(file)
  }).filter((data => {
    return data.enabled
  }))

  const results = await allSettled(themeData.map(theme => {
    return getGithubData(theme)
  })).then(res => {
    return res
  })

  const errors = results.filter(p => p.status === 'rejected');
  if (errors.length) {
    console.log("Error")
    console.log(errorsGithub);
    console.log(Object.keys(errorsGithub).length)
  } else {
    console.log("Success")
    console.log("Writing data/themes.json...")
    const sortedGithubData = {};
    Object.keys(githubData).sort().forEach(function(key) {
      sortedGithubData[key] = githubData[key];
    });
    fs.writeFileSync('./data/themes.json', JSON.stringify(sortedGithubData, null, 2));
  }
    
  // Get API data 1 at a time
  // for(const theme of themeData) {
  //   await getGithubData(theme).then(res => {
  //     console.log(`Success ${res.file} - ${res.repo}`);
  //   }).catch(err => {
  //     console.log("Failure", err.message);
  //     console.log(errorsGithub)
  //     throw err
  //   })
  // }
}

getThemes().catch(err => {
  console.log(err);
})

