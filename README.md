Guide Go Blog

A comprehensive travel blog built with [Docusaurus](https://docusaurus.io/) featuring in-depth articles about Ethiopia and other global destinations. This blog focuses on cultural experiences, adventure travel, and authentic travel insights.

## 🌍 About This Blog

The AI Travel Blog is dedicated to providing travelers with authentic, culturally-rich content about Ethiopia and beyond. Our articles cover:

- **Ethiopian Culture & Tribes**: Deep dives into Ethiopia's diverse ethnic groups and traditions
- **Adventure Travel**: Hiking, wildlife viewing, and outdoor experiences
- **Cultural Experiences**: Authentic encounters with local communities
- **Travel Guides**: Practical information for planning your trips

### Current Articles

- **Semien Mountains**: Ethiopia's Roof of Africa and UNESCO World Heritage Site
- **Mursi Tribe**: Guardians of Ethiopia's Cultural Heritage
- **Southern Ethiopia Road Trip**: Tribes, Tribes, and Natural Wonders
- **Northern Ethiopia Travel Guide**: Ancient Castles, Rock Churches, and Timeless Wonders

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- Yarn or npm

### Installation

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm start
# or
yarn start
```

This command starts a local development server at `http://localhost:3001/blog/` and opens it in your browser. Changes are reflected live without restarting the server.

### Build for Production

```bash
npm run build
# or
yarn build
```

This generates static content in the `build/` directory, ready for deployment to any static hosting service.

### Deployment Options

#### Option 1: Deploy to Subdirectory (Recommended)

This blog is configured to deploy as a subdirectory (e.g., `yourwebsite.com/blog/`). Simply upload the contents of the `build/` directory to your web server's `/blog/` path.

#### Option 2: GitHub Pages

Using SSH:
```bash
USE_SSH=true npm run deploy
# or
USE_SSH=true yarn deploy
```

Without SSH:
```bash
GIT_USER=<Your GitHub username> npm run deploy
# or
GIT_USER=<Your GitHub username> yarn deploy
```

## 📝 Writing Articles

### Blog Post Structure

Articles are stored in `blog/YYYY/` directory with filenames following the pattern: `YYYY-MM-DD-title-slug.mdx`

Example: `2026-01-17-mursi-tribe-ethiopia.mdx`

### Frontmatter Format

```yaml
---
slug: your-article-slug
title: "Your Article Title"
description: Brief description for SEO
authors: michael
tags: [ethiopia, culture, travel]
created_at: 2026-01-17
date: 2026-01-17
---
```

### Adding Images

Store images in `static/img/article-slug/` directory and reference them as:
```markdown
![Image Alt Text](/img/article-slug/image-name.png)
```

## 🏗️ Project Structure

```
ai-travel-blog/
├── blog/                 # Blog posts and configuration
│   ├── authors.yml       # Author information
│   ├── tags.yml          # Tag definitions
│   └── YYYY/             # Blog posts by year
├── docs/                 # Documentation pages
├── src/                  # Docusaurus source files
├── static/               # Static assets (images, etc.)
└── docusaurus.config.js  # Site configuration
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Write Articles**: Share your travel experiences and insights
2. **Improve Content**: Suggest edits or additional information
3. **Report Issues**: Found a bug or have a suggestion?
4. **Photography**: Contribute high-quality travel photos

### Content Guidelines

- Focus on authentic, respectful cultural experiences
- Include practical travel information
- Use inclusive and responsible tourism language
- Cite sources and give credit where due

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Author

**Michael Getu** - Travel Blogger & Cultural Explorer
- Website: [Travel Plan AI](https://travelplan-ai.com)
- Passionate about sharing Ethiopia's rich cultural heritage with the world

---

*Built with ❤️ using Docusaurus*
