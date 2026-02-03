import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();

    const nameValue = formData.get('name');
    const emailValue = formData.get('email');
    const subjectValue = formData.get('subject');
    const messageValue = formData.get('message');

    const name = typeof nameValue === 'string' ? nameValue : null;
    const email = typeof emailValue === 'string' ? emailValue : null;
    const subject = typeof subjectValue === 'string' ? subjectValue : null;
    const message = typeof messageValue === 'string' ? messageValue : null;

    if (!name || !email || !subject || !message) {
        return new Response(
            JSON.stringify({ error: 'All fields are required' }),
            {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            },
        );
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
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
