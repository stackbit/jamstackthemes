---
title: Gatsby Headless Multilingual
github: https://github.com/smastrom/headless-gatsby-multilang
demo: https://headlessmultilingual.gatsbyjs.io/
author: smastrom
date: 2021-10-17T00:00:00.000Z
ssg:
  - Gatsby
cms:
  - DatoCMS
archetype:
  - Blog
description: A multilingual blog starter for Gatsby completely driven by an headless CMS.
stale: false
---

# Headless Multilingual Starter for Gatsby with DatoCMS

A multilanguage blog starter for Gatsby completely driven by an headless CMS.

## Features

* 100% Headless: create pages and articles, manage languages, branding, menus, posts per page, SEO, PWA settings, slugs and much more directly on DatoCMS. 
* Localize everything: Translate slugs, SEO meta tags, PWA settings, alt tags, WAI-Aria attributes, menus and much more directly on DatoCMS.  
* Localized SEO meta tags injection 
* Language switcher component swapping between different and equal slugs per locale
* Automatic internal links localization using DAST and custom <Navigator /> component
* Multiple per-locale PWA manifest files generation on build time, dynamically injected to <head /> based on current language.
* Correspondent localized content queried directly inside components by using GraphQL and useStaticQuery
* Browser locale detection and redirection
* Paginated archive pages, prev/next article navigation, social sharing and synthax highlighting.
