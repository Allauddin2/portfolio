// // ============================================================
// // app/api/contact/route.ts — Contact Form API Route
// // ============================================================

// import { NextRequest, NextResponse } from 'next/server'
// import { isValidEmail } from '@/lib/utils'

// interface ContactPayload {
//   name: string
//   email: string
//   subject: string
//   message: string
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = (await request.json()) as ContactPayload
//     const { name, email, subject, message } = body

//     // ── Validation ───────────────────────────────────────────
//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         { success: false, error: 'All fields are required.' },
//         { status: 400 }
//       )
//     }

//     if (!isValidEmail(email)) {
//       return NextResponse.json(
//         { success: false, error: 'Please provide a valid email address.' },
//         { status: 400 }
//       )
//     }

//     if (message.trim().length < 20) {
//       return NextResponse.json(
//         { success: false, error: 'Message must be at least 20 characters.' },
//         { status: 400 }
//       )
//     }

//     // ── Send via Resend (recommended) ────────────────────────
//     // To use Resend: npm install resend, set RESEND_API_KEY in .env.local
//     //
//     // import { Resend } from 'resend'
//     // const resend = new Resend(process.env.RESEND_API_KEY)
//     // await resend.emails.send({
//     //   from: 'Portfolio <onboarding@resend.dev>',
//     //   to: ['mallauddin6542@gmail.com'],
//     //   subject: `Portfolio Contact: ${subject}`,
//     //   html: `
//     //     <h2>New Contact from Portfolio</h2>
//     //     <p><strong>Name:</strong> ${name}</p>
//     //     <p><strong>Email:</strong> ${email}</p>
//     //     <p><strong>Subject:</strong> ${subject}</p>
//     //     <p><strong>Message:</strong></p>
//     //     <p>${message.replace(/\n/g, '<br/>')}</p>
//     //   `,
//     // })

//     // ── Fallback: log to console in development ──────────────
//     if (process.env.NODE_ENV === 'development') {
//       console.log('📧 Contact form submission:', { name, email, subject, message })
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         message: 'Your message has been sent successfully! I will get back to you shortly.',
//       },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.error('Contact API error:', error)
//     return NextResponse.json(
//       { success: false, error: 'Something went wrong. Please try again later.' },
//       { status: 500 }
//     )
//   }
// }


import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // 1. Verify environment variables are present
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing Email Environment Variables')
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 })
    }

    // 2. Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 3. Setup the email content layout
    const mailOptions = {
      from: `"${name}" <${email}>`, 
      to: process.env.EMAIL_USER, // Sends the email right back to your inbox
      replyTo: email, // Clicking "Reply" in your inbox will reply directly to the user
      subject: `💼 Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fafafa;">
          <h2 style="color: #8b5cf6; margin-bottom: 20px;">New Contact Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 14px; width: 100px;"><strong>Sender:</strong></td>
              <td style="padding: 6px 0; color: #111; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 6px 0; color: #111; font-size: 14px;"><a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 14px;"><strong>Subject:</strong></td>
              <td style="padding: 6px 0; color: #111; font-size: 14px;">${subject}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message:</p>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #eaeaea; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    }

    // 4. Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact API Route Error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 })
  }
}