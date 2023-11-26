import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://jrivero.net',
  trailingSlash: 'never',
  integrations: [sitemap(), robots(), react(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: netlify()
});