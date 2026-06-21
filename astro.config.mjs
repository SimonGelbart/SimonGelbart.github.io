import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://simongelbart.github.io',
  integrations: [
    starlight({
      title: 'Simon Gelbart',
      description: 'Backend engineering lab and global documentation hub.',
      customCss: ['./src/styles/starlight.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/SimonGelbart' },
      ],
      sidebar: [
        {
          label: 'Documentation hub',
          items: [
            { label: 'Overview', slug: 'docs' },
            { label: 'Site direction', slug: 'docs/site-direction' },
            { label: 'Publishing model', slug: 'docs/publishing-model' },
            { label: 'Design system', slug: 'docs/design-system' },
          ],
        },
      ],
    }),
  ],
});
