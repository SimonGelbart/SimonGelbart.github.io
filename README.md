# SimonGelbart.github.io

Personal engineering lab site and global documentation hub for Simon Gelbart.

This repository now uses Astro and Starlight as the shared publishing shell for the public site. It remains the global entry point for project documentation published from project repositories.

## Site role

This repository owns:

- the portfolio homepage;
- project and learning-path indexes;
- global cross-project notes;
- lightweight project metadata under `data/`;
- global publishing and design-system notes.

It should not duplicate full project documentation. Project docs, ADRs, tutorials, how-to guides, reference pages, and explanations live in each project repository and are published from there.

## Local preview

```bash
npm install
npm run dev
```

Then open the local Astro dev URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Structure

- `astro.config.mjs` — Astro and Starlight configuration
- `src/pages/` — custom homepage, project, learning, notes, and about pages
- `src/content/docs/` — Starlight documentation pages for the global publishing model
- `src/layouts/` — shared custom page layout
- `src/styles/` — custom site and Starlight CSS
- `data/projects.json` — synchronized project metadata
- `.github/workflows/deploy.yml` — Astro GitHub Pages deployment workflow
- `.github/workflows/sync-project-manifests.yml` — optional metadata synchronization workflow

## Documentation publishing model

Each project repository remains the source of truth for its own documentation. The main site links to project documentation and may synchronize lightweight `docs/project.json` manifests from project repositories.

Expected public URLs:

- `https://simongelbart.github.io/pattrn/`
- `https://simongelbart.github.io/lorq/`
- `https://simongelbart.github.io/dotnet-learning-lab/`

GitHub Pages for this repository should use **GitHub Actions** as the publishing source.
