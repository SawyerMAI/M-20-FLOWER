import { defineCollection, z } from 'astro:content';

const floralWorks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    number: z.string(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    florals: z.string().optional(),
    concept: z.string().optional(),
    status: z.enum(['seasonal', 'available', 'sold-out', 'preview']).default('available'),
    featured: z.boolean().default(false),
    date: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    heroImage: z.string().optional(),
    address: z.string().optional(),
    hours: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
  }),
});

export const collections = {
  'floral-works': floralWorks,
  'pages': pages,
};
