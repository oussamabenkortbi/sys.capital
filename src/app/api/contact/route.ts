import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Optionally, specify runtime. Uncomment if you prefer edge runtime
// export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const firstName = String(body.firstName || '').trim()
    const lastName = String(body.lastName || '').trim()
    const email = String(body.email || '').trim().toLowerCase()
    const company = String(body.company || '').trim()
    const interest = String(body.interest || '').trim()
    const message = String(body.message || '').trim()

    if (!firstName || !lastName || !email || !interest || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO || 'contact@sys.capital'
    const from = process.env.CONTACT_FROM || 'onboarding@resend.dev'

    const subject = `New Contact: ${firstName} ${lastName} — ${interest.toUpperCase()}`

    const html = `
      <!doctype html>
      <html><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, 'Helvetica Neue', sans-serif;">
        <h2 style="margin:0 0 12px 0;">New Contact Message</h2>
        <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${email}</p>
        ${company ? `<p style="margin:0 0 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
        <p style="margin:0 0 8px 0;"><strong>Interest:</strong> ${interest}</p>
        <hr style="margin:16px 0;" />
        <p style="white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      </body></html>
    `

    const { error } = await resend.emails.send({
      to,
      from,
      subject,
      html,
      replyTo: email,
    })

    if (error) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 })
  }
}
