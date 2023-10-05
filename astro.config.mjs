import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: 'https://jrivero.net',
  integrations: [mdx(), sitemap(), robots()]
});