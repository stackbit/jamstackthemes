---
title: "Astroloop"
github: https://github.com/larry-xue/astroloop
demo: https://astroloop.larryxue.dev
author: Larry Xue
date: 2026-08-23
ssg:
  - Astro
cms:
  - No CMS
css:
  - Tailwind
archetype:
  - SaaS
  - Landing Page
  - Business
description: A landing page template for AI agent products, built around the questions autonomy raises — what the agent can touch, what it has to ask about first, and what a run costs.
---

# Astroloop

Most SaaS templates answer "what does it do". An agent buyer is asking what it
does when nobody is watching. Astroloop ships the two sections that answer
that, and scores 100 across all four Lighthouse categories.

## Features

- **Agent loop diagram** — goal, plan, act, tool call, observe, with the arrow
  that goes back and the gate that stops and waits for a person. Pure SVG,
  draws itself on scroll where the browser supports it.
- **Tool and permission matrix** — per tool: what it reads, what it writes,
  what needs approval, whether it is audited. Driven from a YAML file, with
  the tool definition shown in code underneath it.
- Usage-based pricing page, because agent products do not sell seats
- Astro 7, Tailwind CSS 4, self-hosted variable fonts
- **Zero client-side JavaScript** — motion is CSS scroll-driven animation and
  degrades to static; scrolling is never hijacked
- Light and dark, chosen before first paint
- Content collections for the blog, RSS, sitemap, OG image
- MIT licensed and free for commercial use
