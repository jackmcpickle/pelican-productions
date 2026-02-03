import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const emailValue = formData.get('email');
    const email = typeof emailValue === 'string' ? emailValue : null;

    if (!email) {
        return new Response(JSON.stringify({ error: 'Email required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return new Response(JSON.stringify({ error: 'Invalid email' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
        // Mock success for development
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const resend = new Resend(apiKey);

        await resend.emails.send({
            from: 'Pelican Productions <noreply@pelicanproductions.net.au>',
            to: 'info@pelicanproductions.net.au',
            subject: 'New Newsletter Subscription',
            text: `New newsletter subscription from: ${email}`,
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Newsletter error:', error);
        return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
