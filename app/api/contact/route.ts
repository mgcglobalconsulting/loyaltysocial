import { NextResponse } from 'next/server'
import { sendMail, PHONE } from '../../../lib/mailer'

export async function POST(request: Request) {
  let name: string | null = null
  let email: string | null = null
  let message: string | null = null

  const contentType = request.headers.get('content-type') ?? ''
  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => null)
    name = body?.name ?? null
    email = body?.email ?? null
    message = body?.message ?? null
  } else {
    const formData = await request.formData().catch(() => null)
    if (formData) {
      name = formData.get('name')?.toString() ?? null
      email = formData.get('email')?.toString() ?? null
      message = formData.get('message')?.toString() ?? null
    }
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please provide name, email, and message.' },
      { status: 400 }
    )
  }

  const html = `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0b0b0b;color:#f5f0e6;border:1px solid #c9a24a;">
      <div style="background:#050505;padding:28px 32px;border-bottom:1px solid #c9a24a;">
        <p style="margin:0;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#c9a24a;">Loyalty Social Ultra Lounge</p>
        <h1 style="margin:10px 0 0;font-size:26px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#f5f0e6;">New Contact Message</h1>
      </div>

      <div style="padding:28px 32px;border-bottom:1px solid rgba(201,162,74,0.22);">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);width:28%;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">From</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;color:#f5f0e6;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(201,162,74,0.14);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;">Email</td>
            <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(201,162,74,0.14);font-size:15px;"><a href="mailto:${email}" style="color:#f4d06f;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c9a24a;vertical-align:top;">Message</td>
            <td style="padding:10px 0 10px 16px;font-size:15px;color:#f5f0e6;line-height:1.7;">${message}</td>
          </tr>
        </table>
      </div>

      <div style="padding:20px 32px;">
        <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#f4d06f,#c9a24a);color:#080808;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:13px 22px;text-decoration:none;">Reply →</a>
      </div>

      <div style="padding:16px 32px;background:#050505;border-top:1px solid rgba(201,162,74,0.22);">
        <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:rgba(245,240,230,0.38);">Loyalty Social Ultra Lounge · 8521 Liberty Rd, Randallstown MD 21133 · ${PHONE}</p>
      </div>
    </div>
  `

  try {
    await sendMail({
      subject: `[Contact Us] Message from ${name}`,
      html,
      replyTo: email,
    })
  } catch (err) {
    console.error('[contact] email send failed:', err)
  }

  return NextResponse.json(
    {
      success: true,
      message: `Thanks ${name}! Your message has been received. We will contact you shortly at ${email}.`,
    },
    { status: 200 }
  )
}
