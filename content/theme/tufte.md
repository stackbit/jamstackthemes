---
title: Tufte
github: https://github.com/slashformotion/hugo-tufte
demo: https://slashformotion.github.io/hugo-tufte/
author: Slashformotion, Shawn O'Hare
date: 2021-07-28T00:00:00.000Z
ssg:
  - Hugo
cms:
  - No CMS
description: Content centric Hugo blogging theme styled with Tufte-css.
stale: false
---

# Tufte Hugo Theme
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

Hugo-Tufte is a minimalist blog-like theme for the
[static site generator Hugo](https://gohugo.io) that
attempts to be a faithful implementation of the
[Tufte-css](https://github.com/edwardtufte/tufte-css) project.
It supports mathematical typesetting via [katex](https://katex.org/).
By utilizing copious partial templates the theme is largely customizable.

## State of Project

This is a fork of the original [hugo-tufte](https://github.com/shawnohare/hugo-tufte). 

## Features

### Math

[Katex](https://katex.org/) renders LaTeX written inside of markdown files.  LaTeX can be
written more or less as normal.  Some examples:

- This `$ \frac{1}{2} $` will be rendered inline.
- A simple displayed equation: `$$f(x, y) := e^{x^2 - y^2}.$$`

There currently seems to be some weirdness with other environments,
such as the `aligned` environment (`align*` is not supported by katex).  These environments will render provided
they are wrapped in `<p>` tags and blank lines.  The snippet below should
render correctly.
```
Let $G$ be a finite group with exponent $2$.  Then every element is
an involution, hence for any $x$, $y$ in $G$ we have:

<p>
\begin{aligned}
  e &= (xy)^2  \\
  &=xyxy \implies \\
  y^{-1} &= xyx \implies \\
  y^{-1}x^{-1} &= xy,
\end{aligned*}
</p>

establishing that $G$ is abelian.
```

### Site Parameters

The site specific parameters that this theme recognizes are:

- `subtitle` string: This is displayed under the main title.
- `showPoweredBy` boolean: if true, display a shoutout to Hugo and this theme.
- `copyrightHolder` string: Inserts the value in the default copyright notice.
- `copyright` string: Custom copyright notice.

### Page Parameters

- `hideDate` boolean: if true, do not display a page date.  When `meta` is set to
  true, `hideDate` takes greater precedence.
- `hideReadTime` boolean: if true, do not display the page's reading time
  estimate.  When `meta` is set to true, `hideReadTime` takes greater precedence.
- `math` boolean: if true, try to render the page's LaTeX code using MatheJax.
- `meta` boolean: if true, display page metadata such as author, date, categories provided
  these page parameters exist and are not overridden.  Content in the `/post` directory,
  (i.e., pages of type "post") ignore this parameter.
- `toc` boolean: if true, display the table of contents for the page.

### Shortcodes

This theme provides the following shortcodes in an attempt to completely
support all the features present in the
[Tufte-css](https://github.com/edwardtufte/tufte-css) project.

- `blockquote`
- `div`
- `epigraph`
- `marginnote`
- `section`
- `sidenote`

See the repo for more

