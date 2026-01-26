import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		layout: z.string().optional(),
		pubDate: z.date().default(() => new Date()),
		author: z.string().default('Jordi Rivero'),
		description: z.string().optional(),
		coverImage: image().optional(),
	}),
});

export const collections = {
	posts: postsCollection
};
