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
    redirects: {
        '/cert4.html': '/cert4',
        '/contact.html': '/contact',
        '/contact-us': '/contact',
        '/contact-us.html': '/contact',
        '/about.html': '/about',
        '/thenest.html': '/the-nest',
        '/singoz.html': '/singoz',
        '/music-theatre-camp.html': '/summer-camps',
        '/musicals.html': '/musicals',
        '/set-and-costume-hire.html': '/set-and-costume-hire',
        '/pop-academy.html': '/pop-academy-classes',
        '/a-pelican-life.html': '/blog',
        '/in-the-heights.html': '/musicals/in-the-heights',
        '/in-the-heights': '/musicals/in-the-heights',
        '/anniejr.html': '/musicals/anniejr',
        '/anniejr': '/musicals/anniejr',
        '/anniejr-908326.html': '/musicals/seussical',
        '/anniejr-476605.html': '/musicals/disneys-the-little-mermaid-jr',
        '/chitty-chitty-bang-bang.html': '/musicals/chitty-chitty-bang-bang',
        '/chitty-chitty-bang-bang': '/musicals/chitty-chitty-bang-bang',
        '/disneys-the-little-mermaid-jr.html':
            '/musicals/disneys-the-little-mermaid-jr-2014',
        '/disneys-the-little-mermaid-jr':
            '/musicals/disneys-the-little-mermaid-jr-2014',
        '/bring-it-on---the-musical.html': '/musicals/bring-it-on-the-musical',
        '/bring-it-on-the-musical': '/musicals/bring-it-on-the-musical',
        '/grease.html': '/musicals/grease',
        '/grease': '/musicals/grease',
        '/shows': '/musicals',
        '/shows.html': '/musicals',
    },
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
