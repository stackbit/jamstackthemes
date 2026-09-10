---
title: "Canterbury (Hugo)"
github: https://github.com/ChurchCreation/church-canterbury-hugo
demo: https://churchcreation.com/demo/canterbury/
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
description: A free church website template for Anglican, Episcopal and Catholic parishes. The liturgical season is computed from the date and colours the page, and the movable feasts are worked out rather than typed in.
featured: false
---

The liturgical season is computed from the date and colours the page, and the movable feasts are worked out rather than typed in, so the calendar cannot go stale.

## Pages

Services, Music, The church year, Weddings/baptisms/funerals, Plan a visit, About, Contact.

## Getting started

```bash
git submodule add the repo into themes/, then set theme in your config
```

## Notes

- Typefaces are self-hosted and subset to the faces used, so the theme makes **no external requests at all** — no CDN, no webfont service, no analytics.
- Dark mode follows the visitor's system setting, with a toggle.
- Everything a church edits once — name, address, telephone, service times, giving link — lives in a single `church.config.json`, so the header, footer and structured data cannot drift apart.
- URLs are flat (`about.html`) because the template's own runtime resolves the current nav link and its configuration from a flat path.
