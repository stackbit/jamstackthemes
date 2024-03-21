---
title: "Chano"
github: https://github.com/marpeand/chano
demo: https://chano.vercel.app/
author: marpeand
date: 2024-02-04
ssg:
  - Next
cms:
  - No CMS
css:
  - Tailwind 
archetype:
  - Blog
  - Portfolio
description: Personal Blog and Portfolio template build using NextJS & TailwindCSS.
---
<br>
<div align="center">
  <a href="https://github.com/marpeand/chano">
    <img src="https://raw.githubusercontent.com/marpeand/chano/main/public/static/logo-project.png" alt="Logo" width="120" height="120">
  </a>
  </br>
  </br>
  <h1>Chano</h1>
  </br>
  <p align="center">
    Personal Blog and Portfolio template build using NextJS & TailwindCSS. :rocket:
    <br />
    <a href="https://chano.vercel.app/"><strong>(https://chano.vercel.app/)</strong></a>
    <br />
    <br />
    <a href="https://github.com/marpeand/chano/discussions">Start a Discussion</a>
    ·
    <a href="https://github.com/marpeand/chano/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/marpeand/chano/issues/new">Request Feature</a>
  </p>
</div>
<br />


## About The Project

<img src="https://raw.githubusercontent.com/marpeand/chano/main/public/static/chano-screenshot.png">


### Key Features

-   Great page load speed
-   Use [ContentLayer](https://www.contentlayer.dev/) to compile mdx
-   Responsive for all devices
-   Fast configuration, only edit the `blog.config.js` file
-   Math syntax support using [rehypeKatex](https://katex.org/)
-   Code support using **rehypePrism**
-   Dark/Light mode
-   RSS feed
-   Tag support

# Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Installation

1. Clone the repo

    ```sh
    git clone https://github.com/marpeand/chano.git
    ```

2. Install packages

    ```sh
    yarn
    ```

3. Personalize the `blog.config.js` file with your own information

    ```js
    const CONFIG = {
      // Site config
      title: 'My Website',
      siteDescription: 'This is my personal website',
      url: 'https://mywebsite.com',
      ...
      ...
    }
    ```

4. Write your own blog posts using Markdown in `content/posts` folder.
5. Modify the `content/about.mdx` and `content/projects.mdx`.

## Content and Config

### Post

Every post is crafted using [ContentLayer](https://www.contentlayer.dev/). To ensure compilation, it must adhere to specific required and optional fields, as exemplified below:

```
title (required)
summary (optional but recommended)
date (required)
draft (required)
tags (optional)
lastUpdated (optional)
```

An example:

```
---
title: "Fourier Analysis and Its Applications"
summary: A comprehensive overview of Fourier analysis, its significance, and applications in various fields.
date: 2023-08-28
draft: false
tags:
    - Mathematics
    - Signal Processing
lastUpdate: 2023-08-21
---
```

### Projects

List your personal side projects in the `content/projects.mdx` file, here it's an example of these.

```
projects:
  Name of project group: (required)
    - name (Project name)
      href (Link to demo)
      description (Description of the project)
      imgSrc (The logo or any representative image, save it in /public/static folder)
```

```
---
projects:
    List of Project 1:
        - name: 'Project 1'
          href: 'https://example.com'
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          imgSrc: '/static/logo-project.png'

    List of Project 2:
        - name: 'Project 2'
          href: 'https://example.com'
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          imgSrc: '/static/logo-project.png'

    List of Project 3:
        - name: 'Project 3'
          href: 'https://example.com'
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          imgSrc: '/static/logo-project.png'
        - name: 'Project 4'
          href: 'https://example.com'
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          imgSrc: '/static/logo-project.png'
---
```

### Static Files

When adding images to your blog post, it's recommended to store them in the `public/static` directory. This ensures accessibility and proper linking. Follow these steps:
To reference an image in your project, use the path starting from the root of the `public` directory.

Example: If your image is in `public/static/my-blog-post/myimage.jpg`

### Navbar Logo for Dark and Light Themes

For a dynamic navbar that supports both dark and light themes, it's common to have two versions of the logo: one for the dark theme (`logo.dark.svg`) and one for the light theme (`logo.light.svg`).

For more context check [Logo.tsx](components/Logo.tsx)

# Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this project better, please fork the repo and create a pull request.

Also you can open an [issue](https://github.com/marpeand/chano/issues/new) with the label **"enhancement"** to propose a new feature.

# License

By contributing to the project, you agree to license your contributions under the same license as the project itself. See the [LICENSE](LICENSE) file for more information.
