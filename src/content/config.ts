import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      image: z.string(),
      href: z.string(),
    }),
    category: z.object({
      title: z.string(),
      href: z.string(),
    }),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    image: z.string(),
  }),
});

export const collections = {
  blog,
  products,
};
