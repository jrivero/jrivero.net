// keystatic.config.ts
import { config, fields, singleton, collection } from "@keystatic/core";

const shouldUseGithub = process.env.NODE_ENV === "production";

export default config({
  storage: shouldUseGithub
    ? { kind: "github", repo: { owner: "jrivero", name: "jrivero.net" } }
    : { kind: "local" },
  ui: {
    brand: { name: "Jordi Blog" },
  },
  singletons: {
    landingPage: singleton({
      label: "Landing Page",
      path: "src/content/landing-page/",
      schema: {
        heroHeadline: fields.text({ label: "Hero headline" }),
        heroIntroText: fields.text({
          label: "Hero intro text",
          multiline: true,
        }),
        footerHeadline: fields.text({ label: "Footer headline" }),
        footerText: fields.text({ label: "Footer text", multiline: true }),
      },
    }),
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
    testimonials: collection({
      path: "src/content/testimonials/*/",
      label: "Testimonials",
      slugField: "author",
      schema: {
        author: fields.slug({ name: { label: "Author" } }),
        testimonial: fields.text({ label: "Testimonial", multiline: true }),
        featured: fields.checkbox({ label: "Featured testimonial" }),
        twitterHandle: fields.text({ label: "Twitter handle" }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/testimonials",
          validation: { isRequired: true },
        }),
      },
    }),
    categories: collection({
      label: "Categories",
      slugField: "name",
      path: "src/content/categories/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        intro: fields.text({ label: "Intro", multiline: true }),
      },
    }),
    topics: collection({
      label: "Topics",
      slugField: "title",
      path: "src/content/topics/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        category: fields.relationship({
          label: "Category",
          collection: "categories",
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
