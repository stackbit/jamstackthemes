---
title: Hugo Flex
github: https://github.com/de-souza/hugo-flex/
demo: https://de-souza.github.io/hugo-flex/
author: Léo de Souza
ssg:
  - Hugo
cms:
  - No CMS
  - Netlify
archetype:
  - Blog
  - Personal
date: 2023-01-19T17:04:45+01:00
description: A lightweight Hugo theme leveraging CSS Flexbox.
stale: false
---

# Hugo Flex

A lightweight Hugo theme leveraging CSS Flexbox.

This theme is verified to work with Hugo versions v0.105–v0.110.


## Features

- Flexbox-based responsive layout
- 100% speed score on PageSpeed Insight
- No framework
- No javascript
- Full posts in RSS feed
- RSS page looks like a normal page

Optional features:

- Show summaries on homepage
- Schema.org, Open Graph and Twitter Cards metadata
- Utterances comments widget
- Custom CSS and JS may be added [site-wide](https://github.com/de-souza/hugo-flex#custom-css-and-js), or [dynamically](https://github.com/de-souza/hugo-flex#dynamically-embedded) with shortcodes
- Built-in shortcodes:
  - [Netlify contact form](https://github.com/de-souza/hugo-flex#netlify-contact-form)
  - Privacy-friendly [Soundcloud player](https://github.com/de-souza/hugo-flex#soundcloud-player)


## Installation

1. [Install Hugo](https://gohugo.io/installation/).

2. [Create a Hugo site](https://gohugo.io/getting-started/directory-structure/).

3. Open a command prompt at the root of the site and download the theme:

```bash
git init
git submodule add https://github.com/de-souza/hugo-flex.git themes/hugo-flex
```

4. Add the theme to the [site configuration](https://gohugo.io/getting-started/configuration/). If the site configuration is a file called `hugo.yaml`:

```bash
echo 'theme: hugo-flex' >> hugo.yaml
```


## Configuration

Further instructions and explanations are available on [Github](https://github.com/de-souza/hugo-flex#configuration).


## License

This theme is licensed under the [Apache License 2.0](https://github.com/de-souza/hugo-flex/blob/master/LICENSE).
