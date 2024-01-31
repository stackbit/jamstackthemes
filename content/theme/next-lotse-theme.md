---
title: "Lotse"
github: https://github.com/marpeand/lotse
demo: https://lotse.vercel.app/
author: marpeand
date: 2023-12-03
ssg:
  - Next
cms:
  - No CMS
css:
  - Tailwind
archetype:
  - Blog
  - Portfolio
description:  Minimalistic dark mode blogging and portfolio template made using NextJS 
---

# Lotse

Minimalistic dark mode blogging and portfolio template made using NextJS

Demo: [https://lotse.vercel.app](https://lotse.vercel.app/)

### Features

-   Employs Contentlayer for mdx compilation
-   Boasts an ultra-minimalistic design for a clean user experience
-   Developed with NextJS & TailwindCSS
-   Achieves nearly perfect scores in Page Speed Insights
-   Implements Katex for mathematical equation displays
-   Optimized for SEO, enhancing visibility and accessibility

## Quick start guide


1. [Fork](https://github.com/marpeand/lotse/fork) this repo
2. Modify the `blog.config.js` with your own site data

```bash
const CONFIG = {
    title: "Your site title",
    baseURL: "URL of your site",
    darkBackground: "#1a1a1a", // background color
};
module.exports = CONFIG;
```

3. Replace the `app/favicon.ico` using your own icon
4. Write your _about_ in `content/about.mdx`
5. To deploy you can use [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
   import the repo and deploy.


## Post & Project structure

Check the `contentlayer.config.js` to see or modify all fields.

### Creating a Post

To create a post, simply generate a .mdx file in the content/posts directory.
Ensure the file name is user-friendly, such as `securing-your-web-applications-best-practices-in-web-security.mdx`.

```mdx
---
title: "The title of your post (required)"
date: date of your post (YYYY-MM-DD format, also required)
draft: 'false' or 'true' (required)
---
```

The title should be between " " to prevent conflicts, an example of this:

```mdx
---
title: "Automation with Bash Streamlining Repetitive Tasks"
date: 2023-11-11
draft: false
---
```

For **projects**, the structure involves only the title.
Create a .mdx file in the `content/projects` directory.

```mdx
---
title: "The title of your project (required)"
---
```

## Contributing

Contributions of any kind are appreciated. Feel free to fork the project and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE)
