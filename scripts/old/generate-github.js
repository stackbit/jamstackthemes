#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');
const axios = require('axios');
const allSettled = require('promise.allsettled');
const rateLimit = require('axios-rate-limit');
const isBefore = require('date-fns/isBefore');
const parseISO = require('date-fns/parseISO');
const subYears = require('date-fns/subYears');
const formatDistanceToNow = require('date-fns/formatDistanceToNow')
const argv = require('yargs').argv
const updateMarkdown = require('./update-markdown.js');

const themesDataFile = path.join(__dirname, '../data/themes.json');
const themesContentFolder = path.join(__dirname, '../content/theme');

let themesFiles = fs.readdirSync(themesContentFolder);
let themesData = fs.existsSync(themesDataFile) ? JSON.parse(fs.readFileSync(themesDataFile)) : {};
let githubErrors = {}

const token = process.env.GITHUB_TOKEN;
const axiosLimit = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 200 })

// Themes with no commits after a certain time period are marked as `stale`
const staleBeforeDate = subYears(new Date(), 1);

if (!process.env.GITHUB_TOKEN) {
  throw new Error(
      'Cannot access Github API - environment variable "GITHUB_TOKEN" is missing'
  )
}

console.log("***********************************")
console.log("Fetching Github data for each theme")
console.log("***********************************")
console.log(`themesDataFile ${themesDataFile}`)
console.log(`themesContentFolder ${themesContentFolder}\n`)

const loadThemeFrontMatter = fileName => {
  const fileData = fs.readFileSync(path.join(themesContentFolder, fileName));
  const frontmatter = yamlFront.loadFront(fileData);

  try {
    let title = frontmatter.title;
    let description = frontmatter.description;
    let draft = frontmatter.draft;
    let disabled = frontmatter.disabled;
    let repoUrl = frontmatter.github;
    let repoName = gh(frontmatter.github).repo; // stackbithq/stackbit-theme-fresh
    let demoUrl = frontmatter.demo;
    let branch = frontmatter.github_branch;
    let themeKey = repoName.replace("/", "-").toLowerCase() + "-" + branch;
    let file = fileName;
    return { title, description, file, repoUrl, repoName, demoUrl, branch, themeKey, disabled, draft }
  }
  catch {
    throw new Error(`${fileName} invalid github frontmatter`)
  }
};

const getBranchCommit = (theme) => {
  return axiosLimit.get(
    `https://api.github.com/repos/${theme.repoName}/branches/${theme.branch}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      const lastCommit = res.data.commit.commit.author.date;
      const lastCommitToNow = formatDistanceToNow(parseISO(lastCommit));
      const isStale = isBefore(parseISO(lastCommit), staleBeforeDate)
      console.log(`${theme.file} => last commit to branch '${theme.branch}' ${lastCommitToNow}`)
      themesData[theme.themeKey].last_commit = lastCommit;
      themesData[theme.themeKey].stale = isStale;
      if (theme.stale != isStale) {
        updateMarkdown.updateFrontmatter(theme.file, {
          stale: isStale
        })
      }
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

const getThemeGithubData = (theme) => {
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
      themesData[themeKey] = {
        theme_key: themeKey,
        file: theme.file,
        name: res.data.name,
        title: theme.title,
        github_username: res.data.owner.login,
        repo: res.data.full_name,
        branch: defaultBranch,
        github_url: res.data.html_url,
        demo_url: theme.demoUrl,
        stars: res.data.stargazers_count,
        forks: res.data.forks_count,
        open_issues: res.data.open_issues_count,
        last_commit: res.data.updated_at,
        created_at: res.data.created_at,
        description: res.data.description
      }
      return themesData[themeKey]
    }).catch(err => {
      console.log(theme.file, err.message)
      if (err.response.status === 401) {

      }
      if (err.response.status === 404) {
        updateMarkdown.updateFrontmatter(theme.file, {
          disabled: true,
          disabled_reason: err.response.data.message
        });
      }
      githubErrors[theme.repoName] = {
        file: theme.file,
        repoUrl: theme.repoUrl,
        error: err.response.data
      }
      throw err
    });
}


const checkDemoUrl = (theme) => {
  return axios.get(theme.demoUrl).then((res) => {
    console.log(`${theme.demoUrl} => checking Demo URL - ${res.status}`);
    return true;
  }).catch(err => {
    if (err) {
      if (err.response) {
        if (err.response.status === 404) {
          console.log(`${theme.demoUrl} => checking Demo URL - ${err.response.status}`);
          updateMarkdown.updateFrontmatter(theme.file, {
            disabled: true,
            disabled_reason: "demo url not found"
          });
        }
      } else if (err.code === "ENOTFOUND") {
        console.log(`${theme.demoUrl} => checking Demo URL - ${err.response.status}`);
        updateMarkdown.updateFrontmatter(theme.file, {
          disabled: true,
          disabled_reason: "demo url not found"
        });
      }
    }
  });
}

const getImages = (theme) => {
    themesData[theme.themeKey].images = {}
    themesData[theme.themeKey].images.hires = `https://www.jamstackthemes.dev/capture/${theme.themeKey}.png`
    themesData[theme.themeKey].images.thumbnail = `https://www.jamstackthemes.dev/images/theme/thumbnail/${theme.themeKey}.jpg`
    themesData[theme.themeKey].images.screenshot = `https://www.jamstackthemes.dev/images/theme/thumbnail/2x/${theme.themeKey}-2x.jpg`
}

const getThemes = async () => {

  const themesFrontMatter = themesFiles.map(fileName => {
    return loadThemeFrontMatter(fileName)
  })

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
  let filteredThemesFrontMatter = themesFrontMatter.filter(theme => {
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

  console.log(`Loading (${filteredThemesFrontMatter.length}/${themesFrontMatter.length}) themes`)
  console.log("Disabled ", themesFrontMatter.filter(theme => theme.disabled).length)
  console.log("Drafts ", themesFrontMatter.filter(theme => theme.draft).length)
  console.log("Latest ", filterCounts.latest)
  console.log("Skipped ", filterCounts.skipped)

  const results = await allSettled(filteredThemesFrontMatter.map(theme => {
    return getThemeGithubData(theme)
  }))

  if (!argv.skipBranchCommits) {
    await allSettled(filteredThemesFrontMatter.map(theme => {
      return getBranchCommit(theme)
    }))
  }

  filteredThemesFrontMatter.map(theme => {
    return checkDemoUrl(theme)
  })

  filteredThemesFrontMatter.map(theme => {
    return getImages(theme)
  })

  // Check if any of the allSettled promises failed.
  const errors = results.filter(error => error.status === 'rejected');

  if (errors.length) {
    console.log(`${Object.keys(errors).length} Errors Founds`);
    console.log(githubErrors);
    throw new Error("Error fetching github data...");
  }

  // Sort data
  let sortedThemesData = {}
  Object.keys(themesData).sort().forEach(key => {
    sortedThemesData[key] = themesData[key];
  });

  return sortedThemesData;
}

getThemes().then(res => {
  console.log("Success")
  console.log("Writing data/themes.json...")
  fs.writeFileSync(themesDataFile, JSON.stringify(res, null, 2));
}).catch(err => {
  console.log(err);
})
