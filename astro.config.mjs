import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            BUILDER_API_PUBLIC_KEY: envField.string({
                context: 'client',
                access: 'public',
            }),
        },
    },
    integrations: [react(), markdoc(), keystatic()],
    output: 'server',
    trailingSlash: 'ignore',
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    },
    adapter: cloudflare({
        imageService: 'compile',
    }),
});
