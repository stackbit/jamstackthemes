---
title: Prezly Bea Theme
github: https://github.com/prezly/theme-nextjs-bea
demo: https://theme-nextjs-bea-the-good-newsroom.vercel.app/
author: Prezly
date: 2022-04-06T00:00:00.000Z
ssg:
  - Next
cms:
  - No CMS
archetype:
  - Blog
description: News site built with NextJS, Typescript and Prezly SDK
stale: false
---


Deploy the example using [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/):

| Vercel  | Netlify |
| ------------- | ------------- |
| [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/prezly/theme-nextjs-bea)  | [![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/prezly/theme-nextjs-bea)  |

### Scripts in package.json

In addition to regular Next scripts, we provide some scripts to help with code-styling checks.
This repo is configured with GitHub workflows to run linter checks on every push, but you can also run these checks locally, along with TypeScript checks, by running this script:
```Shell
npm run check
```

Prettier is configured to be managed by ESLint, but you can always run it separately with `npm run prettier` to check code-style, or with `npm run prettier:fix` to auto-fix code-style issues in the project.

## Documentation

### Business logic

The data layer is abstracted by [Prezly Theme Kit]. You can get more info on it in the repo README.

Logic for content display is based heavily on [Prezly Theme Starter]. Check it out if you only want to see the bare minimum required to display data from Prezly newsrooms.

### Testing/Token

To ease with development we have created a few sample newsrooms in different categories:

* **The Good Newsroom** [(preview on vercel)](https://theme-nextjs-bea-the-good-newsroom.vercel.app/): A newsroom filled with good news
* **Cookbook** [(preview on vercel)](https://theme-nextjs-bea-cookbook.vercel.app/): Recipes shared by the Prezly team
* **Anonymous Photographer** [(preview on vercel)](https://theme-nextjs-bea-photography.vercel.app/):  Pictures from a photographer. Combination of albums and imagery

A list of tokens/newsroom uuids that can be used to kickstart the theme.

| Name  | API Token  | Newsroom UUID |
|---|---|---|
| Good Newsroom  | `HKcab_nEbab_a7b2fe3a3465d3729772fa5381800ab5a0c30d8d`  | `578e78e9-9a5b-44ad-bda2-5214895ee036` |
| Cookbook  | `TKcab_nEbab_28432b75d3a85a826e51cd0b502a3d76acf98d19`  | `9d90b2c1-aed9-4415-a9fb-82dd3a2a1b52` |
| Anonymous Photographer | `SKcab_nEbab_0b63a6dd0b09286cc99fab93e6e80bfd9aecfbb5`  | `ce8299f6-a293-41df-8ffc-1c064d4401bc` |
