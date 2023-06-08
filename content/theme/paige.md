---
title: Paige
github: https://github.com/willfaught/paige
demo: https://willfaught.com/paige
author: Will Faught
date: 2022-11-18
ssg:
  - Hugo
cms:
  - No CMS
css:
  - Bootstrap
archetype:
  - Blog
description: A simple Hugo theme
---

# paige

A simple Hugo theme.

## Features

- Blog
- Facebook sharing support
- Google Analytics support
- Landing page
- Light color scheme
- Menu navigation
- Minimal design
- Responsive, mobile-first layout
- Sections for other kinds of content
- Single column presentation
- Social links
- Twitter sharing support

## Design

HTML metadata is set automatically. The HTML author is the site author.
The HTML description is the page description. The HTML keywords is a
union of the page keywords, tags, and categories. Enhanced Facebook and
Twitter sharing is enabled. Google Analytics is included at the bottom
of the body, if configured. You must create favicons yourself.

The HTML title is the page title, followed by a middle dot, followed by
the site title. If one is missing, the other is used without the middle
dot. If both are the same, only one is used without the middle dot.

The HTML body can have a header, a body, and a footer. The header has
the section menus, if any; the page title, if any; the page description,
if any; and the page date, if any. The body has the page content, if
any. The footer has the site copyright notice, if any.

The section menus are activated if their path matches the current page.
Pages in the directory `content/` match the section path `/`. Pages in
the directory `content/foo/` match the section path `/foo/`. The section
menu identifiers, names, weights, paths, and order are configured in
`config.yaml`.

The page date is the publish date, if any; otherwise, it's the creation
date.

Everything is stacked vertically in one column and aligned to the
center.

The home page shows the `blurb`, `description`, `greeting`, and `title`
parameters from `content/_index.md`, the `avatar.jpg` and `cover.jpg`
images at the site root, and linked icons for all the social sites
configured in `config.yaml`.

Single pages use the `link` front matter parameter, if any, as the
reference for an anchor around the page title, if any.

List and term pages show page titles and descriptions per month and year
in descending order. An empty list has a "Nothing Here" header, and no
body.

Taxonomy pages list term links in an inline, unordered, sorted list.

The 404 page has a "Not Found" header, and no body.

If `partials/head.html` exists in the site, it is included at the end of
the head tag. If `partials/body.html` exists in the site, it is included
at the end of the body tag.

Stock Bootstrap 5.2.2 CSS and JavaScript, and Bootstrap Icons 1.10.2,
are used for style, functionality, and icons. They're loaded from the
Bootstrap CDN for every page.
