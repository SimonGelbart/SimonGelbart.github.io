# SimonGelbart.github.io

The small personal portfolio for Simon Gelbart.

It is intentionally a map, not a second documentation system: a short introduction, current focus, selected projects, and links to the repositories where the real work lives.

## Local preview

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/pages/` — homepage, project index, learning page, and about page
- `src/layouts/SiteLayout.astro` — shared shell and navigation
- `src/styles/site.css` — site styles
- `src/data/projects.ts` — project presentation data
- `.github/workflows/deploy.yml` — GitHub Pages deployment

GitHub Pages for this repository uses **GitHub Actions** as the publishing source. The site is deployed from `main` by `.github/workflows/deploy.yml`.
