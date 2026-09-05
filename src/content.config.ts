import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
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
        gallery: z
            .array(
                z.object({
                    src: z.string(),
                    alt: z.string(),
                }),
            )
            .optional(),
        faqs: z
            .array(
                z.object({
                    question: z.string(),
                    answer: z.string(),
                }),
            )
            .optional(),
        testimonials: z
            .array(
                z.object({
                    name: z.string(),
                    quote: z.string(),
                }),
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
                        }),
                    ),
                }),
            )
            .optional(),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.string(),
        category: z.string().optional(),
        coverImage: z.string().optional(),
    }),
});

const news = defineCollection({
    loader: glob({ pattern: '**/*.yaml', base: './src/content/news' }),
    schema: z.object({
        tag: z.string(),
        title: z.string(),
        body: z.string(),
        cta: z.string(),
        href: z.string(),
        dateLabel: z.string(),
        sortDate: z.coerce.date(),
        facts: z.array(z.string()).optional(),
        ctaVariant: z.enum(['primary', 'secondary']).optional(),
        featured: z.boolean().optional(),
        ticker: z.string().optional(),
    }),
});

const productions = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/productions' }),
    schema: z.object({
        name: z.string(),
        year: z.number(),
        note: z.string().optional(),
        variant: z.enum(['flame', 'cream', 'violet']).optional(),
        featured: z.boolean().optional(),
        coverImage: z.string().optional(),
        description: z.string().optional(),
        order: z.number(),
        hasPage: z.boolean().optional(),
    }),
});

export const collections = { pages, blog, news, productions };
