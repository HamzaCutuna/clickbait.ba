import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Sva obavezna polja moraju biti popunjena' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `Nova poruka sa web stranice - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0C363C; border-bottom: 2px solid #0C363C; padding-bottom: 10px;">
            Nova poruka sa Clickbait web stranice
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0C363C; margin-top: 0;">Informacije o kontaktu:</h3>
            <p><strong>Ime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Usluga:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #0C363C; margin: 20px 0;">
            <h3 style="color: #0C363C; margin-top: 0;">Poruka:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>Ova poruka je automatski generirana sa Clickbait web stranice.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Poruka je uspješno poslana' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Došlo je do greške pri slanju poruke' },
      { status: 500 }
    );
  }
} 