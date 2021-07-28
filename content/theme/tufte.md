---
title: "Tufte"
github: https://github.com/slashformotion/hugo-tufte
demo: https://slashformotion.github.io/hugo-tufte/
author: "Slashformotion, Shawn O'Hare"
date: 2021-07-28 # Enter the date you submitted the theme YYYY-MM-DD
ssg:
  - Hugo
cms:
  - No CMS 
archetype: # archetype is optional
  - page
  - post
description: Content centric Hugo blogging theme styled with Tufte-css.
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
  - **Description**: Wrap text in a blockquote and insert optional
  `cite` or `footer` metadata.
  - **Usage**: Accepts the named parameters `cite` and `footer`.
  - **Example**:
  ```html
  {{< blockquote cite="www.shawnohare.com" footer="Shawn" >}}
    There is nothing more beautiful than an elegant mathematical proof.
  {{< /blockquote >}}
  ```

- `div`
   - **Description**: This shortcode is provided as a work-around for wrapping
   complex blocks of markdown in div tags. The wrapped text can
   include other shortcodes
   - **Usage**: Identical to the `section` shortcode.
   Accepts the style parameters `class` and `id`.
   If only the positional argument `"end"` is passed, a closing tag
   will be inserted.
   - **Example**: `{{< div class="my-class" >}}` inserts a
   `<div class="my-class">` tag, while
   `{{<div "end" >}}` inserts the closing `</div>` tag.

- `epigraph`
  - **Description**: Create an epigraph with the wrapped text.
  - **Usage**: To include a footer with source attribution, pass in the
  optional named parameters `pre`, `cite`, `post`. These parameters
  make no styling assumptions, so spacing is important.  A more compactly
  styled epigraph will be used if the `type` parameter is set to `compact`.
  - **Example**:
  ```html
  {{< epigraph pre="Author Writer, " cite="Math is Fun" >}}
  This is an example of an epigraph with some math
  $ \mathbb N \subseteq \mathbb R $
  to start the beginning of a section.
  {{< /epigraph >}}
  ```

- `marginnote`
  - **Description**: Wrap text to produce a numberless margin note.
  - Usage: `{{< marginnote >}}...{{< /marginnote >}}`
  - **Example**: 
  ```html
  {{< marginnote >}}Some marginnote{{< /marginnote>}}
  ```

- `section`
   - **Description**: This shortcode is provided as a work-around for wrapping
   complex blocks of markdown in section tags. The wrapped text can
   include other shortcodes
   - **Usage**: Accepts the style parameters `class` and `id`.
   If only the positional argument `"end"` is passed, a closing tag
   will be inserted.
   - **Example**: `{{< section class="my-class" >}}` inserts a
   `<section class="my-class">` tag, while
   `{{<section "end" >}}` inserts the closing `</section>` tag.


- `sidenote`
  - **Description**: Wrap text to produce an automatically numbered sidenote.
  - **Usage**: identical to `marginnote`
  `{{< sidenote >}}...{{< /sidenote >}}`
  - **Example**: 
  ```html
  {{< sidenote >}}Some sidenote{{< /sidenote >}}
  ```

