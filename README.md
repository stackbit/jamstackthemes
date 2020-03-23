# Jamstack Themes

A list of Themes and Starters for JAMstack Sites. https://jamstackthemes.dev

## Submit A Theme

Anyone can submit an open-source theme to the gallery. 

1. Fork this repo and create a new markdown `.md` file in `content/theme` folder. The filename is typically named after your theme or repo, for example `hugo-air.md`
2. Edit the markdown file with the required front-matter as shown below.
3. Submit a pull-request with the title **Theme Submission: theme-name**

The markdown file should contain the following front-matter.

```yaml
---
title: "My Theme Name"
github: https://github.com/username/repo
demo: https://www.demo.com # Please make sure this links to the theme demo and not your personal/business site
author: Github Author
date: 2019-08-20 # This is the date you submitted the theme YYYY-MM-DD
github_branch: master # This is the repos default branch
ssg:
  - Gridsome
cms:
  - NetlifyCMS
css:
  - Bootstrap
archetype:
  - Blog
  - Portfolio
services:
  - Snipcart
  - Formstack
description: This theme is a lightweight Gridsome starter kit which is perfect for a blog or a portfolio
---

# A simple starter kit for Gridsome

This theme is a lightweight starter kit. It also gives you a well organised starting point to extend it for yourself.

## Features

* Customisable design tokens to make it your own  
* Customisable global data and navigation  
* Tags and tag archives  
* Progressively enhanced, semantic and accessible  
* _Super_ lightweight front-end  
* Sass powered CSS system with utility class generator  
* Service worker that caches pages so people can read your articles offline  
* An RSS feed for your posts

```

## Build

Github stars, image thumbnails and last commit date are generated at build time when this site is deployed to Netlify. Basically the Netlify site runs `npm run deploy`

While you may run these scripts locally for testing purposes you should not submit any of the generated files with your pull-request. Just submit the markdown file.

## Contribution Guidelines

* Any open source themes with a public github repo can be submitted.
* Please make sure the demo URL links to a demo of the theme and not your personal or business site.

If you are adding a SSG or CMS which doesnt exist already you will need to add it as part of your pull-request. New taxonomy terms can be added by creating a markdown file under `content/ssg/` or `content/cms`. Take a look at the existing files to see what front-matter is required. You will also need to upload an icon into `static/images/icons`, preferably the icon is in SVG format under 3KB. If it's a PNG please make sure the size is 60x60px and the size is as small as possible (you should be able to keep it under 5KB)

## Develop Locally

This site is built on [Hugo](https://gohugo.io/)

Development Server

```
hugo serve
```

Build Site

```
hugo
```

Generate Github stars and other metadata

```
npm install
export GITHUB_TOKEN=XXX
npm run fetch
```

> Generating github data requires a Github Token. You can generate this token in your Github account at settings > developer settings > personal access tokens https://github.com/settings/tokens


### Generate Github Data

```
export GITHUB_TOKEN=XXX
npm run generate-github
```

### Capture Screenshots

Will take screenshots of each theme, based on the demo link and store the files in `static/capture`

```
npm run capture-screenshots
```

### Generate Thumbnails

Will generate thumbnails for each theme. Uses Hires screenshots from `static/capture` and stores files in `static/images/theme/thumbnails`. 

```
npm run generate-thumbnails
```
