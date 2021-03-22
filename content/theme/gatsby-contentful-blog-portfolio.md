---
title: Gatsby Contentful Blog and Portfolio
github: https://github.com/escapemanuele/gatsby-contentful-blog-portfolio
demo: https://gatsby-contentful-portfolio-blog.netlify.com/
author: Emanuele Buccelli
ssg:
  - Gatsby
cms:
  - Contentful
css:
  - Scss
archetype:
  - Blog
  - Portfolio
date: 2020-02-19T12:10:46.000Z
description: A Gatsby starter for a portfolio with a blog, using Contentful as the CMS
stale: false
---

# A simple starter kit for creating a Portfolio website with a blog, all served by Contentful

## Features

- Gatsby
- Graphql
- Contenful
- Cypress
- CSS Modules and Styled Components

## 🚀 Quick start

1.  **Clone the repository**

    Use git to clone the repository.

    ```sh
    # clone the project using Git
    gatsby clone https://github.com/escapemanuele/gatsby-contentful-blog-portfolio  your-project-name
    ```

2.  **Install the packages**

    Navigate into your new site’s directory and install the required packages.

    ```sh
    cd your-project-name
    npm install
    ```

3.  **Configure Contenful**

    Get yourself a [Contenful Account](https://www.contentful.com/), create a new space and configure this project to use it with:

    ```sh
    npm run setup
    ```

4.  **Start developing.**

    Finally you are ready to see your project. Start the engine!

    ```sh
    gatsby develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `https://localhost:8000`!

    Feel free to change everything you want!
    
6.  **Test the application with Cypress**

    There are some cypress tests defined in the 'cypress' folder.
    You only need to use
     ```sh
    npm run test:open:e2e
    ```
