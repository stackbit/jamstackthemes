#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const gh = require('parse-github-url');
const axios = require('axios');

const themesFolder = './content/theme';
const themeFiles = fs.readdirSync(themesFolder);

const githubData = {};

const token = process.env.GITHUB_TOKEN;

console.log("***********************************")
console.log("Fetching Github Data for each theme")
console.log("***********************************")

loadTheme = async file => {
  // console.log(file);
  const data = fs.readFileSync(path.join(themesFolder, file));
  const frontmatter = yamlFront.loadFront(data);

  if (frontmatter.github) {
    let github = gh(frontmatter.github);
    let githubBranch = frontmatter.github_branch ? frontmatter.github_branch : 'master';
    let themeKey = github.repo.replace("/", "-").toLowerCase();
    if (githubBranch !== 'master') {
      themeKey = `${themeKey}-${githubBranch}`
    }

    repoResponse = await axios.get(
      `https://api.github.com/repos/${github.repo}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    ).then((res) => {
      // console.log(res.data);
      console.log(`${file} => ${res.data.html_url} - ${res.status}`);
      repoResponse = res;
      githubData[themeKey] = {
        theme_key: themeKey,
        name: repoResponse.data.name,
        repo: repoResponse.data.full_name,
        branch: githubBranch,
        url: repoResponse.data.html_url,
        stars: repoResponse.data.stargazers_count,
        forks: repoResponse.data.forks_count,
        open_issues: repoResponse.data.open_issues_count,
        last_commit: repoResponse.data.pushed_at
      }
    });
  }
};

Promise.all(themeFiles.map(file => loadTheme(file)))
  .then(res => {
    console.log("Writing data/themes.json...")
    fs.writeFileSync('./data/themes.json', JSON.stringify(githubData, null, 2));
  })
  .catch(error => {
    console.log(error);
  });

