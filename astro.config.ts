import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
    site: "https://jrivero.net",
    integrations: [
        tailwind({ applyBaseStyles: false }),
        react(),
        markdoc(),
        sitemap(),
        ...(import.meta.env.PROD ? [] : [keystatic()]),
    ],
    output: import.meta.env.PROD ? "static" : "hybrid",
});
