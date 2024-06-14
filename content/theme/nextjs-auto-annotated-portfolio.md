---
title: Developer Portfolio Site with Next.js
github: https://github.com/netlify-templates/auto-annotated-portfolio
demo: https://auto-annotated-portfolio.netlify.app/
author: Netlify
date: 2024-05-27
ssg:
  - Next
cms:
  - No CMS
css:
  - Tailwind 
archetype:
  - Blog
  - Portfolio
description: This is a full-fledged portfolio website built with Next.js, Tailwind CSS and Netlify Create with Git Content Source.
featured: false
netlify_deploy: https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/auto-annotated-portfolio
---

This is a full-fledged portfolio website built with [Netlify Create](https://www.netlify.com/platform/create/), Next.js, Tailwind & the Git Content Source.

The codebase showcases how to apply annotations at scale, meaning: how to make much of your components highlightable in the visual editor through data attributes without manually adding code throughout the codebase.

## This is achieved by:

- Adding an annotation property to the content objects at they're loaded (see src/utils/content.ts)
- When rendering the page, each content sub-object is dynamically matched to the appropriate component. At this point, wrap each component with an annotation, based on the abovementioned content property. See src/components/components-registry.tsx.


