// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: import.meta.env.PROD
    ? { kind: "github", repo: "jrivero/jrivero.net" }
    : { kind: "local" },
  singletons: {
    homepage: singleton({
      label: "Home Page",
      path: "src/content/homepage/index",
      format: { contentField: "content" },
      schema: {
        headline: fields.text({ label: "Headline" }),
        subheadline: fields.text({ label: "Subheadline" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        profileImage: fields.image({
          label: "Profile Image",
          directory: "src/assets/images",
          publicPath: "@assets/images/",
        }),
        quote: fields.text({ label: "Quote", multiline: true }),
        synergyTitle: fields.text({ label: "Synergy Title" }),
        synergySubtitle: fields.text({ label: "Synergy Subtitle" }),
        synergyCards: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            icon: fields.select({
              label: "Icon",
              options: [
                { label: "Chart (Business)", value: "chart" },
                { label: "Code (Tech)", value: "code" },
                { label: "Circle (Off-topic)", value: "circle" },
              ],
              defaultValue: "chart",
            }),
          }),
          { label: "Synergy Cards", itemLabel: (props) => props.fields.title.value }
        ),
        content: fields.document({
          label: "About Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
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
  },
});
