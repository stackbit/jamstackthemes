---
title: GraphCMS Marketing Website
github: https://github.com/GraphCMS/reference-marketing-website
demo: https://marketing-websites.withheadlesscms.com/
author: GraphCMS
ssg:
  - Next
cms:
  - GraphCMS
css:
  - Tailwind
date: 2021-07-18T19:00:00.000Z
description: Next.js starter for creating a SaaS Marketing Website with GraphCMS
stale: false
archetype:
  - Business
---

# reference-marketing-website

> A [Next.js](https://nextjs.org/) starter for creating a SaaS Marketing Website with [GraphCMS](https://graphcms.com)

• [Demo](https://marketing-websites.withheadlesscms.com/)

## Quick start

1. Clone the repository and install project dependencies

```shell
npx degit GraphCMS/reference-marketing-website#main reference-marketing-website
cd reference-marketing-website
yarn
```

2. **Provide your GraphCMS project keys**

> In order to use this starter, you'll need to have created a new GraphCMS project using our `Marketing Website Template`.

Navigate into your new site’s directory and copy the `.env.local.example` file.

```shell
cp .env.local.example .env.local
```

Inside of your newly created `.env.local` file, provide values for the variable. These variables can be found in the [project settings UI](https://graphcms.com/docs/guides/concepts/apis#working-with-apis).

```env
NEXT_PUBLIC_GRAPHCMS_URL=
```

3. **Start building!**

```shell
yarn dev
```

## Next.js Preview Mode

If you want to enable [Next.js Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode) you'll need to add the following to your `.env`:

```env
GRAPHCMS_TOKEN=
GRAPHCMS_PREVIEW_TOKEN=
GRAPHCMS_PREVIEW_SECRET=
```

### `GRAPHCMS_TOKEN`

This should be a Permanent Auth Token that is set to fetch content from _PUBLISHED_ content stage by default.

### `GRAPHCMS_PREVIEW_TOKEN`

This should be a Permanent Auth Token that is set to fetch content from _DRAFT_ content stage by default.

## `GRAPHCMS_PREVIEW_SECRET`

You'll need to make sure when configuring the Preview URL inside GraphCMS that it passes the same secret value you assigned to `GRAPHCMS_PREVIEW_SECRET`.

You'll need to update both the Page & Blog Post model to add a Preview URL. The URLs should look like this:

- **Page**: `https://]your-domain.com]/api/preview?secret=[GRAPHCMS_PREVIEW_SECRET_VALUE_HERE]&slug={slug}`
- **Blog Post**: `https://]your-domain.com]/api/preview?secret=[GRAPHCMS_PREVIEW_SECRET_VALUE_HERE]&slug=blog/{slug}`

## Features

- [Next.js Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)
- [next/image](https://nextjs.org/docs/api-reference/next/image)
- [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing)
- [GraphQL Union Types (Polymorphic Relations)](https://graphcms.com/docs/schema/field-types)
- [next-seo](https://www.npmjs.com/package/next-seo)
