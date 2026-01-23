// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

const shouldUseCloudStorage = true;

export default config({
    storage: shouldUseCloudStorage
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
