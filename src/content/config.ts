import { ZodString } from "astro/zod";
import { defineCollection, z } from "astro:content";

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

const imageCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    image: z.object({
      alt: z.string(),
      src: z.string(),
      target: z.string().url().optional(),
    }),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    originalUrl: z.string().url().optional(),
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const linkCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    linkUrl: z.string().url(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    originalUrl: z.string().url().optional(),
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const noteCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    originalUrl: z.string().url().optional(),
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const quoteCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    quote: z.object({
      url: z.string().url(),
      work: z.string().optional(),
      author: z.string().optional(),
    }),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    originalUrl: z.string().url().optional(),
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const videoCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Would prefer real URLs rather than strings but breaks many things
    video: z.object({
      url: z.string().url(),
    }),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    originalUrl: z.string().url().optional(),
    source: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
	'articles': articleCollection,
  'images': imageCollection,
  'links': linkCollection,
  'notes': noteCollection,
  'quotes': quoteCollection,
  'videos': videoCollection
};
