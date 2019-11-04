#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');
const axios = require('axios');
const allSettled = require('promise.allsettled');
const rateLimit = require('axios-rate-limit');

const themesDataFile = './data/themes.json'
const themesFolder = './content/theme';
const themeFiles = fs.readdirSync(themesFolder);

let githubData = fs.existsSync(themesDataFile) ? JSON.parse(fs.readFileSync(themesDataFile)) : {};
let githubErrors = {}

const token = process.env.GITHUB_TOKEN;
const axiosLimit = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 100 })

console.log("***********************************")
console.log("fetching Github data for each theme")
console.log("***********************************")

const loadThemeData = file => {
  const fileData = fs.readFileSync(path.join(themesFolder, file));
  const frontmatter = yamlFront.loadFront(fileData);
  
  try {
    let draft = frontmatter.draft;
    let disabled = frontmatter.disabled;
    let repoUrl = frontmatter.github
    let repoName = gh(frontmatter.github).repo; // stackbithq/stackbit-theme-fresh
    let branch = frontmatter.github_branch;
    return { file, repoUrl, repoName, branch, disabled, draft }
  }
  catch {
    throw new Error(`${file} invalid github frontmatter`)
  }
};

const getBranch = (theme) => {
  return axiosLimit.get(
    `https://api.github.com/repos/${theme.repo}/branches/${theme.branch}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      const lastCommit = res.data.commit.commit.author.date
      console.log(`${theme.file} => last commit ${theme.branch} ${lastCommit}`)
      githubData[theme.theme_key].last_commit = lastCommit
      return lastCommit;
    }).catch((err) => {
      console.log(theme.file, err.message)
      githubErrors[theme.repo] = {
        file: theme.file,
        repoUrl: theme.repoUrl,
        error: err.response.data
      }
      throw err
    });
}

const getGithubData = (theme) => {
  
  return axiosLimit.get(
    `https://api.github.com/repos/${theme.repoName}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      console.log(`${theme.file} => ${res.data.html_url} - ${res.status}`);
      const defaultBranch = theme.branch ? theme.branch : res.data.default_branch;
      const themeKey = theme.repoName.replace("/", "-").toLowerCase() + "-" + defaultBranch;
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
        last_commit: res.data.updated_at,
        created_at: res.data.created_at
      }
      return githubData[themeKey]
    }).catch(err => {
      console.log(theme.file, err.message)
      githubErrors[theme.repoName] = {
        file: theme.file,
        repoUrl: theme.repoUrl,
        error: err.response.data
      }
      throw err
    });
}

const getThemes = async () => {

  const themeData = themeFiles.map(file => {
    return loadThemeData(file)
  })

  const filter = {
    draft: true,
    disabled: true
  };

  const filteredThemeData = themeData.filter(theme => {
    for (let key in filter) {
      if (theme[key])
        return false;
    }
    return true;
  });

  console.log(`Loading (${filteredThemeData.length}/${themeData.length}) theme files from ${themesFolder}`)
  console.log("Disabled ", themeData.filter(theme => theme.disabled).length)
  console.log("Drafts ", themeData.filter(theme => theme.draft).length)
  
  const results = await allSettled(themeData.map(theme => {
    return getGithubData(theme)
  }))

  const lastCommits = await allSettled(Object.keys(githubData).map(themeKey => {
    return getBranch(githubData[themeKey])
  }))

  // Check if any of the allSettled promises failed.
  const errors = results.filter(error => error.status === 'rejected');

  if (errors.length) {
    console.log(`${Object.keys(errors).length} Errors Founds`);
    console.log(githubErrors);
    throw new Error("Error fetching github data...");
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
