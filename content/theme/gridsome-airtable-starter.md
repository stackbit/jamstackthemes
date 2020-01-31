---
title: "Gridsome Airtable Starter"
github: https://github.com/12vanblart/gridsome-airtable-starter
demo: https://gridsomeairtable.netlify.com/
author: Tyler VanBlargan
date: 2019-12-18
github_branch: master
ssg:
  - Gridsome
cms:
  - Airtable
description: "A Gridsome starter leveraging Airtable with a minimalist design. "
---

[![Netlify Status](https://api.netlify.com/api/v1/badges/66526f3f-455e-4ee4-b05e-3cf37c607921/deploy-status)](https://app.netlify.com/sites/gridsomeairtable/deploys)

# Airtable starter for Gridsome

This starter is meant to act as a starting point/example for connecting [Gridsome](https://gridsome.org/) with [Airtable](https://airtable.com/).

*Note: This Starter utilizes [Moment.js](https://momentjs.com/) for date/times and can be removed from the Event files if not needed (and removed with `yarn remove moment`)*

## Install Gridsome CLI tool (if you dont' have it already)

`npm install --global @gridsome/cli`

## Create a Gridsome project

1. `gridsome create my-gridsome-site https://github.com/12vanblart/gridsome-airtable-starter.git` to install this starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉💻

## Configure your Airtable connection

Inside your `gridsome.config.js` file, you'll see the following:

```javascript
// gridsome.config.js //

module.exports = {
  siteName: 'Site Name',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tableName: 'Events', //required
        typeName: 'Event', //required - needs to match template name
        route: '/events/:name' //optional
      }
    }
  ]
}

```

- `apiKey` is the API secret provided by Airtable
- `baseId` is the identifier for the base you would like to connect to
- `tableName` is the table you would like to pull data from
- `typeName` is what you would like to call your data in GraphQL
- `route` is the optional path you would like to use for accessing your records. This can use GraphQL keys to identify records.

**Note:** In order for your templates to generate properly at the specified route a `typeName.vue` file must exist in `\templates`. In this starter, this is `\templates\Event.vue` for the `Event` type.

### dotenv file

[Details on Gridsome Environment Variables.](https://gridsome.org/docs/environment-variables)

You'll need to create the file `.env` in your root project directory (The same level as `gridsome.config.js`) with the following (replace with your values):

```dotenv
AIRTABLE_KEY=<apiKey>
AIRTABLE_BASE=<baseId>
```

You can learn more about getting these values from the [plugin page](https://gridsome.org/plugins/@gridsome/source-airtable).

**NOTE:** When you deploy to Netlify, you'll need to setup these values under "Build & Deploy" > "Environment" > "Environment Variables"

## Query Pages

A list of files where the starter uses queries to make updating easier (all from the `src` folder):

- `pages/Events.vue` - Grabs all Events sorted by `startDate`
- `components/EventCard.vue` - Brings Props in from `pages/Events.vue`
- `templates/Event.vue` - Uses `id` to pull in data from Airtable.

## My Airtable
This is what my Airtable Base looks like:

!["Airtable with columns for Name, Header Image, Start Date, End Date, Excerpt, Notes, and Attachments."](./airtableSetup.png)


# Deploy with Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/12vanblart/gridsome-airtable-starter)