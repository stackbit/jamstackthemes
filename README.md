# Jamstack Themes

A list of Themes and Starters for JAMstack Sites. https://jamstackthemes.dev

## Submit A Theme

Anyone can submit a theme to the gallery. Simply fork this repo and add a new markdown file in `content/theme`, then submit a pull-request with the title "Theme Submission: theme-name`

The convention is to name the markdown file after your Github repo. For example `github.com/username/my-awesome-theme` would be `content/theme/my-awesome-theme.md`. If the filename is already taken that's ok, just name it something similar.

The markdown file should contain the following front-matter.

```yaml
---
title: "My Theme Name"
github: https://github.com/username/repo
demo: https://www.demo.com
author: Unknown Author
ssg:
  - Gridsome
cms:
  - NetlifyCMS
---
```

Images will be generated automatically based on the `demo` URL.


## Contribution Guidelines

Any open source themes with a public github repo can be submitted.

If you would like to propose new categories open an issue or make a pull request.

If you are adding a SSG or CMS which doesnt exist already you will need to add it as part of your pull-request. New taxonomy terms can be added by creating a markdown file under `content/ssg/` or `content/cms`. Take a look at the existing terms to see what front-matter is required. You will also need to upload an icon into `static/images/icons`, preferably the icon is in SVG format under 3KB. If it's a PNG please make sure the size is 60x60px and the size is as small as possible (you should be able to keep it under 5KB)

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

## Utilities

```
npm install
```

### Generate Github Stars

Requires a Github Token 

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
