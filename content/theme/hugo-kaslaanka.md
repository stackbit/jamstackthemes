---

title: Kaslaanka
github: https://github.com/M1cR0xf7/kaslaanka
demo: https://m1cr0xf7.github.io/kaslaanka
author: m1cr0xf7
ssg:
  - Hugo
cms:
  - No Cms
date: 2022-09-26T19:09:26.000Z
description: 📝 A minimalist theme for Hugo.

---


# Kaslaanka

A minimalist theme for Hugo.

__**Live**__ Demo at: [m1cr0xf7.github.io/kaslaanka](https://m1cr0xf7.github.io/kaslaanka/)

this theme is a fork of [Hugo-tanka](https://github.com/nanxstats/hugo-tanka) theme.

this theme is a "do it yourself" theme, you probably want to change the css to make it your taste,
use `custom.css` to do it.


![tn.png](https://github.com/M1cR0xf7/kaslaanka/blob/f568378ba9b2be2afa2db1cfbd36ad51d04348e6/images/tn.png?raw=true)

![screenshot.png](https://github.com/M1cR0xf7/kaslaanka/blob/master/images/screenshot.png?raw=true)


## new features

- remove the bloat (utterances comments, progressivly, highlight.js)
- scriptless by default.
- removed bootstrap.
- changed how the index, single pages and blog posts look.
- blog list on the home page is limited, if the users want to see more they go to /blog/
- listing projects on the home page.
- brief about me on the home page.
- support unlisted articles.
- better favicons.
- better tags
- add multiple languages support
- **HUGE** first letter paragraph (if you want)
- Brief description under blog post title


### Installation

inside the folder of your Hugo site, run:
```shell
git submodule add https://github.com/M1cR0xf7/kaslaanka.git themes/kaslaanka
```

For more information, read the official [setup guide](https://gohugo.io/getting-started/installing/) of Hugo.

you should check out `exampleSite/`.

## Customization

### custom.css

add your custom css here `/static/css/custom.css`

```css
/* <span class="first-letter">H</span>ello World! */
.first-letter {
	font-family: "Roboto Serif";
}
```


### custom.js
add your custom javascript here `/static/js/custom.js`

```js
// be creative
for(;;){alert("HAHAHAHAHAH")}
```

### external scripts
you can add external scripts in `/layouts/partials/scripts.html`

```html
<script src="..." ... ></script>
```

### meta & link tags
you can add as much `<meta>` and `<link>` as you like in `/layouts/partials/meta.html`

### tags

```yaml
tags:
  - hello
  - ok
```

this post will be listed at /tags/hello/ and /tags/ok/

### config.yml
```yaml
sitename: "Site Name!"
baseURL: "/"
languageCode: en-us
title: "Kaslaanka Theme"
author: John Doe

enableEmoji: true
hasCJKLanguage: false
# You can change code highlight theme
pygmentsstyle: "tango"
pygmentscodefences: true

# if you want to add html to your markdown
markup:
  goldmark:
    renderer:
      unsafe: true

# Links of the navbar
menu:
  primary:
    - name: Home
      url: /
      weight: 1
    - name: About
      url: /about
      weight: 2
    - name: Subscribe
      url: /index.xml
      weight: 3

# You can add languages!
# do not expect it to work out of the box
# https://gohugo.io/content-management/multilingual/
defaultContentLanguage: en
languages:
  en:
    LanguageName: English
    # contentDir: content/english
  ru:
    LanguageName: русский
    # contentDir: content/russian

params:
  sitename: "Kaslaanka Theme"
  # it will produce: copyrights (c) 2022 joe
  copyrights: John Doe
  # path to the favicon directory
  # see ./layouts/_defaults/baseof.html line #30 to line #37
#  faviconpath: "/img/favicon"
  # projects will show in the index page
  myprojects:
    - name: "Totally Awesome Project"
      description: "Machine Learning Magic!!!"
      url: https://example.com
    - name: "Kaslaanka"
      description: "The best hugo theme ever!!!"
      url: https://github.com/M1cR0xf7/kaslaanka
  # link to more projects
  # show your github repositories as example
  # or create your own page.
  projectsURL: https://example.com

  # a brief about me
  brief_about: <center>Kaslaanka theme demo made with ❤️️</center>

# and don't forget
theme: kaslaanka

```

### posts

you can make a post unlisted by adding the following

```markdown
---

unlisted: true

---
```

add a brief description to a single blog page.

```markdown
---

brief: "This is my demo brief!"

---
```

### LICENSE
GPL-3.0
