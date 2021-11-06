---
title: Eleventy Yetty
github: https://github.com/ygoex/yetty
demo: https://yetty.netlify.app/
author: Yolanda Gorriz Exposito
ssg:
  - Eleventy
cms:
  - No CMS
date: 2021-08-17T00:00:00.000Z
archetype:
  - Blog
  - Portfolio
description: >-
  Yetty is yet another [Eleventy](https://11ty.io) starter kit for my (& your)
  new projects. Built with accessibility and performance in mind.
stale: false
---

# Yet another starter kit for Eleventy

Yetty is yet another [Eleventy](https://11ty.io) starter kit for my (& your) new projects. Built with accessibility and performance in mind. It also gives you a well organised starting point to extend it for yourself.

## Features

- [Sass/Scss](https://github.com/sass/node-sass): Scss files are compiled before Eleventy builds the site. The files are compiled in the `./src/styles` folder and then will be passed through copy (see `.eleventy.js`) to the new site created under `./dist/`. For Netlify users, an alternative option with plugins is explained here: [https://css-tricks.com/making-my-netlify-build-run-sass/](https://css-tricks.com/making-my-netlify-build-run-sass/).
- [Critical CSS](https://github.com/gregives/eleventy-critical-css): Critical CSS is automatically included in the head of the document using the [eleventy-critical-css plugin](https://www.npmjs.com/package/eleventy-critical-css).
- PostCSS ([Autoprefixer](https://github.com/postcss/autoprefixer) and [PurgeCSS](https://github.com/FullHuman/purgecss)): Both dependencies have been set up to run through the main css stylesheet after Eleventy has generated the dist folder.
- Persistent dark mode using local storage as seen here: [https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- Cache busting via filter based on [https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/](https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/).
- HTML minified on prooduction with [https://www.npmjs.com/package/html-minifier](https://www.npmjs.com/package/html-minifier) package.
- PWA using [https://github.com/okitavera/eleventy-plugin-pwa](https://github.com/okitavera/eleventy-plugin-pwa) plugin.
- JS compilation and minification with [Webpack](https://webpack.js.org/) CLI.
- Image processing with [eleventy-img](https://github.com/11ty/eleventy-img) plugin. Generates multiple sizes images in two different formats (jpg and webp), and markup with `<figure>`, `<picture>` and native lazy loading.
- [Modernizr](https://modernizr.com/) CLI: To build a custom and minified version of the library as seen here: [https://v2.14islands.com/blog/2016/04/20/better-way-to-use-modernizr-with-command-line-config/](https://v2.14islands.com/blog/2016/04/20/better-way-to-use-modernizr-with-command-line-config/). Yetty is using it to detect if the browser supports Webp as background-image in CSS.
