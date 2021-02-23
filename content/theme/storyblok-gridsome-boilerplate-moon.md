---
title: Storyblok's Gridsome Boilerplate (Moon-Theme)
github: https://github.com/storyblok/storyblok-gridsome-boilerplate-moon/
demo: https://demo.storyblok.com/
author: Storyblok
ssg:
  - Gridsome
cms:
  - Storyblok
date: 2020-05-20T00:00:00.000Z
description: Gridsome Website by Storyblok
stale: false
---

<p align="center">
  <h1 align="center">Gridsome Website by Storyblok</h1>
</p>

Check the website [here](https://demo.storyblok.com/).

## Installation

Clone this project with:

```sh
$ git clone https://github.com/storyblok/gridsome-multilanguage-website.git
```

### Install all dependencies

```sh
$ yarn # or npm install
```

## Storyblok client configuration

To configure the Storyblok client we have to change the access Token, to get the token you need a [Storyblok account](https://app.storyblok.com/#!/), now that you have the token, we will go to the `gridsome.config.js` file and change the token, the file is at the root of the project:

```js
  // in gridsome.config.js
  module.exports = {
    siteName: 'Gridsome Multilanguage Website',
    plugins: [
      {
        use: 'gridsome-source-storyblok',
        options: {
          client: {
            accessToken: '<Your_Access_Token_Here>'
          },
          version: 'published',
          params: {resolve_relations: 'blog-post.next_post'},
          downloadImages: true,
          imageDirectory: 'assets/images'
        }
      }
    ],
  }
```

For more information about our Gridsome plugin, visit the Github [repository](https://github.com/storyblok/gridsome-source-storyblok#gridsome-source-storyblok).

### Run project in develop mode

```sh
$ yarn develop # or npm run develop
```

### Build the project

```sh
$ yarn build # or npm run build
```

### Storyblok Preview Location Configuration

See how to set up your location [here](https://www.storyblok.com/tp/gridsome-multilanguage-website-tutorial#add-the-editor-page).

## Duplicate this project in Storyblok

To duplicate this project in your Storyblok account, follow this instructions:

1. Create a Storyblok account (if you don't have one)
2. Call [this URL](https://app.storyblok.com/#!/build/73623) (It will create a space in your account with all stories and some settings from this project)
3. Setup the preview URL
4. Configure the token that you want to use

<p align="center">
  <h5 align="center">Powered by <a href="https://www.storyblok.com/" title="link to the Storyblok website">Storyblok</a></h5>
</p>
