---
title: "Threshold (Hugo)"
github: https://github.com/ChurchCreation/church-threshold-hugo
demo: https://churchcreation.com/demo/threshold/
author: ChurchCreation
date: 2026-09-10
ssg:
  - Hugo
cms:
  - No CMS
css:
  - CSS
archetype:
  - Business
description: A free church website template for church plants and multisite churches. A fixed side rail instead of a hero, with pages for locations, next steps and messages.
featured: false
---

A fixed side rail instead of a hero, so the layout stays legible for a church meeting in three places at two times.

## Pages

I'm new, Locations, Messages, Next steps, Give.

## Getting started

```bash
git submodule add the repo into themes/, then set theme in your config
```

## Notes

- Typefaces are self-hosted and subset to the faces used, so the theme makes **no external requests at all** — no CDN, no webfont service, no analytics.
- Dark mode follows the visitor's system setting, with a toggle.
- Everything a church edits once — name, address, telephone, service times, giving link — lives in a single `church.config.json`, so the header, footer and structured data cannot drift apart.
- URLs are flat (`about.html`) because the template's own runtime resolves the current nav link and its configuration from a flat path.
