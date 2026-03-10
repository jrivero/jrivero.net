import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		layout: z.string().optional(),
		pubDate: z.preprocess((val) => {
			if (val instanceof Date) return val;
			if (typeof val === 'string') return new Date(val);
			return new Date();
		}, z.date()).default(() => new Date()),
		author: z.string().default('Jordi Rivero'),
		description: z.string().optional(),
	}).passthrough(),
});

const calistenia = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/calistenia" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		author: z.string().default('Jordi Rivero'),
		layout: z.string().optional(),
	}).passthrough(), 
});

export const collections = {
	posts,
	calistenia,
};

