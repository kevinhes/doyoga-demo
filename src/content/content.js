// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const courseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cnTitle: z.string(),
    teacher: z.array(z.string()),
    courseDuration: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    order: z.number(),
    'monthly-Featured': z.string(),
  }),
});

export const collections = {
  'course': courseCollection,
};