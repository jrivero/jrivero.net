import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://jrivero.net",
    integrations: [
        tailwind({ applyBaseStyles: false }),
        react(),
        markdoc(),
        sitemap(),
        ...(import.meta.env.VERCEL ? [] : [keystatic()]),
    ],
    output: import.meta.env.VERCEL ? "static" : "server",
    adapter: vercel(),
});