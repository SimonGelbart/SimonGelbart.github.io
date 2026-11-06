export type Project = {
  name: string;
  slug: string;
  eyebrow: string;
  accent: 'library' | 'tooling' | 'learning' | 'applied';
  stack: string;
  status: string;
  summary: string;
  description: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
  current?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Tome Raider',
    slug: 'book-manager',
    eyebrow: 'Application in progress',
    accent: 'applied',
    stack: '.NET / Avalonia / EPUB',
    status: 'MVP planning',
    summary: 'A personal EPUB catalogue for reading status, notes, ratings, and source-independent book identity.',
    description: 'The product scope, domain model, testing approach, and implementation plan are being worked through in public.',
    links: [
      { label: 'Repository ↗', href: 'https://github.com/SimonGelbart/book-manager', external: true },
      { label: 'Product brief ↗', href: 'https://github.com/SimonGelbart/book-manager/blob/main/docs/planning/product-brief.md', external: true },
    ],
    current: true,
    featured: true,
  },
  {
    name: 'Migration dynamic workflow',
    slug: 'migration-dynamic-workflow',
    eyebrow: 'Developer tooling',
    accent: 'tooling',
    stack: 'TypeScript / Copilot',
    status: 'Prototype',
    summary: 'A Copilot project extension for incrementally migrating legacy Web Forms resources to an API-backed V2 implementation.',
    description: 'The workflow makes inspection, initialization, discovery, and decision checkpoints explicit before application code is changed.',
    links: [
      { label: 'Repository ↗', href: 'https://github.com/SimonGelbart/migration-dynamic-workflow', external: true },
      { label: 'Workflow notes ↗', href: 'https://github.com/SimonGelbart/migration-dynamic-workflow/blob/main/docs/workflow.md', external: true },
    ],
    current: true,
    featured: true,
  },
  {
    name: 'Pattrn',
    slug: 'pattrn',
    eyebrow: 'Library experiment',
    accent: 'library',
    stack: 'C# / .NET 10',
    status: 'Pre-beta',
    summary: 'Fast immutable segmented-pattern matching for .NET, with explicit semantics and dependency-light package boundaries.',
    description: 'The core indexes segmented patterns once, then resolves matching inputs predictably. Companion packages add strings, DI, and routing helpers.',
    links: [
      { label: 'Repository ↗', href: 'https://github.com/SimonGelbart/pattrn', external: true },
      { label: 'Documentation ↗', href: 'https://github.com/SimonGelbart/pattrn/tree/main/docs', external: true },
    ],
    featured: true,
  },
  {
    name: 'LORQ',
    slug: 'lorq',
    eyebrow: 'Technical lab',
    accent: 'tooling',
    stack: 'Python / .NET',
    status: 'Active prototype',
    summary: 'A ledger for reproducible agent, tool, and skill evaluation runs, with evidence capture and decision-grade reports.',
    description: 'The current work focuses on deterministic orchestration, package integrity, adapter contracts, and reporting before live runtime integrations.',
    links: [
      { label: 'Repository ↗', href: 'https://github.com/SimonGelbart/lorq', external: true },
      { label: 'Docs ↗', href: 'https://github.com/SimonGelbart/lorq/tree/main/docs', external: true },
    ],
    featured: true,
  },
  {
    name: 'dotnet-learning-lab',
    slug: 'dotnet-learning-lab',
    eyebrow: 'Learning material',
    accent: 'learning',
    stack: '.NET / C# / teaching',
    status: 'Course blueprint',
    summary: 'Short learning paths, examples, and decision guides for modern .NET backend development.',
    description: 'The first public path explores Modern C# Type Design: modeling valid states, choosing stable identities, and making trade-offs visible.',
    links: [
      { label: 'Repository ↗', href: 'https://github.com/SimonGelbart/dotnet-learning-lab', external: true },
      { label: 'Course outline ↗', href: 'https://github.com/SimonGelbart/dotnet-learning-lab/blob/main/learning-paths/modern-csharp-type-design/outline.md', external: true },
    ],
    featured: true,
  },
  {
    name: 'LDAP Testcontainer',
    slug: 'ldap-testcontainer',
    eyebrow: 'Integration testing',
    accent: 'applied',
    stack: 'Python / OpenLDAP / Testcontainers',
    status: 'Working utility',
    summary: 'A local OpenLDAP image builder and reusable testkit for integration tests against converted directory schemas.',
    description: 'Private directory data stays outside source control; the public repository contains the workflow and tooling around the test image.',
    links: [
      { label: 'Repository ↗', href: 'https://github.com/SimonGelbart/ldap-testcontainer', external: true },
    ],
  },
];

export const currentProjects = projects.filter((project) => project.current);
export const selectedProjects = projects.filter((project) => project.featured);
