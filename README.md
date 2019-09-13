# Jamstack Themes

Find the perfect theme for your next Jamstack project.

## Submit A Theme

To submit your theme to the gallery, fork this repo and make the following changes, then do a pull-request.

1. Create a new markdown file in `content/theme` and add relevant front-matter.

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


## Contribution Guidelines

* Open source themes with a public github repo.

If you would like to propose new categories open an issue or make a pull request.

If you are adding a SSG or CMS which doesnt exist already you will need to upload an icon into `static/icons`

## Develop Locally

This site is built on [Hugo](https://gohugo.io/)

Fork and clone this repo.

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
