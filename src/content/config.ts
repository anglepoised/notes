import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
	'articles': articleCollection
};