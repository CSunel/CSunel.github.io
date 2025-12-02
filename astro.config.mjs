import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://csunel.github.io',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
