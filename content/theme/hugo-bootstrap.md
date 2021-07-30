---
title: "Hugo Bootstrap Theme"
github: https://github.com/razonyang/hugo-theme-bootstrap
demo: https://hugo-theme-bootstrap.netlify.app/ # Please make sure this links to a theme demo and not your personal/business site. The demo url must use https
author: razonyang
date: 2021-07-26 # Enter the date you submitted the theme YYYY-MM-DD
ssg:
  - Hugo # at least 1 ssg is required
cms:
  - No CMS # at least 1 cms is required. If your theme uses markdown (no CMS) the cms should be "No CMS"
css: # css is optional
  - Bootstrap 
archetype: # archetype is optional
  - Blog
description: An extreme fast, responsive and feature-rich blog theme for Hugo.
---

[English](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.md) · 
[简体中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-CN.md) · 
[繁體中文](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/README.zh-TW.md)

## Screenshots

![Screenshot](https://raw.githubusercontent.com/razonyang/hugo-theme-bootstrap/master/images/screenshot.png)

**Dark Mode**

![Screenshot in Dark Mode](https://raw.githubusercontent.com/razonyang/hugo-theme-bootstrap/master/images/screenshot-dark.png)

## Live Preview

- https://hugo-theme-bootstrap.netlify.app/ - Deploy on Netlify.
- https://hugo-theme-bootstrap.razonyang.com/ - A self-hosted server located in Asia.

There is also a [list of websites that use this theme](https://github.com/razonyang/hugo-theme-bootstrap/blob/master/USERS.md).

## Features

- Extreme Fast: [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https://hugo-theme-bootstrap.netlify.app/en/)'s score `95-100`.
- Built on top of [Bootstrap 5](https://getbootstrap.com/).
- Responsive.
- Various Palettes: `blue`, `blue-gray`, `brown`, `cyan`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`.
- [Highly Configurable](#configuration).
- Dark Mode Switcher.
- Font Size Switcher.
- Multilingual(I18N).
- Search.
- Breadcrumb.
- Archive.
- [Syntax Highlighting](#syntax-highlighting)
- Resources Lazy Loading: `image` and `iframe`.
- Reward Widget: supports Alipay and Wechat.
- Table of Contents.
- Share Buttons: supports [AddThis](https://www.addthis.com).
- [Comments](#comments): supports [Disqus](#disqus) and [Utterances](#utterances).
- [Custom Assets](#custom-assets): custom CSS and JS.
- [Hooks](#hooks): provides ability to add custom code in page, such as `head`, `body`, `sidebar` etc.
- [Social Links](#social-links).
- [Various Shortcodes](#shortcodes).
- [Twitter Cards](https://gohugo.io/templates/internal/#configure-twitter-cards) and [Open Graph](https://gohugo.io/templates/internal/#configure-open-graph).
- [Creative Commons License](https://creativecommons.org/licenses/)

## Installation

### Create a new site from scratch

```shell
$ hugo new site myblog
$ cd myblog
$ git init
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ cp -a themes/hugo-theme-bootstrap/exampleSite/* .
$ hugo server
```

> If you're using Windows, use `xcopy .\themes\hugo-theme-bootstrap\exampleSite /E` instead.

### Apply to the existing site

```shell
$ cd myblog
$ git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
$ mkdir config
$ cp -a themes/hugo-theme-bootstrap/exampleSite/config/* ./config
```

In this case, you will need to copy some directories into the **content**, such as the **archives** and **search** directory.

## Upgrade

```shell
$ cd themes/hugo-theme-bootstrap
$ git fetch
$ git checkout [version]
$ cd ../../
$ git add themes/hugo-theme-bootstrap
$ git commit -m 'Upgrade the theme'
```

- Replace the `[version]` with the latest version. The version can be listed by `git tag -l | sort -rV`.
- You can also checkout the `master` branch for getting the latest commit.

## Getting Started

```shell
$ hugo new content/en/posts/newpost.md
```

The command above create a new post written in English. Similarly, we can create a post written in Simplified Chinese:

```shell
$ hugo new content/zh-CN/posts/newpost.md
```

> Please remind that, the created posts are generally in draft state. You'll need the `-D` parameter to the command `hugo server` for previewing. When publishing posts, you need to change the `draft` to `false`, or delete `draft` directly.

## Configuration

As the example site shown, the configuration are separated into multiple files, this is much clearer than a single configuration file, especially in a multilingual website.

| Name | Type | Default | Description
|---|:-:|:-:|---
| `title` | String | - | Site title.
| `baseURL` | String | - | Site base URL.
| `copyright` | String | - | Site copyright. The `{year}` placeholder will be replaced with this year.
| `defaultContentLanguage` | String | `en` |
| `defaultContentLanguageInSubdir` | Boolean | `false` |
| `paginate` | Integer | `10` |
| `paginatePath` | String | `page` |
| `enableRobotsTXT` | Boolean | `true` |
| `disqusShortname` | String | - | [Disqus](#disqus) shortname.
| `googleAnalytics` | String | - | Google Analytics.
| `social` | Object | - | [Social Links](#social-links).
| `author` | Object | - | Profile shown in sidebar.
| `author.name` | String | - | Name
| `author.avatar` | String | `images/profile.webp` | Avatar
| `author.bio` | String | - | Bio
| `author.company` | String | - | Company
| `author.location` | String | - | Location
| `author.about` | String | - | The external about page. The internal about page will be used if not set.

## Parameters

### Global Parameters

| Name | Type | Default | Description
|---|:-:|:-:|---
| **Page** 
| `mainSections` | Array | `["posts"]` | Main sections
| `titleCase` | Boolean | `false` | Capitalized title or not
| `titleSeparator` | String | `-` | Title separator
| `comment` | Boolean | `true` | Whether to enable comments
| `toc` | Boolean | `true` | Whether to enable TOC
| `tocWordCount` | Integer | `280` | TOC is displayed only if the post's word count is greater than this value.
| `breadcrumb` | Boolean | `true` | Whether to enable breadcrumb
| `dateFormat` | String | `Jan 2, 2006` | Date format. Checkout the [Hugo Date and Time Templating Reference](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference) for details.
| `poweredBy` | Boolean | `true` | Whether to show powered by.
| `math` | Boolean | `false` | Whether to enable math globally.
| `logo` | String | `images/logo.webp` | Logo image.
| `brand` | String | - | Brand text.
| `menusPosition` | String | `right` | Menus position: `right`, `left`, `center`.
| `description` | String | - | Site description.
| `keywords` | String | - | Site keywords.
| `color` | String | - | Color mode, `light`, `dark` or dynamic. Default to dynamic.
| `palette` | String | - | Default palette. This will take effect after clearing the Cookie.
| `palettes` | Array | **ALL** | Available palettes. You can disable it by setting it to empty `[]`.
| `featuredPostCount` | Integer/Boolean | `5` | The number of featured posts shown in sidebar. Turn off by setting it to `false`.
| `recentPostCount` | Integer/Boolean | `5` | The number of recent posts shown in sidebar. Turn off by setting it to `false`.
| `relatedPostCount` | Integer/Boolean | `5` | The number of related posts. Turn off by setting it to `false`.
| `categoryCount` | Integer/Boolean | `10` | The number of categories shown in sidebar. Turn off by setting it to `false`.
| `tagCount` | Integer/Boolean | `10` | The number of tags shown in sidebar. Turn off by setting it to `false`.
| `seriesCount` | Integer | `10` | The number of series shown in sidebar.
| `fullWidth` | Boolean | `false` | Full width.
| `fixedHeader` | Boolean | `true` | Turn on/off fixed header.
| `reward` | Object | - | Reward
| `reward.alipay` | String | - | Alipay QR Code Image.
| `reward.wechat` | String | - | Wechat QR Code Image.
| `share` | Object | - | Share buttons
| `share.addThis` | String | - | [AddThis](https://www.addthis.com)'s `pubid`.
| `fontSize` | Object | Font Sizes | Comment or remove this parameter to disable font size switcher.
| `fontSize.small` | String | `.9rem` | Small font size.
| `fontSize.extraSmall` | String | `.8rem` | Extra small font size.
| `fontSize.large` | String | `1.1rem` | Large font size.
| `fontSize.extraLarge` | String | `1.2rem` | Extra large font size.
| **Archive**
| `archive` | Object | - | Archive configuration.
| `archive.paginate` | Integer | `100` | Archive pagination.
| `archive.dateFormat` | Integer | `Jan 2` | Archive date format.
| **Search**
| `search` | Object | - | Search configuration.
| `search.paginate` | Integer | `10` | Pagination
| `search.resultContentWordCount` | Integer | `240` | The maximum word count of result content for displaying.
| `search.fuse` | Object | - | [Fuse.js options](https://fusejs.io/api/options.html).
| `search.fuse.ignoreLocation` | Boolean | `true` |
| `search.fuse.location` | Integer | - |
| `search.fuse.isCaseSensitive` | Boolean | - |
| `search.fuse.minMatchCharLength` | Integer | - |
| `search.fuse.threshold` | Double | - |
| `search.fuse.distance` | Integer | - |
| `search.fuse.useExtendedSearch` | Boolean | - |
| **Webmaster Site Verification** 
| `siteVerification` | Object | - |
| `siteVerification.google` | String | - | Google
| `siteVerification.bing` | String | - | Bing
| `siteVerification.baidu` | String | - | Baidu
| `siteVerification.baiduUnion` | String | - | Baidu Union
| `siteVerification.so` | String | - | Qihoo 360
| `siteVerification.sogou` | String | - | Sogou
| `siteVerification.shenma` | String | - | Shenma
| **Analytics** 
| `analytics` | Object | - | Analytics configuration.
| `analytics.baidu` | String | - | Baidu Analytics.
| **Others** 
| `googleAdsense` | String | - | Google Adsense.
| `customCSS` | Array | - | Custom CSS. It is mainly used to import external CSS. See [Custom Assets](#custom-assets).
| `customJS` | Array | - | Custom JS. It is mainly used to import external JS. See [Custom Assets](#custom-assets).
| `utterances` | Object | - | [Utterances](#utterances) configuration.
| `utterances.repo` | String | - | Github repository.
| `utterances.issueTerm` | String | `pathname` | `pathname`, `url`, `title`, `og:title`.
| `utterances.label` | String | - | 
| `utterances.theme` | String | `github-light` | `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | Credit must be given to you, the creator.
| `creativeCommons.nc` | Boolean | `true` | Only noncommercial use of your work is permitted.
| `creativeCommons.nd` | Boolean | `true` | No derivatives or adaptations of your work are permitted.
| `creativeCommons.sa` | Boolean | `true` | Adaptations must be shared under the same terms.
| **Code Block** 
| `codeBlock` | Object | - | 
| `codeBlock.maxLines` | Integer | `7` | 
| `codeBlock.lineNos` | Boolean | `true` | `true`/`false` represents that show/hide the line numbers by default.
| **Post** 
| `post` | Object | - | 
| `post.excerpt` | String | `Summary` | Options: `description`
| `post.excerptMaxLength` | Integer | `320` | 

> Except the Google webmaster tool, the other webmaster tools cannot work with `hugo --minify`, because they cannot recognize the minified meta tag.

### Page Parameters

| Name | Type  | Default | Description
|---|:-:|:-:|---
| **Page** 
| `description` | String | - | Page description.
| `keywords` | Array | - | Page keywords.
| `comment` | Boolean | `true` | Whether to enable comments. It won't work if `comment` has been disabled globally.
| `toc` | Boolean | `true` | Whether to enable TOC. It won't work if `toc` has been disabled globally.
| `math` | Boolean | `false` | Whether to enable math.
| `reward` | Boolean | `true` | Whether to enable reward.
| `breadcrumb` | Boolean | `true` | Whether to enable breadcrumb.
| **Creative Commons License**
| `creativeCommons` | Object | - |
| `creativeCommons.by` | Boolean | `true` | Credit must be given to you, the creator.
| `creativeCommons.nc` | Boolean | `true` | Only noncommercial use of your work is permitted.
| `creativeCommons.nd` | Boolean | `true` | No derivatives or adaptations of your work are permitted.
| `creativeCommons.sa` | Boolean | `true` | Adaptations must be shared under the same terms.

## Syntax Highlighting

This theme requires the following parameters to be set to specific values.

- `lineNos`: `true`
- `lineNumbersInTable`: `false`
- `noClasses`: `false`

See also [Configure Highlight](https://gohugo.io/getting-started/configuration-markup#highlight).

### Style

```shell
$ hugo gen chromastyles --style=solarized-dark > assets/css/highlight.css
```

See also [All Supported Styles](https://xyproto.github.io/splash/docs/all.html).

## Comments

### Disqus

```toml
disqusShortname = "yourdiscussshortname"
```

> `disqusShortname` is a site's configuration, **not** a parameter. Place it under the `params` won't work.

Checkout the [Disqus](https://disqus.com/) website for details.

### Utterances

[Utterances](https://utteranc.es/) is a lightweight comments widget built on GitHub issues.

```toml
[utterances]
  repo = "user/repo"
  #issueTerm = "pathname" # pathname, url, title, og:title.
  #label = "comment" # Optional.
  #theme = "github-light" # github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark.
```

> Unlike Disqus, Utterances is a parameter. You should put it under the `params`.

## Custom Assets

There are two ways to customize the internal and external assets.

### Internal Assets

This is the best way to customize the theme's CSS and JS. Just create the files `assets/css/custom.css` and `assets/js/custom.js`.
These files will be bundled into one for reducing HTTP requests.

### External Assets

Any external CSS and JS resources can be imported by the parameters `customCSS` and `customJS`.

> Both of `customCSS` and `customJS` can also import the internal assets. Just put the files into the `static` folder.
## Hooks

Hooks are used for adding code on pages.

| Hook | Description |
|---|---|
| `head-end` | Before the `<head>` end |
| `body-end` | Before the `<body>` end |
| `main-begin` | Above of the `<main>` |
| `main-end` | Follow the `<main>` |
| `list-begin` | Above of the posts list |
| `list-end` | Follow the posts list |
| `sidebar-begin` | At very top of the sidebar |
| `sidebar-end` | Before the sidebar end |
| `content-begin` | Above of the post content |
| `content-end` | Follow the post content |
| `comments-begin` | Above of the comments |
| `comments-end` | Follow the comments |
| `footer-begin` | At very top of the footer |
| `footer-end` | Before the footer end |

For using a hook, you need to create an HTML file named with the hook name in the directory `layouts/partials/hooks`.

For example:

```shell
$ echo "SIDEBAR BEGIN" > layouts/partials/hooks/sidebar-begin.html
```

## Shortcodes

| Shortcode | Description | Usage
|---|---|---
| `alert` | Alter | `{{< alert "message" [type] >}}`, `[type]` can be one of `info`, `success`, `warning` and `danger`
| `jsfiddle` | JSFiddle | `{{< jsfiddle "user/id" >}}`
| `codepen` | CodePen | `{{< codepen "id" >}}`
| `jsrun` | JSRUN | `{{< jsrun "id" >}}`
| `bilibili`| Bilibili Video Player | `{{< bilibili "video ID" >}}`
| `youku`| Youku Video Player | `{{< youku "video ID" >}}`
| `iqiyi`| iQiyi Video Player| `{{< iqiyi "vid" "tvid" >}}`
| `tencentvideo`| Tencent Video Player | `{{< tencentvideo "video ID" >}}`
| `neteasemusic`| Netease Music player | `{{< neteasemusic "song ID" >}}`

## Social Links

The `social` is a set of key value pairs of social links that mapping from platform to user identifier.

Enable social links by creating a file `config/_default/social.toml` with the following content:

```toml
email = "user@domain.tld"
github = "githubusername"
# ...
```

| Platform | User Identifier |
|---|---|
| `email` | Email Address |
| `facebook` | Facebook Username |
| `github` | GitHub Username |
| `gitlab` | GitLab Username |
| `instagram` | Instagram Username |
| `linkedin` | LinkedIn Username |
| `quora` | Quora Username |
| `stackoverflow` | Stack Overflow User ID |
| `tumblr` | Tumblr Username |
| `twitter` | Twitter Username |
| `weibo` | Weibo Username |
| `zhihu` | Zhihu Username |
| `reddit` | Reddit Username |
| `telegram` | Telegram Username |
| `qq` | QQ Number |
| `dockerhub` | Docker Hub Username |
| `bitbucket` | Bitbucket Workspace ID |
| `medium` | Medium Username or custom domain(e.g. https://custom.domain.tld) |
| `lastfm` | Last.fm Username |
| `bibibili` | BiliBili User ID |

## Contribute

**Any contributions are welcome.**

- :star: if you are interested in this theme.
- [File an issue](https://github.com/razonyang/hugo-theme-bootstrap/issues/new)
  - Ask questions.
  - Report bugs.
  - Request features.
- Create a PR:
  - Fix issues and bugs.
  - Add new features.
  - Improve documentations.

### Develop

This theme relies on `npm` and `webpack` for development. The source of `js` and `scss` are placed in `src` directory.

**Install dependencies**

```shell
$ npm install
```

**Rebuild assets**

```shell
$ npm run build
```

> `npm run watch` rebuild assets on change.

**Preview**

```shell
$ cd exampleSite
$ hugo server --themesDir=../../
```

## FAQ

### How to remove the unwanted language?

- Delete the relative language items from `languages.toml`.
- Delete the configuration files those filenames contains language code, such as `config.zh-cn.toml`, `params.zh-cn.toml`.
- Change the value of `defaultContentLanguage` and `defaultContentLanguageInSubdir` of `config.toml`.
- Delete the relative posts or directories in `content`, such as `rm -r content/zh-cn`.
