---
title: Watery
github: https://github.com/brennanbrown/watery
demo: https://watery.netlify.app
author: brennanbrown
date: 2021-05-04T00:00:00.000Z
ssg:
  - Jekyll
cms:
  - No CMS
archetype:
  - Blog
description: >-
  A minimalist, bare-bones theme for Jekyll only using the Water.css framework
  while still following the best practices for accessibility and search-engine
  optimization.
stale: false
---

# Watery Theme for Jekyll

**Watery** is a minimalist, bare-bones theme for the popular JAMstack file-based CMS Jekyll that only uses the `<80kb` [**Water.css** framework](https://github.com/kognise/water.css) (hence the name!), while still following the best practices possible for accessibility and search-engine optimization.

I created this because I wasn't able to find an up-to-date starter/skeleton theme for Jekyll. Even the default theme, Minima, uses the large Bootstrap framework.

This project is aimed towards those curious about using Jekyll for the first time, and want to build from as close to scratch as possible. Alternatively, it still has all the features required for creating a hassle-free, informational website or blog in just a few clicks.

As of November 1st, 2020, with >70 posts on Watery, the website scores a perfect 100 in Performance, Accessibility, Best Practices, and SEO on an audit with [**Google Lighthouse**](https://developers.google.com/web/tools/lighthouse).

## Features

Despite Watery's minimalist nature, there are a few interesting features that have been added:

- A fully customizable and empty `_BLANK_config.yml` to make getting up-and-running easy.
- Having a `_pages` collection for easier organization.
- Auto-generated links in navigation to all pages in `_pages`.
- Auto-generated [tags page](https://watery.netlify.app/tags) that lists all tags used by all posts in chronological order.
- An author bio at the end of each post. (Located in `_inclues/author.html`)
- Full [Rouge](https://github.com/rouge-ruby/rouge) support for syntax code highlighting. (Currently using `base16.solarized.light`)
- Auto-generated RSS feed, sitemap, accessibility features, and search-engine optimization.
