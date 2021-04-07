---
title: Eleventy + Stylus Blog Theme - Purple
github: https://github.com/ar363/eleventy-stylus-blog-theme
demo: https://eleventy-stylus-blog-theme-ar363.vercel.app/
author: ar363
date: 2021-03-23T00:00:00.000Z
ssg:
  - Eleventy
cms:
  - No CMS
css:
  - Stylus
archetype:
  - Blog
description: >-
  A nice-looking, mobile-first blog theme built with Eleventy SSG and Stylus
  Preprocessor
stale: false
---

# Eleventy + Stylus Blog theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/a180e099-11d2-49d4-9697-910d56980343/deploy-status)](https://app.netlify.com/sites/eleventy-stylus-blog-theme/deploys)

A theme repository that contains a blog built with [Eleventy](https://github.com/11ty/eleventy) and [Stylus](https://stylus-lang.com/)

## Features
 - 100% Lighthouse scores
 - Tags as taxonomy
 - Stylus CSS preprocessor
 - Integrated with Eleventy's official [navigation plugin](https://www.11ty.dev/docs/plugins/navigation/)
 - Also generates Atom RSS Feed with Eleventy's official [RSS plugin](https://www.11ty.dev/docs/plugins/rss/)
 - Sitemap generation
 - Non-post pages support (eg. About page, Contact page)
 - Modular type scale implemented in with Stylus

## Demos

 - Vercel: https://eleventy-stylus-blog-theme.vercel.app/
 - Netlify: https://eleventy-stylus-blog-theme.netlify.app/

## Deploy this template to your own site

Get your site up and running with a few clicks

 - [Deploy on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/11ty/eleventy-base-blog)
 - [Deploy on Vercel](https://vercel.com/import/project?template=11ty%2Feleventy-base-blog)

## Prerequisites for local development
[Node.js 12](https://nodejs.org/download/release/latest-v12.x/)

[Yarn](https://yarnpkg.com/) package manager


## Getting started locally

1. Clone this repo
```
git clone https://github.com/ar363/eleventy-stylus-blog-theme my-blog
```

2. Navigate to the blog directory
```
cd my-blog
```

3. Install dependencies with [yarn](https://yarnpkg.com/)
```
yarn
```
4. Edit `_data/site.js` according to your site preferences

5. Also optionally modify `stylus/abstracts/variables.styl` according to your preference

To watch for changes in Eleventy and Stylus, use `yarn dev`

To build without watching for changes, use `yarn build`
