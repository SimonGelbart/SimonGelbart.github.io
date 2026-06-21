# SimonGelbart.github.io

Personal engineering lab site and global documentation hub for Simon Gelbart.

This repository hosts a minimal static GitHub Pages site focused on backend tooling, architecture-heavy libraries, deterministic systems, and practical software design. It also acts as the public entry point for project documentation published from project repositories.

## Site role

This repository is the global hub. It should contain:

- the portfolio homepage;
- project and learning-path indexes;
- global cross-project notes;
- lightweight project metadata under `data/`;
- global GitHub Pages roadmap material.

It should not duplicate full project documentation. Project docs, ADRs, tutorials, how-to guides, reference pages, and explanations live in each project repository and are published from there.

## Local preview

The site is intentionally static and has no required build step.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

- `index.html` — homepage
- `projects/index.html` — project overview and documentation entry points
- `learning-paths/index.html` — learning material overview
- `notes/index.html` — global design notes index
- `about.html` — short profile
- `assets/styles.css` — shared styling
- `data/projects.json` — synchronized project metadata
- `docs/github-pages-roadmap.md` — global GitHub Pages documentation roadmap
- `.github/workflows/sync-project-manifests.yml` — optional metadata synchronization workflow

## Documentation publishing model

Each project repository keeps documentation source on `main`:

```text
<project>/
  mkdocs.yml
  docs/
    README.md or index.md
    adr/
    tutorials/
    how-to/
    reference/
    explanation/
```

GitHub Actions builds each project documentation site and publishes the generated artifact through GitHub Pages.

Expected public URLs:

- `https://simongelbart.github.io/pattrn/`
- `https://simongelbart.github.io/lorq/`
- `https://simongelbart.github.io/dotnet-learning-lab/`

The main site links to those sites and may synchronize lightweight `docs/project.json` manifests from each project repository.
