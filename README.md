# Jamstack Themes

A list of themes and starters for the Jamstack and static site generators. https://jamstackthemes.dev

## Submit A Theme

Anyone can submit an open-source theme by doing a pull request.

1. Fork this repo and create a new markdown `.md` file in `content/theme` folder. For example `hugo-air.md`. 
2. Add the required front-matter as shown in the **Example Theme** below.
3. Submit a pull request

> 💡 Another option is to add a new file using the [Github UI](https://github.com/stackbit/jamstackthemes/tree/master/content/theme) _(click the "add file" button)_ 

**Example Theme**
```yaml
---
title: "My Theme Name"
github: https://github.com/username/repo
demo: https://www.demo.com 
author: authorname
date: 2019-08-20
ssg:
  - Gridsome
cms:
  - No CMS
css:
  - Bootstrap 
archetype:
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

    
## Submission Guidelines

* Any open source themes with a public github repo can be submitted.
* Please make sure the `demo` links to a theme demo and not your personal/business site. The demo url must use https
* at least 1 `ssg` is required.
* at least 1 `cms` is required. If your theme uses markdown (no CMS) the cms should be "No CMS"

## 🚯 People Copying This Site

It has come to our attention that other people have **copied this website completely** and are now attempting to use that site for their own personal gain. Not only have they copied this site verbatim, they have completely removed the git history and original author from the MIT License so that no credit is given to this project.

On top of this, they have attempted to justify their actions by implying they were somehow prevented from contributing to this project. This is a lie. They were told they could contribute and make PR's with new features and functionality. Unfortunately the only contributions they seemed interested in making were to promote their own themes to the top of the results and sell their premium themes on the site... They submitted no other features.

We are not saying people cannot use, remix and reference this website or it's data. But we'd ask that you do it in a respectful way. We will not be listing the website URL to the clone site here, we do not wish to further promote cheap spam activity like this. But if you do come across this site you will know it immediately. We also advise you not to purchase products from the following companies: Themefisher and Gethugothemes.
