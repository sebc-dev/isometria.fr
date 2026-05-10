import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://isometria.fr',
  trailingSlash: 'never',
  compressHTML: true,
  adapter: cloudflare({
    imageService: 'cloudflare-binding',
  }),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
