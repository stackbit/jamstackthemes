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

loadTheme = async file => {
  console.log(file);
  const data = fs.readFileSync(path.join(themesFolder, file));
  const frontmatter = yamlFront.loadFront(data);

  if (frontmatter.github) {
    let github = gh(frontmatter.github);
    let themeKey = github.repo.replace("/", "-").toLowerCase();

    repoResponse = await axios.get(
      `https://api.github.com/repos/${github.repo}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    githubData[themeKey] = {
      theme_key: themeKey,
      name: repoResponse.data.name,
      repo: repoResponse.data.full_name,
      url: repoResponse.data.html_url,
      stars: repoResponse.data.stargazers_count,
      forks: repoResponse.data.forks_count,
      open_issues: repoResponse.data.open_issues_count,
      last_commit: repoResponse.data.pushed_at
    }

  }
};

Promise.all(themeFiles.map(file => loadTheme(file)))
  .then(res => {
    fs.writeFileSync('./data/themes.json', JSON.stringify(githubData, null, 2));
  })
  .catch(error => {
    console.log(error.message);
  });

