---
title: "The Navigator"
github: https://github.com/edstuurman/the-navigator
demo: https://the-navigator-sage.vercel.app/
author: Ed Stuurman
date: 2026-11-28
ssg:
  - Astro
cms:
  - No CMS
css:
  - Tailwind
archetype:
  - Blog
  - Portfolio
  - Personal
description: "Modular Astro 7 and Tailwind CSS v4 starter theme featuring a living CV timeline, interactive photo gallery with lightbox, operational activity log, Mermaid zoom diagrams, technical hover tooltips, RSS/Atom feeds, and optional multi-region AWS S3 + CloudFront Terraform stack."
---

**The Navigator** is a modular personal site, engineering blog, and portfolio starter built with **Astro 7** and **Tailwind CSS v4**.

### Key Features

- **Zero Runtime Framework Bloat**: Pure static HTML and CSS output with minimal, targeted vanilla TypeScript enhancements and dark/light theme support.
- **Modular Feature Toggles**: Enable or disable sections, navigation items, analytics, and integrations centrally via `src/theme.config.ts`.
- **Living CV & Tag Taxonomy**: Connects career history, technical articles, operational log entries, and photography into unified tag archives.
- **Build-Time Mermaid Pan/Zoom & Technical Tooltips**: Renders interactive Mermaid diagrams with pan/zoom controls and upgrades `<abbr>` tags into accessible floating definition cards.
- **Dynamic Satori OG Cards**: Build-time 1200x630 Open Graph and Twitter summary cards generated via Satori, Resvg, and Sharp, alongside RSS/Atom feeds.
- **Interactive Photography Gallery**: Justified grid layout with WebP optimization, keyboard/swipe lightbox navigation, and URL deep-linking.
- **Optional AWS Infrastructure Stack**: Includes Terraform templates and an ETag-verified S3 + CloudFront deployment script for multi-region static hosting.
