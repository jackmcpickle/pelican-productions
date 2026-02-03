import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { fileURLToPath } from 'node:url';

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
