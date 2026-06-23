// Main-site editorial project data.
// Project repositories remain canonical for detailed docs, ADRs, APIs, package status, and roadmaps.
// Keep stable facts aligned with project manifests/docs when they exist.

export type Project = {
  name: string;
  slug: string;
  role: string;
  accent: 'library' | 'tooling' | 'learning' | 'applied';
  stack: string;
  startingPoint: string;
  description: string;
  statusLabel: string;
  statusSentence: string;
  evidence: Array<{ label: string; code?: boolean }>;
  links: Array<{ label: string; href: string; external?: boolean }>;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Pattrn',
    slug: 'pattrn',
    role: 'Library experiment',
    accent: 'library',
    stack: '.NET / C# library',
    startingPoint: 'A need for segmented pattern matching with explicit semantics, stable APIs, and predictable behavior in backend code.',
    description: 'Pattrn is a .NET library experiment around matching semantics, API shape, package boundaries, validation, and performance-conscious implementation.',
    statusLabel: 'Active experiment',
    statusSentence: 'Pattrn is usable as a library experiment, but its API surface, performance story, and applied examples are still being shaped.',
    evidence: [
      { label: 'API design' },
      { label: 'Validation' },
      { label: 'Package boundaries' },
      { label: 'Hot-path optimization' },
      { label: 'Span<T>', code: true },
    ],
    links: [
      { label: 'Docs', href: 'https://simongelbart.github.io/pattrn/' },
      { label: 'ADRs', href: 'https://simongelbart.github.io/pattrn/adr/' },
      { label: 'Repo ↗', href: 'https://github.com/SimonGelbart/pattrn', external: true },
    ],
    featured: true,
  },
  {
    name: 'LORQ',
    slug: 'lorq',
    role: 'Tooling experiment',
    accent: 'tooling',
    stack: 'Python tooling',
    startingPoint: 'A need to compare agent/tool/skill suites through reproducible runs, captured evidence, and reports that make usefulness easier to judge.',
    description: 'LORQ explores reproducible orchestration, evidence capture, failure classification, and reporting for AI skill evaluation workflows.',
    statusLabel: 'Active experiment',
    statusSentence: 'LORQ is an active tooling experiment for comparing agent/tool/skill suites, with the evidence model and reporting flow still evolving.',
    evidence: [
      { label: 'Skill comparison' },
      { label: 'Evidence capture' },
      { label: 'Failure classification' },
      { label: 'Reports' },
      { label: 'Reproducibility' },
    ],
    links: [
      { label: 'Docs', href: 'https://simongelbart.github.io/lorq/' },
      { label: 'ADRs', href: 'https://simongelbart.github.io/lorq/adr/' },
      { label: 'Repo ↗', href: 'https://github.com/SimonGelbart/lorq', external: true },
    ],
    featured: true,
  },
  {
    name: 'dotnet-learning-lab',
    slug: 'dotnet-learning-lab',
    role: 'Learning experiment',
    accent: 'learning',
    stack: '.NET / C# learning material',
    startingPoint: 'A way to test how short lessons, prediction questions, examples, and reference notes can make backend design easier to teach.',
    description: 'dotnet-learning-lab is where backend design topics become structured learning paths, especially around modern C#, type modeling, and practical design decisions.',
    statusLabel: 'Active experiment',
    statusSentence: 'dotnet-learning-lab is an active learning experiment, with the Modern C# Type Design path being shaped into short lessons, examples, and decision guides.',
    evidence: [
      { label: 'Short lessons' },
      { label: 'Prediction questions' },
      { label: 'Type modeling' },
      { label: 'Examples' },
      { label: 'Decision guides' },
    ],
    links: [
      { label: 'Learning path', href: 'https://simongelbart.github.io/dotnet-learning-lab/learning-paths/modern-csharp-type-design/' },
      { label: 'Repo ↗', href: 'https://github.com/SimonGelbart/dotnet-learning-lab', external: true },
    ],
    featured: true,
  },
];
