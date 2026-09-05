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
        '/in-the-heights.html': '/in-the-heights',
        '/anniejr.html': '/anniejr',
        '/chitty-chitty-bang-bang.html': '/chitty-chitty-bang-bang',
        '/disneys-the-little-mermaid-jr.html': '/disneys-the-little-mermaid-jr',
        '/bring-it-on---the-musical.html': '/bring-it-on-the-musical',
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
