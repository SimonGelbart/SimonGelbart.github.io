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

## Site direction

The visible site is a public engineering lab for backend experiments and learning material. It should make architecture judgment, explicit boundaries, visible trade-offs, and evidence-backed project work the first credibility signals.

The public navigation model is intentionally small: Projects, Learning paths, About, and GitHub. Notes and Docs are not part of the visible public navigation, even when supporting content remains available by direct URL.

The visible site should feel like a minimal, flat, serious public engineering lab rather than a default Astro/Starlight site or startup landing page. The design uses warm technical neutrals, role-based pastel accents, flat panels, Lato typography, restrained monospace metadata, and visible evidence/status patterns.

The `/docs/` route currently contains provisional site-system notes from the Astro/Starlight migration. It is intentionally not part of the public navigation. Revisit it later and either remove it, rename it, or fold the useful content into the About page or source documentation.

Project repositories remain canonical for detailed docs, ADRs, APIs, package status, roadmaps, and deep technical truth. The main site owns editorial presentation: homepage order, public navigation, role labels, short summaries, selected evidence chips, and status framing.

A future shared manifest or sync direction can reduce manual drift between project repositories and the main site once project metadata stabilizes. Until then, the shared `src/data/` files are editorial presentation data rather than canonical project manifests.

Deployment workflow hardening is intentionally left for a separate maintenance PR because the current deployment already works. A generated `package-lock.json` is expected so installs and builds are easier to reproduce.
