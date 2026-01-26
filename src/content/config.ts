// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection
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
const slidesCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		order: z.number(),
		layout: z.string().optional(),
	}),
});

const homepage = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			headline: z.string(),
			subheadline: z.string(),
			tags: z.array(z.string()),
			profileImage: image().optional(),
			quote: z.string(),
			synergyTitle: z.string(),
			synergySubtitle: z.string(),
			synergyCards: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
					icon: z.enum(["chart", "code", "circle"]),
				}),
			),
		}),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
	posts: postsCollection,
	slides: slidesCollection,
	homepage,
};
