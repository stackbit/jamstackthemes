---
title: "Be Useful | Next.js and Contentful Blog"
github: https://github.com/bulentyusuf/building-blocks
demo: https://nextblog.net/
author: Bulent Yusuf
date: 2026-07-27
ssg:
  - Next
cms:
  - Contentful
css:
  - Tailwind
archetype:
  - Blog
  - Personal
description: >-
  A statically generated personal blog on Next.js App Router and Contentful,
  with draft mode and live preview, in-browser search, sidenotes set in the
  margin, and on-demand revalidation so CMS edits go live without a redeploy.
---

# A personal blog built on Next.js and Contentful

An extension of Vercel's Next.js Blog with Draft Mode starter, developed into a
complete personal publishing setup and shared under the same MIT licence.

The content model is deliberately compact. A Post type backed by Author,
Category and Tag, plus a Code Block for embedded snippets, a Prompt Block for
publishing the generative-image prompt behind a cover, a Sidenote for asides set
in the margin, a Page type for standalone pages, and a Browse Intro holding the
editable standfirst on each browse page. A Contentful export and a seed script
ship with the repo, so a fresh fork has content to render from the first build.

## Features

* Static generation with on-demand revalidation, so CMS edits go live by webhook without a redeploy
* Draft mode and live preview for working on posts before they publish
* Site search that runs entirely in the visitor's browser via Pagefind, with no third-party service and no query leaving the page
* Syntax-highlighted code blocks with a copy button, highlighted at build time by Shiki
* Sidenotes that float into the right margin on wide screens and collapse behind their reference number on narrow ones, opening without JavaScript
* Per-post table of contents, reading time, and image lightbox
* Light and dark colour schemes following the operating system preference
* Tag landing pages and a glossary indexing every topic with its posts grouped beneath it, plus tag pills on posts and on every listing card
* Archive grouped by year, paginated home, category and author listings, and landing pages for each
* Responsive header nav with inline links from `md` up and a hamburger disclosure on mobile
* Sitemap, robots.txt, RSS feed, Open Graph and Twitter card metadata, and breadcrumb structured data
* Skip link, a single visible focus indicator across the site, and reduced-motion support
* Content Security Policy, HSTS, and Permissions-Policy headers set in `next.config.js`
* TypeScript throughout, with a vitest suite — including automated accessibility checks over the rendered markup — and a full build gating every pull request
