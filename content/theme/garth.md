---
title: "Garth"
github: https://github.com/daviddarnes/garth
demo: https://garth.darn.es
author: David Darnes
ssg:
  - Jekyll
cms:
  - No Cms
archetype:
  - Blog
css:
  - SCSS
date: 2019-11-01
github_branch: master
description: "🥁 A really basic theme for Jekyll"
---

🥁 A really basic theme for Jekyll, using the official Jekyll theme implementation.

## Contents
- [Installation](#installation)
- [Customising](#customising)
- [Site settings](#site-settings)
- [Page layouts](#page-layouts)
- [Credits](#credits)

## Installation

### As a Jekyll theme

1. Add `gem "garth-jekyll-theme"` to your `Gemfile` to add the theme as a dependancy
2. Run the command `bundle install` in the root of project to install the theme and its dependancies
3. Add `theme: garth-jekyll-theme` to your `_config.yml` file to set the site theme
4. Run `bundle exec jekyll serve` to build and serve your site
5. Done! Use the example [`_config.yml`](https://github.com/daviddarnes/garth/blob/master/_config.yml) file to set site-wide options

### As a GitHub Pages remote theme

1. Add `gem "jekyll-remote-theme"` to your `Gemfile` to add the theme as a dependancy
2. Run the command `bundle install` in the root of project to install the jekyll remote theme gem as a dependancy
3. Add `jekyll-remote-theme` to the list of `plugins` in your `_config.yml` file
4. Add `remote_theme: daviddarnes/garth` to your `_config.yml` file to set the site theme
5. Run `bundle exec jekyll serve` to build and serve your site
6. Done! Use the example [`_config.yml`](https://github.com/daviddarnes/garth/blob/master/_config.yml) file to set site-wide options

### As a Boilerplate / Fork

_(deprecated, not recommended)_

1. [Fork the repo](https://github.com/daviddarnes/garth#fork-destination-box)
2. Replace the `Gemfile` with one stating all the gems used in your project
3. Delete the following unnecessary files/folders: `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `screenshot.png`, `CNAME` and `garth-jekyll-theme.gemspec`
4. Run the command `bundle install` in the root of project to install the jekyll remote theme gem as a dependancy
5. Run `bundle exec jekyll serve` to build and serve your site
6. Done! Use the example [`_config.yml`](https://github.com/daviddarnes/garth/blob/master/_config.yml) file to set site-wide options

## Customising

When using Garth as a theme means you can take advantage of the file overriding method. This allows you to overwrite any file in this theme with your own custom file, by matching the file name and path. The most common example of this would be if you want to add your own styles or change the core style settings.

To add your own styles copy the [`styles.scss`](https://github.com/daviddarnes/garth/blob/master/assets/styles.scss) into your own project with the same file path (`assets/styles.scss`). From there you can add your own styles, you can even optionally ignore the theme styles by removing the `@import "garth";` line.

If you're looking to set your own colours copy the [`_colors.scss`](https://github.com/daviddarnes/garth/blob/master/_sass/_colors.scss) and main theme styles file [`garth.scss`](https://github.com/daviddarnes/garth/blob/master/_sass/garth.scss) into your project at the same file path (`_sass/`) and change variables however you wish. The settings are a mixture of custom variables and settings from [Sassline](https://medium.com/@jakegiltsoff/sassline-v2-0-e424b2881e7e) - follow the link to find out how to configure the typographic settings.

## Site settings

You'll need to change the `description`, `title` and `url` to match with the project.

## Page layouts

There are 3 layouts; `page`, `post` and `home` (home acts as the font page blog).

> **Note:** The Post List Page options are actually in the collection data within the `_config.yml` file, this is so they can be edited with CMSs such as [Siteleaf](https://siteleaf.com)

## Credits

- Thanks to [Sassline](https://sassline.com/) for the typographic basis, by [Jake Giltsoff](https://twitter.com/jakegiltsoff)
- Thanks to [Flexbox mixin](https://github.com/mastastealth/sass-flex-mixin) by [Brian Franco](https://twitter.com/brianfranco)
- Thanks to [Normalize](https://necolas.github.io/normalize.css/) by [Nicolas Gallagher](https://twitter.com/necolas) and [Jonathan Neal](https://twitter.com/jon_neal).
- Thanks to [pygments-css](http://richleland.github.io/pygments-css/) for the autumn syntax highlighting, by [Rich Leland](https://twitter.com/richleland)