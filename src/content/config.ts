import { defineCollection, z } from "astro:content";
import { image } from "astro:assets";

const authors = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    image: image(),
    socials: z
      .object({
        linkedin: z.string().url().optional(),
        github: z.string().url().optional(),
        x: z.string().url().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: image(),
    author: z.string(),
    categories: z.array(z.string()),
  }),
});

const arbeid = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    order: z.number(),
    featured: z.boolean().default(false),
    categories: z.array(z.string()),
  }),
});

export const collections = {
  authors,
  blog,
  arbeid,
};
