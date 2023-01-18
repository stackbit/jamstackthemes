---
title: Jekyll LibDoc
github: https://github.com/olivier3lanc/Jekyll-LibDoc
demo: https://olivier3lanc.github.io/Jekyll-LibDoc/
author: Olivier 3lanc
date: 2022-09-01T00:00:00.000Z
ssg:
  - Jekyll
cms:
  - No CMS
archetype:
  - Documentation
  - Playground
description: A Jekyll documentation theme with built-in search and playground
stale: false
---

# A documentation theme with its playground

LibDoc is a Jekyll theme that was crafted to easily and quickly get properly designed documentation especially for CSS and Javascript libraries. It comes with a [built-in playground](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-playground.html) and local search engine.

![LibDoc layout](https://olivier3lanc.github.io/Jekyll-LibDoc/assets/libdoc/img/libdoc-layout-page-split.webp)
## Features

* **Quick and easy without installation<sup>new</sup>**<br> Quickly deploy Jekyll LibDoc on a Github repository with [remote theme feature](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-install.html#online---remote-theme)
* **Dual context: LibDoc + Playground**<br> LibDoc was made to craft documentation with its own embedded demos and examples. A major feature of the LibDoc Jekyll theme is its own built-in and configurable playground which is both a [layout](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-layouts.html#playground) and a syntax highlighter extension. It extends the [syntax highlighter](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-config.html#prismjs-syntax-highlighter) by running the specified code into a configurable context with user defined style sheets and scripts. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-playground.html)
* **Gem free, plugin free** <br>LibDoc runs without any Gem nor plugin.
* **Github Pages compatible Jekyll theme** <br>Easily deploy your project on Github Pages, LibDoc is fully compatible.
* **5 layouts** <br>LibDoc comes with dedicated [layouts](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-layouts.html) for common documentation usages.
* **Assets grid**<br> Built to allow visitors to view, download or copy URL of specified resources on your project. [Example](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-layout-assets.html)
* **Local search engine**<br> LibDoc has its own internal search engine based on [lunr.js](https://lunrjs.com/).
* **Multiple lazy-loaded playgrounds on any page** <br>Add as mush as playgrounds on your documentation pages, playgrounds are loaded once into the viewport.
* **Can work locally, even without Internet connection** <br>LibDoc can run locally with Jekyll serve or any http host - *assuming you set up local resources.*
* **Customizeable settings**<br> LibDoc has its own settings editable on needs in the configuration file [config.yml](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-config.html).
* **Front matter**<br> Optional parameters ready to be set into the front matter of each page and every layout, like `category`, `order` in sidebar and `unlisted` feature. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-front-matter.html)
* **Github Flavoured Markdown**<br> LibDoc comes with native support of [Github Flavoured Markdown](https://github.github.com/gfm/). [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-markdown.html)
* **Metadata**<br> LibDoc supports social networks metadata into its document `<head>` to enable proper social sharing. Favicon, image, author, color, language are supported in addition of site title and description. Metadata have dual settings for both [site/project](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-config.html#metadata) and [playground](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-config.html#playground)
* **Sidebar**<br> All the necessary UI components to navigate through your project. Customizeable features such as logo/text management, search engine and possibility to add links of page that are not contained into the project. All available pages of the project are listed into the responsive sidebar, excepting unlisted ones. You can also assign category to pages and set a custom order. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-config.html#sidebar)
* **Customizable Logo**<br> The top left of the LibDoc’s theme is a homepage link that can display just site title or a custom logo. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-sidebar.html#sidebar)
* **Pages order and category**<br> Pages created can optionally have a category and an order assigned through their front matter. Then, it is possible to group pages links in the sidebar with a tip above the link. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-front-matter.html)
* **Unlisted pages**<br> It is possible to remove page link from the sidebar and search results thanks to the front matter `unlisted` property. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-front-matter.html#unlisted)
* **Prims as syntax highlighter**<br> LibDoc uses customizeable [Prismjs](https://prismjs.com/) syntax highlighter for both playground and markdown code highlight. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-config.html#prismjs-syntax-highlighter)
* **TOC - Table Of Content**<br> LibDoc supports `{:toc}` automatically generated from kramdown - markdown engine - TOC styling the table of content onto a right sidebar. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-markdown.html#table-of-content-support)
* **Shields and badges**<br>![Badge example](https://shields.io/badge/style-for--the--badge-green?logo=appveyor&style=for-the-badge) <br>
Easily add [shields.io](https://shields.io/) badges into the footer. Create your own badges and add it through the config.yml. [Learn more](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-badges.html)

## Usage

It is possible to use LibDoc through different ways:

### Online - No installation as remote theme

*Available only on GitHub*, [remote theme feature](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#adding-a-theme) is the most simple way to use LibDoc, it does not require any installation, just follow these few steps:

1. **Create a repository** <br>Just add a new repository on your GitHub account. [Example](https://github.com/olivier3lanc/LibDoc-remote-demo/)
2. **Create a LibDoc config file** <br>Create and configure your LibDoc config file called [_config.yml](libdoc-config.html), required for GitHub Pages, do not forget to add/uncomment the following line:<br>`remote_theme: olivier3lanc/Jekyll-LibDoc`<br>[View a _config.yml example](https://github.com/olivier3lanc/LibDoc-remote-demo/blob/main/_config.yml)
3. **Enable Github Pages** <br>To automatically compile your LibDoc project, just enable GitHub Pages at `https://github.com/[GH_USER_NAME]/[REPO_NAME]/settings/pages`. Each time you commit and push on the specified branch, [Github Pages](https://pages.github.com) builds and hosts your project on the URL `https://[GH_USER_NAME].github.io/[REPO_NAME]`.

Your repository is now ready to be deployed as GitHub Pages website, all you have to do is adding your content! Learn more about [remote themes](https://github.blog/2017-11-29-use-any-theme-with-github-pages/)


### Online - No installation copy or clone

![Github.dev](assets/libdoc/img/libdoc-edit-online.webp)

It is possible to craft documentation with LibDoc only with your browser, [Github](https://www.github.com) and [Github Pages](https://pages.github.com). 

1. Copy, clone or fork [LibDoc repository](https://github.com/olivier3lanc/Jekyll-LibDoc)
2. On the forked/copy repository, press `Shift + .` or go to `https://github.dev/[GH_USER_NAME]/[REPO_NAME]/tree/[BRANCH_NAME]`
3. You are now into [Visual Studio Code](https://code.visualstudio.com/) and you can edit, commit and push.

To automatically compile your LibDoc project, just enable your instance on this page `https://github.com/[GH_USER_NAME]/[REPO_NAME]/settings/pages`. Each time you commit and push on the specified branch, [Github Pages](https://pages.github.com) builds and hosts your project on the URL `https://[GH_USER_NAME].github.io/[REPO_NAME]`.

### Local install

LibDoc requires only [Jekyll](https://jekyllrb.com/) to compile your work.

1. Install Jekyll on your machine following the steps described [here](https://jekyllrb.com/docs/)
2. Get the latest version of LibDoc 
    * [Download blank](https://github.com/olivier3lanc/Jekyll-LibDoc/archive/refs/heads/master.zip) or [Download with demo content](https://github.com/olivier3lanc/Jekyll-LibDoc/archive/refs/heads/develop.zip)
    * You can also clone repository from your terminal `git clone git@github.com:olivier3lanc/Jekyll-LibDoc.git`
3. Into the folder where LibDoc was copied, adjust your settings of your YAML file, Most important are
    * `url` <br>The host of your local set up, this can be for example *http://localhost* or *http://192.168.1.2* or domaine name
    * `baseurl` <br>The path to your local copy of LibDoc. For example */Jekyll-LibDoc/_site*
    * `title` <br>Title of the documentation
    * `description` <br>Description of your documentation project
4. Compile your project using:
    * `jekyll build`<br> Builds the project using *_config.yml*
    * `jekyll build -c _personal-config.yml` <br> Builds the project using *_personal-config.yml*
    * `jekyll build -c _personal-config.yml --watch` <br> Builds the project using *_personal-config.yml* and automatically compiles on detected changes.
    * Learn more about command line usage on [official Jekyll documentation](https://jekyllrb.com/docs/usage/)

### Local with remote theme

[View example repository](https://github.com/olivier3lanc/LibDoc-remote-demo/tree/local)

It is possible to only write your content without complete LibDoc installation, just use LibDoc as remote theme. You only need to use locally [Jekyll remote theme plugin](https://github.com/benbalter/jekyll-remote-theme)

1. Install Jekyll on your machine following the steps described [here](https://jekyllrb.com/docs/)
2. Add a Gemfile with the following line

  ```ruby
  gem "jekyll-remote-theme"
  ```
  and run `bundle install` to install the plugin

3. Add the following to your LibDoc's local config file `_config-local.yml`

  ```yml
  remote_theme: olivier3lanc/Jekyll-LibDoc
  plugins:
    - jekyll-remote-theme
  ```

4. Run `jekyll build` or with any custom config file `jekyll build -c _your-own-config.yml`

Feel free to use the [example repository](https://github.com/olivier3lanc/LibDoc-remote-demo/tree/local) as starter template.
