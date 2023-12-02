import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.production ? 'https://jrivero.net' : 'http://localhost:4321',
  trailingSlash: 'never',
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()]
});