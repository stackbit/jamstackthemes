---
title: Fernfolio
github: https://github.com/TylerMRoderick/fernfolio-11ty-template
demo: https://fernfolio.netlify.app/
author: Tyler M. Roderick
date: 2021-06-05T00:00:00.000Z
ssg:
  - Eleventy
cms:
  - NetlifyCMS
css: null
archetype:
  - Blog
  - Portfolio
description: The super simple portfolio template built with Eleventy and NetlifyCMS
stale: false
---

## 🤔 What is this?
An [Eleventy](https://www.11ty.io/) theme designed to simplify the process of deploying a beautiful portfolio and blog. Launch your site in minutes!

## ✨ Features
* Built in support for [NetlifyCMS](https://www.netlifycms.org/) with editor previews
* Customizable blog and project pages with tag support
* Working contact form powered by [Netlify Forms](https://www.netlify.com/products/forms/)
* Super fast page render and high lighthouse scores
* Uses Markdown for content files and Nunjucks for layouts
* 100% Javascript framework free
* Continuous Deployment workflow via [Netlify](https://www.netlify.com/)
* Base styles powered by [Sakura](https://github.com/oxalorg/sakura) classless css framework
* Vanilla css for custom styles (keep it simple)

## 🚀 Quick Start

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TylerMRoderick/fernfolio-11ty-template&stack=cms)

### 1. Click the "Deploy to Netlify" button above
This will clone this repo to your github account and will deploy a copy of the demo website to your Netlify
account (you can create an account during this process if you don't have one)

### 2. Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. Hit the "Accept the invite" link and this should take you to the deployed site. From there, you can add your password to finish user setup.

### 3. Edit some content
Now that you are added as a CMS user, add `/admin` to the end of your site url, and log in using your new credentials. You should now see the content editor interface. Now you can start editing content! Any changes to your new repo will auto-deploy a new version to netflify. Cool huh?

### 4. Setup local environment
- Clone the repo locally `git clone https://github.com/TylerMRoderick/fernfolio-11ty-template.git`
- Navigate to root folder `cd your-site`
- Install the goods `npm install`
- Run it: `npm start`
- You should now be able to see everything running on localhost:8080
- Add some changes (view [theme customizations](https://fernfolio.netlify.app/posts/theme-customizations/) for some options)
- Push your changes to github and an auto-deploy should be triggered

## 🎩 Common issues

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".