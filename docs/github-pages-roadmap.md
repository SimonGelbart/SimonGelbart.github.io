# Global GitHub Pages Roadmap

This roadmap defines the global documentation publishing model for the Simon Gelbart GitHub Pages ecosystem.

## Goal

Use `https://simongelbart.github.io/` as the global entry point for project documentation without copying complete project documentation into this repository.

Each project repository remains the source of truth for its own code, docs, ADRs, and roadmap material.

## Target architecture

```text
SimonGelbart.github.io
  global portfolio
  project index
  learning-path index
  cross-project notes
  validated project metadata snapshots

pattrn
  source code
  docs source
  ADRs
  MkDocs project site

lorq
  source code
  docs source
  ADRs
  MkDocs project site

dotnet-learning-lab
  learning material
  samples and benchmarks
  MkDocs project site
```

## URL model

```text
https://simongelbart.github.io/
https://simongelbart.github.io/pattrn/
https://simongelbart.github.io/pattrn/adr/
https://simongelbart.github.io/lorq/
https://simongelbart.github.io/lorq/adr/
https://simongelbart.github.io/dotnet-learning-lab/
```

## Repository responsibilities

### Main site repository

`SimonGelbart.github.io` owns:

- the homepage;
- the global project index;
- global notes;
- editorial project data under `src/data/`;
- vendored project manifest snapshots under `src/data/project-manifests/`;
- this roadmap;
- anti-drift validation workflows.

It does not own full project documentation.

### Project repositories

Each project repository owns:

- `mkdocs.yml`;
- `docs/` source content;
- `docs/adr/` architectural decisions;
- `docs/project.json` metadata;
- its own GitHub Actions Pages workflow.

## Validation model

The main site should validate lightweight metadata, not synchronize by writing across repositories.

Each project exposes:

```text
docs/project.json
```

The main site stores reviewed manifest snapshots in:

```text
src/data/project-manifests/
```

A validation script compares stable facts from those snapshots with `src/data/projects.ts`. The public HTML keeps using editorial project data, so card order, summaries, evidence chips, and status framing remain owned by the main site.

## Phases

### Phase 1: Publish project docs

Add MkDocs configuration and GitHub Pages workflows to `pattrn` and `lorq`.

### Phase 2: Add project manifests

Add `docs/project.json` to each project repository.

### Phase 3: Make the main site a documentation hub

Update the homepage and project page to link to project documentation, ADRs, and repositories.

### Phase 4: Validate metadata

Use CI to validate stable facts in vendored manifest snapshots against the main-site editorial project data.

### Phase 5: Optional generated rendering

If the main site grows beyond static HTML, introduce a small build step that renders pages from `data/projects.json`. Until then, keep the site static and simple.

## Non-goals

- Do not duplicate full project documentation in this repository.
- Do not commit generated MkDocs HTML to `main`.
- Do not make the main site depend on private or local files.
- Do not grant project repositories write access to the main site.
- Do not silently rewrite main-site editorial copy from project manifests.
- Do not use transient task notes as public documentation.
