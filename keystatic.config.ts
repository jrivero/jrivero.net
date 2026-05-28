// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: import.meta.env.PROD
    ? { kind: "github", repo: "jrivero/jrivero.net" }
    : { kind: "local" },
  singletons: {
    home: singleton({
      label: "Homepage",
      path: "src/content/home/",
      schema: {
        seoTitle: fields.text({ label: "SEO Title" }),
        seoDescription: fields.text({ label: "SEO Description", multiline: true }),
        blocks: fields.array(
          fields.conditional(
            fields.select({
              label: "Block type",
              options: [
                { label: "Hero", value: "hero" },
                { label: "Mission", value: "mission" },
                { label: "CTA banner", value: "cta" },
                { label: "Investment", value: "investment" },
                { label: "Feature grid", value: "featureGrid" },
                { label: "Final CTA", value: "finalCta" },
              ],
              defaultValue: "hero",
            }),
            {
              hero: fields.object({
                identityLabel: fields.text({ label: "Identity label" }),
                name: fields.text({ label: "Name (use | for line break)" }),
                roleLabel: fields.text({ label: "Role label" }),
                role: fields.text({ label: "Role" }),
                focusLabel: fields.text({ label: "Focus label" }),
                focus: fields.text({ label: "Focus" }),
                image: fields.image({
                  label: "Profile image",
                  directory: "src/assets/home",
                  publicPath: "/src/assets/home/",
                }),
                imageAlt: fields.text({ label: "Image alt" }),
              }),
              mission: fields.object({
                heading: fields.text({ label: "Heading" }),
                manifesto: fields.text({ label: "Manifesto (mono small)", multiline: true }),
                paragraphs: fields.array(
                  fields.text({ label: "Paragraph", multiline: true }),
                  { label: "Paragraphs", itemLabel: (p) => p.value.slice(0, 60) }
                ),
                quote: fields.text({ label: "Quote", multiline: true }),
              }),
              cta: fields.object({
                label: fields.text({ label: "Label" }),
                title: fields.text({ label: "Title" }),
                description: fields.text({ label: "Description", multiline: true }),
                buttonText: fields.text({ label: "Button text" }),
                buttonHref: fields.text({ label: "Button href" }),
              }),
              investment: fields.object({
                label: fields.text({ label: "Label" }),
                title: fields.text({ label: "Title" }),
                body: fields.text({ label: "Body (HTML allowed)", multiline: true }),
              }),
              featureGrid: fields.object({
                items: fields.array(
                  fields.object({
                    label: fields.text({ label: "Node label" }),
                    title: fields.text({ label: "Title" }),
                    description: fields.text({ label: "Description", multiline: true }),
                  }),
                  { label: "Items", itemLabel: (p) => p.fields.title.value }
                ),
              }),
              finalCta: fields.object({
                title: fields.text({ label: "Title" }),
                buttonText: fields.text({ label: "Button text" }),
                buttonHref: fields.text({ label: "Button href" }),
              }),
            }
          ),
          {
            label: "Blocks",
            itemLabel: (p) => p.discriminant,
          }
        ),
      },
    }),
  },
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
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
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
