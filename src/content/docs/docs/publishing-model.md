---
title: Publishing model
description: How the site is built and deployed.
---

# Publishing model

The main site is built with Astro and Starlight and deployed to GitHub Pages with GitHub Actions.

Because this repository is the special `SimonGelbart.github.io` user site, Astro uses `site: 'https://simongelbart.github.io'` and does not set a `base` path.

## Responsibilities

The main site owns:

- global homepage;
- project and learning indexes;
- cross-project notes;
- shared visual direction;
- lightweight publishing guidance.

Project repositories own:

- project docs;
- ADRs;
- tutorials and reference material;
- project-specific roadmaps.
