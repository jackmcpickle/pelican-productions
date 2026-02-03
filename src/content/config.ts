import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hero: z
      .object({
        title: z.string(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
      })
      .optional(),
    highlights: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          link: z.string(),
        })
      )
      .optional(),
    programs: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
        })
      )
      .optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .optional(),
    shows: z
      .array(
        z.object({
          name: z.string(),
          date: z.string(),
          link: z.string(),
        })
      )
      .optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    testimonials: z
      .array(
        z.object({
          name: z.string(),
          quote: z.string(),
        })
      )
      .optional(),
    contact: z
      .object({
        heading: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
    team: z
      .array(
        z.object({
          title: z.string(),
          members: z.array(
            z.object({
              name: z.string(),
              role: z.string(),
              image: z.string(),
              credentials: z.array(z.string()).optional(),
            })
          ),
        })
      )
      .optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { pages, blog };
