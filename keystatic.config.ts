// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

const shouldUseCloudStorage = process.env.NODE_ENV === "production";

export default config({
  storage: shouldUseCloudStorage
    ? { kind: "github", repo: "jrivero/jrivero.net" }
    : { kind: "local" },
  ui: {
    brand: { name: "Jordi Blog" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        excerpt: fields.text({ label: "Excerpt" }),
        coverImage: fields.image({
          label: "Cover image",
          directory: "public/images/posts",
          publicPath: "/images/posts",
        }),
        content: fields.document({
          label: "Content",
          layouts: [[1, 1]],
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    author: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/author/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
      },
    }),
  },
});