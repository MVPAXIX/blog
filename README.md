# Zemenay Blog — Content Repo

This repo is the **single source of truth for every article on
[zemenaytech.com/blog](https://zemenaytech.com/blog)**.

Posts are written here as Docusaurus-style markdown. The Zemenay site
(`MichaelGetu-git/Zemenay-Revamped-2026`) imports everything in `blog/` at
build time — text, frontmatter, and poster images — and renders it with the
site's own design. You never need to touch the site repo to publish.

```
write .mdx + poster here  →  git push  →  site rebuilds  →  live on /blog
```

---

## ✍️ How to publish a post

### 1. Create the post file

Add a file to `blog/` named with the publish date:

```
blog/2026-07-15-my-new-post.mdx
```

The date prefix becomes the post's "Last Update" date on the site.

### 2. Add the poster

Drop a **16:9 landscape image** (PNG/JPG, ~1366×768 or larger) into
`blog/img/`. This is the hero image on the post page and on every card.

### 3. Write the frontmatter

```yaml
---
slug: my-new-post
title: 'My New Post Title'
authors: [michael]
tags: [outsourcing, hiring]
image: ./img/my-poster.png
---
```

| Field     | Required | What it does on the site                                             |
| --------- | -------- | -------------------------------------------------------------------- |
| `slug`    | no       | URL: `/blog/<slug>`. Defaults to the filename (minus the date).       |
| `title`   | **yes**  | Headline everywhere (hero, cards, browser tab).                       |
| `authors` | no       | Key from `authors.yml` → display name in the post hero.               |
| `tags`    | no       | **First tag becomes the category badge** on cards (e.g. `outsourcing` → "Outsourcing"). |
| `image`   | no       | Path to the poster, relative to `blog/` (e.g. `./img/my-poster.png`). |
| `description` | no   | Card/SEO excerpt. If omitted, the intro before `truncate` is used.    |
| `date`    | no       | Overrides the filename date (`YYYY-MM-DD`).                           |

### 4. Write the article

```mdx
The opening paragraph — make it count, it doubles as the card excerpt
and search description.

{/* truncate */}

## First Section

Everything above `truncate` is the teaser; everything below is the rest
of the article.

### A Sub-Section
```

How the markdown maps to the site:

- `##` (h2) → **Table of Contents entries** in the post sidebar
- `###` (h3) → sub-entries that expand under their section as you scroll
- Tables, bullet/numbered lists, `> blockquotes`, **bold**, links — all
  styled automatically
- Read time ("4 Minute Read") is computed from word count — nothing to set
- Don't use `#` (h1) in the body — the title already renders as the h1

### 5. Push

```bash
git add blog/
git commit -m "post: my new post"
git push
```

That's it. The GitHub Action in `.github/workflows/deploy-site.yml` pings
Vercel, the site rebuilds (~2 min), and the post is live with your poster.

---

## 👤 Adding yourself as an author

Add an entry to `blog/authors.yml`:

```yaml
your-key:
  name: Your Name
  title: Your Role
```

Then use `authors: [your-key]` in your posts.

---

## 🔍 Previewing before you push

Two options:

- **Docusaurus preview (this repo):** `npm install` once, then `npm start`
  — quick check that the markdown is valid and reads well.
- **Exact site preview (site repo):** in `Zemenay-Revamped-2026`, run
  `npm run import:blog` then `npm run dev` and open
  `localhost:3000/blog` — renders your draft with the real site design,
  poster included.

---

## ⚙️ How the automation works (one-time setup, already-configured list)

1. **Site repo** (`Zemenay-Revamped-2026`): `prebuild` runs
   `scripts/import-docusaurus-blog.mjs --if-configured`, which clones this
   repo and imports `blog/` whenever the `BLOG_CONTENT_REPO` env var is set
   on Vercel (`https://github.com/MichaelGetu-git/blog.git`).
2. **This repo**: on every push that touches `blog/`, the
   `deploy-site.yml` workflow POSTs to a Vercel Deploy Hook, triggering a
   site rebuild. The hook URL lives in this repo's Actions secret
   `VERCEL_DEPLOY_HOOK`.
3. If this repo is ever unreachable during a build, the site falls back to
   the last imported posts — deploys never break because of content.

Import details worth knowing:

- Poster referenced via `image:` is copied into the site and renamed to
  `<slug>.png` automatically — the filename here doesn't have to match.
- The importer sorts posts newest-first; the three newest appear in the
  "Feature and Trending" section on `/blog`, and all posts appear under
  "Popular Resources".
