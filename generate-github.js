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
let errors = {}

const token = process.env.GITHUB_TOKEN;
const axiosLimit = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 100 })

console.log("***********************************")
console.log("fetching Github data for each theme")
console.log("***********************************")

const loadThemeData = file => {
  const fileData = fs.readFileSync(path.join(themesFolder, file));
  const frontmatter = yamlFront.loadFront(fileData);
  
  try {
    let enabled = frontmatter.disabled ? false : true;
    let repoUrl = frontmatter.github
    let repoName = gh(frontmatter.github).repo; // stackbithq/stackbit-theme-fresh
    let branch = frontmatter.github_branch;
    return { file, repoUrl, repoName, branch, enabled }
  }
  catch {
    throw new Error(`${file} invalid github frontmatter`)
  }
};

const getBranch = async (defaultBranch, theme) => {
  return axiosLimit.get(
    `https://api.github.com/repos/${theme.repoName}/branches/${defaultBranch}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      const lastCommit = res.data.commit.commit.author.date
      return lastCommit;
    }).catch((err) => {
      console.log(theme.file, err.message)
      errors[theme.repoName] = {
        file: theme.file,
        repoUrl: theme.repoUrl,
        error: err.response
      }
      throw err
    });
}

const getGithubData =  (theme) => {
  
  return axiosLimit.get(
    `https://api.github.com/repos/${theme.repoName}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then(async (res) => {
      const defaultBranch = res.data.default_branch
      const themeKey = theme.repoName.replace("/", "-").toLowerCase() + "-" + defaultBranch;
      const lastCommit = await getBranch(defaultBranch, theme)
      console.log(`${theme.file} => ${res.data.html_url} - ${res.status} | ${lastCommit}`);
      githubData[themeKey] = {
        theme_key: themeKey,
        file: theme.file,
        name: res.data.name,
        github_username: res.data.owner.login,
        repo: res.data.full_name,
        branch: defaultBranch,
        url: res.data.html_url,
        stars: res.data.stargazers_count,
        forks: res.data.forks_count,
        open_issues: res.data.open_issues_count,
        last_commit: lastCommit
      }
      return githubData[themeKey]
    }).catch(err => {
      console.log(theme.file, err.message)
      errors[theme.repoName] = {
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

  // Check if any of the allSettled promises failed.
  const errors = results.filter(error => error.status === 'rejected');

  if (errors.length) {
    console.log("Error")
    console.log(errors);
    console.log(Object.keys(errors).length)
    throw new Error("Error fetching github data");
  } 
  
  // Sort data
  let sortedGithubData = {}
  Object.keys(githubData).sort().forEach(key => {
    sortedGithubData[key] = githubData[key];
  });

  return sortedGithubData;
}

getThemes().then(res => {
  console.log("Success")
  console.log("Writing data/themes.json...")
  fs.writeFileSync('./data/themes.json', JSON.stringify(res, null, 2));
}).catch(err => {
  console.log(err);
})

