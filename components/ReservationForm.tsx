'use client'

import { useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ReservationForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      date: (form.elements.namedItem('date') as HTMLInputElement).value,
      guests: (form.elements.namedItem('guests') as HTMLSelectElement).value,
      type: (form.elements.namedItem('type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <form className="res-form" onSubmit={handleSubmit} noValidate>
      <div className="res-form-row">
        <div className="form-field">
          <label htmlFor="res-name">Full Name</label>
          <input
            id="res-name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="res-email">Email</label>
          <input
            id="res-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="res-form-row">
        <div className="form-field">
          <label htmlFor="res-phone">Phone</label>
          <input
            id="res-phone"
            name="phone"
            type="tel"
            placeholder="(443) 555-0100"
            autoComplete="tel"
          />
        </div>
        <div className="form-field">
          <label htmlFor="res-date">Preferred Date</label>
          <input
            id="res-date"
            name="date"
            type="date"
            required
          />
        </div>
      </div>

      <div className="res-form-row">
        <div className="form-field">
          <label htmlFor="res-guests">Guest Count</label>
          <select id="res-guests" name="guests" required>
            <option value="">Select party size</option>
            <option value="1-2">1 – 2 guests</option>
            <option value="3-5">3 – 5 guests</option>
            <option value="6-10">6 – 10 guests</option>
            <option value="11-20">11 – 20 guests</option>
            <option value="21+">21+ guests (Private Buyout)</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="res-type">Reservation Type</label>
          <select id="res-type" name="type" required>
            <option value="">Select type</option>
            <option value="vip-table">VIP Table</option>
            <option value="birthday">Birthday Celebration</option>
            <option value="private-event">Private Event</option>
            <option value="professional-mixer">Professional Mixer</option>
            <option value="brand-activation">Brand Activation</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="res-message">Details</label>
        <textarea
          id="res-message"
          name="message"
          placeholder="Tell us about your event — occasion, preferences, any special requests"
          required
        />
      </div>

      {status === 'success' && (
        <p className="form-status success">
          Request received — we will be in touch within 24 hours.
        </p>
      )}

      {status === 'error' && (
        <p className="form-status error">{error}</p>
      )}

      <button
        type="submit"
        className="btn-gold"
        disabled={status === 'submitting'}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Reservation Request'}
        {status !== 'submitting' && <span className="arrow">→</span>}
      </button>
    </form>
  )
}
