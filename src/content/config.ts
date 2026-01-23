// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		layout: z.string().optional(),
		pubDate: z.date().default(() => new Date()),
		author: z.string().default('Jordi Rivero'),
		description: z.string().optional(),
	}),
});
const slidesCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		order: z.number(),
		layout: z.string().optional(),
	}),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
	posts: postsCollection,
	slides: slidesCollection,
};
