import nodemailer from 'nodemailer'

// Shared transporter — reused across all API routes
// Supports Gmail / Google Workspace SMTP
// Set these in .env.local:
//   EMAIL_USER=your-send-from@gmail.com (or Google Workspace address)
//   EMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx  (Gmail App Password, NOT your account password)
//   EMAIL_TO=mark@mgcglobalconsulting.com

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
})

export const RECIPIENT = process.env.EMAIL_TO ?? 'mark@mgcglobalconsulting.com'
export const SENDER_NAME = 'Loyalty Social Ultra Lounge'
export const SENDER_ADDRESS = process.env.EMAIL_USER ?? ''
export const PHONE = '1.410.952.2846'

export async function sendMail(options: {
  subject: string
  html: string
  replyTo?: string
}) {
  return transporter.sendMail({
    from: `"${SENDER_NAME}" <${SENDER_ADDRESS}>`,
    to: RECIPIENT,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
  })
}
