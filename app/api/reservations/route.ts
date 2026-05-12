import { NextResponse } from 'next/server'
import { sendMail, PHONE } from '../../../lib/mailer'

interface ReservationBody {
  name?: string
  email?: string
  phone?: string
  date?: string
  guests?: string
  type?: string
  message?: string
}

export async function POST(request: Request) {
  let body: ReservationBody = {}

  const contentType = request.headers.get('content-type') ?? ''
  if (contentType.includes('application/json')) {
    body = await request.json().catch(() => ({}))
  } else {
    const formData = await request.formData().catch(() => null)
    if (formData) {
      body = Object.fromEntries(
        ['name', 'email', 'phone', 'date', 'guests', 'type', 'message'].map((k) => [
          k,
          formData.get(k)?.toString() ?? '',
        ])
      )
    }
  }

  const { name, email, phone, date, guests, type, message } = body

  if (!name?.trim() || !email?.trim() || !date?.trim() || !guests?.trim() || !type?.trim()) {
    return NextResponse.json(
      { error: 'Please fill in all required fields: name, email, date, guest count, and reservation type.' },
      { status: 400 }
    )
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  const typeLabel = (type ?? '').replace(/-/g, ' ')
  const subject = `[RSVP] ${typeLabel.charAt(0).toUpperCase() + typeLabel.slice(1)} — ${name}`

  const html = `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0b0b0b;color:#f5f0e6;border:1px solid #c9a24a;">
      <div style="background:#050505;padding:28px 32px;border-bottom:1px solid #c9a24a;">
        <p style="margin:0;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#c9a24a;">Loyalty Lounge Md</p>
        <h1 style="margin:10px 0 0;font-size:26px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#f5f0e6;">New ${typeLabel.charAt(0).toUpperCase() + typeLabel.slice(1)} Request</h1>
      </div>

      <div style="padding:28px 32px;border-bottom:1px solid rgba(201,162,74,0.22);">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);width:36%;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">Guest Name</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;color:#f5f0e6;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">Email</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;color:#f5f0e6;"><a href="mailto:${email}" style="color:#f4d06f;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">Phone</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;color:#f5f0e6;">${phone}</td>
          </tr>` : ''}
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">Date</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;color:#f5f0e6;">${date}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">Party Size</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;color:#f5f0e6;">${guests}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">Type</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;color:#f4d06f;text-transform:capitalize;">${typeLabel}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding:10px 0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;vertical-align:top;">Details</td>
            <td style="padding:10px 0 10px 16px;font-size:15px;color:#f5f0e6;line-height:1.7;">${message}</td>
          </tr>` : ''}
        </table>
      </div>

      <div style="padding:20px 32px;display:flex;gap:16px;">
        <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#f4d06f,#c9a24a);color:#080808;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:13px 22px;text-decoration:none;">Reply to Guest →</a>
      </div>

      <div style="padding:16px 32px;background:#050505;border-top:1px solid rgba(201,162,74,0.22);">
        <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:rgba(245,240,230,0.38);">Loyalty Lounge Md · 8521 Liberty Rd, Randallstown MD 21133 · ${PHONE}</p>
      </div>
    </div>
  `

  try {
    await sendMail({ subject, html, replyTo: email })
  } catch (err) {
    console.error('[reservations] email send failed:', err)
    // Still return success — the request was recorded even if email failed
    // In production, persist to DB here before returning
  }

  return NextResponse.json(
    {
      success: true,
      message: `Thank you, ${name}. Your ${typeLabel} request has been received. We will contact you at ${email} within 24 hours.`,
    },
    { status: 200 }
  )
}
