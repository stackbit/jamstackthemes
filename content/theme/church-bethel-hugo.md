---
title: "Bethel (Hugo)"
github: https://github.com/ChurchCreation/church-bethel-hugo
demo: https://churchcreation.com/demo/bethel/
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
description: A free church website template for evangelical and Baptist congregations. Eight pages, self-hosted typefaces, dark mode and no external requests.
featured: false
---

Built around the questions a first-time visitor actually asks — what happens on a Sunday, whether to dress up, whether anyone will make them speak.

## Pages

New here, Sundays, Baptism, Groups, What we believe, About, Contact.

## Getting started

```bash
git submodule add the repo into themes/, then set theme in your config
```

## Notes

- Typefaces are self-hosted and subset to the faces used, so the theme makes **no external requests at all** — no CDN, no webfont service, no analytics.
- Dark mode follows the visitor's system setting, with a toggle.
- Everything a church edits once — name, address, telephone, service times, giving link — lives in a single `church.config.json`, so the header, footer and structured data cannot drift apart.
- URLs are flat (`about.html`) because the template's own runtime resolves the current nav link and its configuration from a flat path.
