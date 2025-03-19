---
title: TanStack Chat Template
github: https://github.com/netlify-templates/tanstack-template
demo: https://tanstack-starter.netlify.app/
author: Netlify
date: 2025-03-19
ssg:
  - TanStack
cms:
  - No CMS
css:
  - Tailwind 
archetype:
  - Other
description: A modern chat template built with TanStack Router, Claude AI, Sentry, and Convex integrations, featuring a clean and responsive interface.
featured: true
netlify_deploy: https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/tanstack-template
---

A modern chat template built with TanStack Router, Claude AI, Sentry, and Convex integrations, featuring a clean and responsive interface.

## Features

### AI Capabilities
- 🤖 Powered by Claude 3.5 Sonnet 
- 📝 Rich markdown formatting with syntax highlighting
- 🎯 Customizable system prompts for tailored AI behavior
- 🔄 Real-time message updates and streaming responses

### User Experience
- 🎨 Modern UI with Tailwind CSS and Lucide icons
- 🔍 Conversation management
- 🔐 API key management
- 📋 Markdown rendering with code highlighting

## Architecture

### Tech Stack
- **Frontend Framework**: React 19 with TanStack Start
- **Routing**: TanStack Router
- **State Management**: TanStack Store
- **Database**: Convex (optional)
- **Styling**: Tailwind CSS 4
- **AI Integration**: Anthropic's Claude API
- **Build Tool**: Vite 6 with Vinxi

### Prerequisites

- [Node.js](https://nodejs.org/) v20.9+
- (optional) [nvm](https://github.com/nvm-sh/nvm) for Node version management
- [Anthropic Claude API](https://www.anthropic.com/api)
- (optional) [Convex Account](https://dashboard.convex.dev/signup) for database storage