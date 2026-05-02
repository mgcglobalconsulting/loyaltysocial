import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let name: string | null = null
  let email: string | null = null
  let message: string | null = null

  if (request.headers.get('content-type')?.includes('application/json')) {
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
    return NextResponse.json({ error: 'Please provide name, email, and message.' }, { status: 400 })
  }

  return NextResponse.json(
    {
      success: true,
      message: `Thanks ${name}! Your request has been received. We will contact you shortly at ${email}.`,
    },
    { status: 200 }
  )
}
