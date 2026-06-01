import { NextRequest, NextResponse } from 'next/server';

// For local development, we'll use a simple in-memory queue
// For production on Vercel, you'll need to configure an email service
// Options: SendGrid, Mailgun, Resend, AWS SES, or your own SMTP

const emailQueue: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Store email data (in production, send via actual email service)
    const emailData = {
      to: 'joe@fcabdigital.com',
      from: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      timestamp: new Date().toISOString(),
    };

    emailQueue.push(emailData);

    // Log to console (visible in Vercel logs)
    console.log('New contact form submission:', emailData);

    // TODO: In production, replace this with actual email sending
    // Example with Resend (recommended for Vercel):
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send(emailData);

    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send(emailData);

    return NextResponse.json(
      { success: true, message: 'Email queued for sending' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
