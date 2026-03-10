import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		layout: z.string().optional(),
		pubDate: z.preprocess((val) => (val instanceof Date ? val : new Date(val as string)), z.date()).default(() => new Date()),
		author: z.string().default('Jordi Rivero'),
		description: z.string().optional(),
		coverImage: image().optional(),
	}),
});

const calisteniaCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		author: z.string().default('Jordi Rivero'),
		layout: z.string().optional(),
	}).passthrough(), // Allow extra fields
});

export const collections = {
	posts: postsCollection,
	calistenia: calisteniaCollection
};
