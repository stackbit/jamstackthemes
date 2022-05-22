---
title: "Hugo Liftoff"
github: https://github.com/wjh18/hugo-liftoff
demo: https://hugo-liftoff.netlify.app 
author: Will J. Holmes
date: 2022-05-22
ssg:
  - Hugo
cms:
  - NetlifyCMS
css:
  - SCSS 
archetype:
  - Blog
  - Portfolio
  - Personal
description: A customizable, SEO-optimized blog and portfolio theme with a modern design.
---

# Hugo Liftoff

Hugo Liftoff is a customizable, SEO-optimized blog and portfolio theme for Hugo with a modern design. An ideal choice for technical users jump-starting a personal brand, portfolio, or dev blog.

## Documentation

The documentation is hosted on this repo's [Github Wiki](https://github.com/wjh18/hugo-liftoff/wiki/1.-Overview/_edit).

* If you're ready to install and play around with the theme, see [Getting Started](https://github.com/wjh18/hugo-liftoff/wiki/2.-Getting-Started).
* For details on config settings and site params, see [Config & Params](https://github.com/wjh18/hugo-liftoff/wiki/3.-Config-&-Params).
* To start creating content and learning about front matter options, see [Content & Front Matter](https://github.com/wjh18/hugo-liftoff/wiki/4.-Content-&-Front-Matter).
* For info on shortcodes, see [Shortcodes](https://github.com/wjh18/hugo-liftoff/wiki/5.-Shortcodes).
* Lastly, to explore the theme's Netlify features, see [Netlify](https://github.com/wjh18/hugo-liftoff/wiki/6.-Netlify).

## Current Features

Below are the current features of this theme. Features labeled *optional* can be enabled or disabled in config. Features labeled *frontmatter* can be enabled or disabled in frontmatter.

### Netlify

* Custom headers / redirects with Netlify (optional)
* Netlify CMS integration with an example config and support for Hugo's built-in shortcodes (optional)
* Netlify Identity script in head for Netlify CMS auth with git-gateway (optional)
* Netlify functions support (optional)
* Netlify forms support for newsletter opt-in and contact page (optional)
* Sample `netlify.toml` file for streamlined deployment

### 3rd Party

* Google Analytics v4 or Universal Analytics (optional)
* Google Tag Manager as an alternative to GA (optional)
* Disqus comments (optional)
* Disable comments on a per-page basis (optional) (frontmatter)

### Newsletter

* Newsletter opt-in with Netlify Forms support (optional) (frontmatter)
* Global newsletter opt-in (optional)
* Customizable newsletter header, description and CTA text (optional)
* Override global newsletter on a per-page basis (optional) (frontmatter)
* Newsletter enable or disable for posts (frontmatter)

### Social

* Native Twitter, Github, Stack Overflow, LinkedIn and email social links with SVG (optional)
* Enable or disable social links in footer, homepage hero, and about page (optional)
* Enable or disable individual social links (optional)
* Facebook, LinkedIn, Twitter, Reddit and email social share icons with SVG for posts (optional)
* Enable or disable individual social share icons (optional)

### SEO / RSS

* Customized Open Graph, Twitter Cards, and Schema.org templates
* RSS feed that excludes any pages outside of the posts section
* Customizable title and SEO title tags or use title for both (frontmatter)
* Customizable summary and meta description or use description for both (frontmatter)
* Custom author meta tag (optional) (frontmatter)
* Custom title tags and meta descriptions for every page (optional) (frontmatter)
* `robots.txt` and `sitemap.xml`
* Disable search engine crawling (optional)

### Series / Subsections

* Series taxonomy support that lists other posts in a series on a post's single page (optional)
* Next/prev in section (or series for posts belonging to a series) links after post content
* Subsection support for posts with custom permalinks for clean SEO URLs (optional)
* Cards that link to post subsections after the hero section of the homepage if any exist
* Mobile-responsive, collapsable JS menu with automatic submenu support based on menu config

### Posts & Projects

* Toggle-able table of contents for posts (frontmatter)
* Related posts (frontmatter)
* Social share icons for posts (frontmatter)
* Reading time and word count for posts
* Last modified dates for posts (optional)
* Customizable live URL, source URL and tech stack details for projects (frontmatter)
* Project type taxonomy for categorizing projects
* Custom featured project on homepage (optional)

### Code snippets

* Syntax highlighting
* One-click copy button and language indicator for code snippets

### CSS / JS

* Add custom CSS / JS in `assets`
* CSS and JS minification
* Frontend build pipeline with ESBuild and ToCSS
* PostCSS processing (optional)
* `npm` completely optional unless using PostCSS / Autoprefixer or Netlify functions

### Images

* Image processing with Hugo resources
* Feature images for posts and projects from `assets` or page bundle (frontmatter)
* Custom homepage hero avatar image (optional)
* Enable/disable favicons (optional)

### Other Content

* Additional markdown footer text (optional)
* Add a label to drafts in development (optional)
* Responsive support for common markdown styles like tables
* About page with social links (optional if override homepage)
* Contact page with Netlify Forms support (optional)

### Hugo Defaults

* Example `config.toml` with the majority of Hugo defaults included for easy customization
* Override config settings based on Hugo environment

## Planned Features

The following features are planned for a future release.

* Customizable color scheme via Sass variables
* Light and dark mode toggle via Sass variables
* Real-time site search
* Image galleries for projects
* i18n support
* Additional advanced Google structured data schemas
* Custom shortcodes
* Thumbnails for posts on list pages
* Netlify CMS config file editing
