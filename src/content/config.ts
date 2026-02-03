import { defineCollection, z } from 'astro:content';

const programs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        ageRange: z.string().optional(),
        schedule: z.string().optional(),
        instructor: z.string().optional(),
        image: z.string().optional(),
        order: z.number().default(0),
    }),
});

const shows = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        venue: z.string().optional(),
        description: z.string(),
        image: z.string().optional(),
        ticketLink: z.string().optional(),
        status: z.enum(['upcoming', 'past']).default('past'),
    }),
});

const testimonials = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        quote: z.string(),
        role: z.string().optional(),
        order: z.number().default(0),
    }),
});

const faq = defineCollection({
    type: 'content',
    schema: z.object({
        question: z.string(),
        answer: z.string(),
        order: z.number().default(0),
    }),
});

export const collections = { programs, shows, testimonials, faq };
