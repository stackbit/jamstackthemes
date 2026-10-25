---
title: "Academic Website Template"
github: https://github.com/sbryngelson/academic-website-template
demo: https://sbryngelson.github.io/academic-website-template/
author: Spencer Bryngelson
date: 2026-10-25
ssg:
  - Jekyll
cms:
  - No CMS
css:
  - SCSS
  - Bootstrap
archetype:
  - Personal
  - Portfolio
  - Blog
description: A fast, accessible Jekyll site for academics and research groups, with publications from BibTeX, team and alumni pages, and dark mode.
---

# A Jekyll website for academics and research groups

Publications come from a BibTeX file; team members, alumni, news, talks, teaching and software come from YAML files. The site makes no requests to third-party servers and scores 100 on Lighthouse accessibility. It deploys to GitHub Pages with the included workflow.

## Features

* Publications from BibTeX via Jekyll Scholar, with your name bolded and PDF, DOI, arXiv, code, slides and video buttons from BibTeX fields
* Team, alumni, news, talks, teaching and software pages driven by YAML files
* Site-wide search (Cmd+K) and dark mode that follows the system setting
* Self-hosted fonts and icons, one small JavaScript file, MathJax only on pages that ask for it
* Print stylesheet for clean PDF output
* `setup.sh` fills in your details; `setup.sh --clean` removes the demo content
