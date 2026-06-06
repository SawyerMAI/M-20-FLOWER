import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sawyermai.github.io',
  base: '/M-20-FLOWER',
  integrations: [tailwind(), mdx()],
  output: 'static',
});
