# Jamstack Themes

A list of themes and starters for the Jamstack and static site generators. https://jamstackthemes.dev

## Submit A Theme

Anyone can submit an open-source theme by adding a markdown file to the `content/theme` folder. 

1. Fork this repo and create a new markdown `.md` file in `content/theme` folder. For example `hugo-air.md`. Another option is to add a new file using the [Github UI](https://github.com/stackbit/jamstackthemes/tree/master/content/theme) _(click the "add file" button)_ 
2. Add the required front-matter as shown in the **Example Theme** below.
3. Submit a pull request

> **Tip:** Do not generate the Github stars or theme screenshots. Please just submit the markdown file in your pull request.

**Example Theme**
```yaml
---
title: "My Theme Name"
github: https://github.com/username/repo
demo: https://www.demo.com # Please make sure this links to a theme demo and not your personal/business site. The demo url must use https
author: authorname
date: 2019-08-20 # Enter the date you submitted the theme YYYY-MM-DD
ssg:
  - Gridsome # at least 1 ssg is required
cms:
  - No CMS # at least 1 cms is required. If your theme uses markdown (no CMS) the cms should be "No CMS"
css: # css is optional
  - Bootstrap 
archetype: # archetype is optional
  - Blog
  - Portfolio
description: This is an amazing theme and this is a small description about it!
---

# A simple starter kit for Gridsome

This theme is a lightweight starter kit. It also gives you a well organised starting point to extend it for yourself.

## Features

* Customisable design tokens to make it your own  
* Customisable global data and navigation  
* Tags and tag archives  
* Progressively enhanced, semantic and accessible  
```

## Contribution Guidelines

* Any open source themes with a public github repo can be submitted.
* Please make sure the demo URL links to a demo of the theme and not your personal or business site.


## Develop Locally

Github stars, image thumbnails and last commit date are generated at build time when this site is deployed to Netlify. Basically the Netlify site runs `npm run deploy`

This site is built on [Hugo](https://gohugo.io/)

Development Server

```
hugo serve
```

Build Site

```
hugo
```

Generate Github stars, image screenshots etc

```
npm install
export GITHUB_TOKEN=XXX
npm run deploy
```

> Generating github data requires a Github Token. You can generate this token in your Github account at settings > developer settings > personal access tokens https://github.com/settings/tokens

## Submitting New Categories
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