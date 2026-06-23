export type LearningPath = {
  title: string;
  slug: string;
  subtitle: string;
  status: string;
  metadata: string;
  statusText: string;
  href: string;
};

export const learningPaths: LearningPath[] = [
  {
    title: 'Modern C# Type Design',
    slug: 'modern-csharp-type-design',
    subtitle: 'Learn how to model backend code so valid states are easier to express and invalid states are harder to write.',
    status: 'Active learning path',
    metadata: 'Lessons, examples, and decision guides in progress',
    statusText: 'The core lesson flow is being shaped, with examples and decision guides evolving over time.',
    href: 'https://simongelbart.github.io/dotnet-learning-lab/learning-paths/modern-csharp-type-design/',
  },
];
