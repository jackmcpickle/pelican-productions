import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name')?.toString() ?? '';
  const email = formData.get('email')?.toString() ?? '';
  const phone = formData.get('phone')?.toString() ?? '';
  const message = formData.get('message')?.toString() ?? '';

  if (!name || !email || !message) {
    return new Response('Missing required fields', { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return new Response('Resend API key is not configured', { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  const toEmail = process.env.RESEND_TO_EMAIL ?? 'contact@pelicanproductions.com.au';
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `New enquiry from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  });

  return new Response('Message sent', { status: 200 });
};
