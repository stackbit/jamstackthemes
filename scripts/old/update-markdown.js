#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const yaml = require('js-yaml');

function updateFrontmatter(file, update = {}) {
  const themeFilePath = path.join(__dirname, '../content/theme/', file)
  const fileData = fs.existsSync(themeFilePath) ? fs.readFileSync(themeFilePath) : null;

  if (!fileData) {
    console.log("file not found", file);
    return;
  }

  let frontmatter = yamlFront.loadFront(fileData);
  let content = frontmatter.__content;
  delete frontmatter.__content;

  Object.keys(update).forEach((key, index) => {
    frontmatter[key] = update[key]
  });

  const fm = `---\n${yaml.dump(frontmatter)}---${content}`;

  fs.writeFileSync(themeFilePath, fm);
}

module.exports = {
  updateFrontmatter,
};
