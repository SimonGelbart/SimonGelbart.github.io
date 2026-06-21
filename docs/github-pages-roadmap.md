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
  synchronized project metadata

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
- global metadata files under `data/`;
- this roadmap;
- optional synchronization workflows.

It does not own full project documentation.

### Project repositories

Each project repository owns:

- `mkdocs.yml`;
- `docs/` source content;
- `docs/adr/` architectural decisions;
- `docs/project.json` metadata;
- its own GitHub Actions Pages workflow.

## Synchronization model

The main site should synchronize lightweight metadata, not generated documentation.

Each project exposes:

```text
docs/project.json
```

The main site synchronization workflow reads the raw manifests from project repositories and updates:

```text
data/projects.json
```

The public HTML can then link to the published project documentation and source repositories.

## Phases

### Phase 1: Publish project docs

Add MkDocs configuration and GitHub Pages workflows to `pattrn` and `lorq`.

### Phase 2: Add project manifests

Add `docs/project.json` to each project repository.

### Phase 3: Make the main site a documentation hub

Update the homepage and project page to link to project documentation, ADRs, and repositories.

### Phase 4: Synchronize metadata

Use a scheduled or manual GitHub Action in this repository to refresh `data/projects.json` from project manifests.

### Phase 5: Optional generated rendering

If the main site grows beyond static HTML, introduce a small build step that renders pages from `data/projects.json`. Until then, keep the site static and simple.

## Non-goals

- Do not duplicate full project documentation in this repository.
- Do not commit generated MkDocs HTML to `main`.
- Do not make the main site depend on private or local files.
- Do not use transient task notes as public documentation.
