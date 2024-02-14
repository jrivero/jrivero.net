import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://jrivero.net',
  trailingSlash: 'always',
  integrations: [
    react(),
    markdoc(),
    // keystatic(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // output: 'hybrid',
})
