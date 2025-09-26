import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { newsletterWelcomeTemplate } from '@/lib/emailTemplates'

// Expect environment variables in .env.local
// aqaRESEND_API_KEY=... (required)
// NEWSLETTER_FROM="Sys.Capital <no-reply@yourdomain.com>" (must be a verified domain in Resend)
// NEWSLETTER_BCC=owner@example.com (optional, to notify you of new subs)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }
    const trimmed = email.trim().toLowerCase()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Server not configured (RESEND_API_KEY missing)' }, { status: 500 })
    }
    const from = process.env.NEWSLETTER_FROM || 'Sys.Capital <no-reply@example.com>'
    const bcc = process.env.NEWSLETTER_BCC

    // Send a branded confirmation email to the subscriber
    await resend.emails.send({
      from,
      to: trimmed,
      bcc: bcc ? [bcc] : undefined,
      subject: 'Welcome to Sys.Capital Newsletter',
      html: newsletterWelcomeTemplate(),
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Newsletter subscribe error', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
