import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jrivero.net",
  integrations: [
      react(),
      markdoc(),
      sitemap(),
  ],
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});