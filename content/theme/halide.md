---
title: "Halide"
github: https://github.com/danurbanowicz/halide
demo: https://halide.netlify.app
author: danurbanowicz
date: 2023-12-11
ssg:
  - Eleventy
cms:
  - Tina
  - No CMS
css:
  - CSS 
archetype:
  - Portfolio
description: Responsive image portfolio theme, built with Eleventy and Tina CMS
---

# Responsive image portfolio theme, built with Eleventy and Tina CMS

Halide is a very simple and fast image portfolio template, ready for deployment to Netlify.

It uses Eleventy under the hood to generate static HTML files from Markdown and YAML content, and responsive images in next-gen formats like AVIF and WebP.

It doesn't use a front-end framework, and only contains a few lines of vanilla JavaScript to provide some progressive enhancement. Halide leverages native browser features as much as possible.

Halide also comes with Tina CMS pre-configured. Tina CMS is an open source, headless content management system that uses GitHub as a robust and convenient content store.

## Features

* Responsive, static HTML front-end
* Exceptional performance ([Lighthouse test report](https://halide.netlify.app/reports/lighthouse/)
* Eleventy Image for optimized images in next-gen formats
* Automated <picture> syntax markup with srcset and sizes
* Optional Tina CMS for easy content management
* Dark mode support
* Customizable theme settings, colors, and typography
* Simple HTML/CSS/JS minification pipeline
* Clientside framework-free
* Markdown files for content
* Simple YAML configuration
* Netlify build caching for faster deploys
* Automatic CSP headers