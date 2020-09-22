# Jamstack Themes

A list of Themes and Starters for JAMstack Sites. https://jamstackthemes.dev

## Submit A Theme

Anyone can submit an open-source theme to the gallery using a PR. 

1. Fork this repo and create a new markdown `.md` file in `content/theme` folder. For example `hugo-air-.md`
2. Edit the markdown file with the required front-matter as shown below.
3. Submit a pull-request with the title **Theme Submission: theme-name** (replace theme-name with your themes name)
4. You **do not** need to generate the Github stars or theme screenshots. Please just submit the markdown file in the PR. 

The markdown file should contain the following front-matter. 

* Please make sure to update the `date` and that at least 1 `ssg` and `cms` is specified. 
* If your theme uses markdown (no CMS) the cms should be `No CMS
* Please remove the comments from the front-matter

```yaml
---
title: "My Theme Name"
github: https://github.com/username/repo
demo: https://www.demo.com # Please make sure this links to the theme demo and not your personal/business site
author: authorname
date: 2019-08-20 # Enter the date you submitted the theme YYYY-MM-DD
github_branch: master # Specify the repos default branch
ssg:
  - Gridsome
cms:
  - No CMS
css:
  - Bootstrap
archetype:
  - Blog
  - Portfolio
description: This theme is a lightweight Gridsome starter kit which is perfect for a blog or a portfolio
---

# A simple starter kit for Gridsome

This theme is a lightweight starter kit. It also gives you a well organised starting point to extend it for yourself.

## Features

* Customisable design tokens to make it your own  
* Customisable global data and navigation  
* Tags and tag archives  
* Progressively enhanced, semantic and accessible  
```

## Submitting New Categories (Taxonomy Terms)
Themes can be categorised with terms from these 4 taxonomies. `ssg`, `cms`, `css` and `archetype`

If you are adding a theme which uses an SSG or CMS which doesnt exist you will need to add it as part of your pull-request. 

1. Create a new taxonomy term by creating the markdown file under `content/ssg/` or `content/cms`. For example let's say you wanted to add a new SSG called "Super Duper". Add a file under `content/ssg/super-duper/_index.md` and add the following frontmatter
```
---
title: "Super Duper"
icon: images/icons/super-duper.svg 
official_url: https://super-duper.org
---
```

2. Add the icon. You will need to upload an icon into `static/images/icons`. The icon should in SVG format under 3KB. If it's a PNG please make sure the size is 60x60px and the size is as small as possible (you should be able to keep it under 5KB)
3. Update the Javascript filter logic. Update the file `themes/jamstackthemes/assets/js/filter/filter-groups.js` and add `super-duper` to the ssg array.


## Contribution Guidelines

* Any open source themes with a public github repo can be submitted.
* Please make sure the demo URL links to a demo of the theme and not your personal or business site.


## Develop Locally

Github stars, image thumbnails and last commit date are generated at build time when this site is deployed to Netlify. Basically the Netlify site runs `npm run deploy`

While you may run these scripts locally for testing purposes you should not submit any of the generated files with your pull-request. Just submit the markdown file.

This site is built on [Hugo](https://gohugo.io/)

Development Server

```
hugo serve
```

Build Site

```
hugo
```

## Generate Github stars, image screenshots etc

```
npm install
export GITHUB_TOKEN=XXX
npm run fetch
```

> Generating github data requires a Github Token. You can generate this token in your Github account at settings > developer settings > personal access tokens https://github.com/settings/tokens


### Generate Github Data

Calls Github API and updates `data/themes.json` with data like number of stars, last commit etc.

```
npm run generate-github
```

### Capture Screenshots

Take screenshots of each theme and store the files in `static/capture`

```
npm run capture-screenshots
```

### Generate Thumbnails

Will generate thumbnails for each theme. Uses Hires screenshots from `static/capture` and stores files in `static/images/theme/thumbnails`. 

```
npm run generate-thumbnails
```
