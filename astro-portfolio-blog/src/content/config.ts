import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
		}),
});

const projects = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			start: z.coerce.date(),
			galleryImages: z.array(z.object({ image: image() })),
			subtitle: z.string(),
			title: z.string(),
			project: z.string(),
			icons: z.object({
				fa: z.array(z.string()).optional(),
				di: z.array(z.string()).optional(),
				io: z.array(z.string()).optional(),
			}),
			link: z.string().url().optional(),
			end: z.coerce.date().or(z.literal("present")).optional(),
			image: image(),
			description: z.string(),
		}),
});

export const collections = { 'blog': blog, 'projects': projects };
