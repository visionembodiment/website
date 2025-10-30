'use server';

import { Resend } from 'resend';
import { siteConfig } from '@/lib/content';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormResult = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResult> {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: 'All fields are required',
    };
  }

  if (!email.includes('@')) {
    return {
      success: false,
      error: 'Invalid email address',
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return {
      success: false,
      error: 'Email service is not configured. Please try again later.',
    };
  }

  try {
    const emailText = `
New contact form submission from ${name}

From: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    const { data: emailData, error } = await resend.emails.send({
      from: 'Vision Embodiment <onboarding@resend.dev>',
      to: siteConfig.contactEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: emailText,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Failed to send message. Please try emailing directly.',
      };
    }

    console.log('Email sent successfully:', emailData);
    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      error: 'Something went wrong. Please try emailing directly.',
    };
  }
}
