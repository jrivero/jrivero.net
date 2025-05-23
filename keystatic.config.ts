// keystatic.config.ts
import { collection, config, fields } from "@keystatic/core";

export default config({
    storage: {
        kind: "github",
        repo: "jrivero/jrivero.net",
    },
    collections: {
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/posts/*",
            format: { contentField: "content" },
            schema: {
                title: fields.slug({ name: { label: "Title" } }),
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
