// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: import.meta.env.PROD
    ? { kind: "github", repo: "jrivero/jrivero.net" }
    : { kind: "local" },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        pubDate: fields.date({ label: "Publication Date" }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "src/assets/images/posts",
          publicPath: "@assets/images/posts/",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
