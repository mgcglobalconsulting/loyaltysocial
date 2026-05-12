'use client'

import { useState } from 'react'

export function Hero() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <section className="hero-section" id="top">
      <video
        className="hero-video"
        src="/loyal-assets/loyalty-social-media.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/loyal-assets/loyalty-social-into.png"
      />
      <div className="hero-shade" />

      {/* ── Navigation ── */}
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Loyalty Social Ultra Lounge home">
          <span className="brand-main">Loyalty Social</span>
          <span className="brand-sub">Ultra Lounge · Randallstown, MD</span>
        </a>

        <div className="nav-links" role="menubar">
          <a href="#experience" role="menuitem">Lounge</a>
          <a href="#events" role="menuitem">Events</a>
          <a href="#private-events" role="menuitem">Private Events</a>
          <a href="/menu" role="menuitem">Menu</a>
        </div>

        <div className="nav-right">
          <a href="#reservations" className="btn-gold">
            Reserve VIP <span className="arrow">→</span>
          </a>
        </div>

        <button
          className="nav-hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger-icon${open ? ' is-open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Site navigation" aria-modal="true">
          <a href="#experience" onClick={close}>Lounge</a>
          <a href="#events" onClick={close}>Events</a>
          <a href="#private-events" onClick={close}>Private Events</a>
          <a href="/menu" onClick={close}>Menu</a>
          <a href="#reservations" onClick={close} className="btn-gold">
            Reserve VIP <span className="arrow">→</span>
          </a>
        </div>
      )}

      {/* ── Hero Copy ── */}
      <div className="hero-body">
        <p className="hero-eyebrow">Baltimore County · Randallstown · 21+</p>
        <h1 className="hero-title">
          Loyalty<br />Social
        </h1>
        <p className="hero-tagline">
          An elevated social lounge built for the grown, stylish, and connected.
          Food, drinks, VIP tables, and weekly events curated for a professional nightlife crowd.
        </p>
        <div className="hero-ctas">
          <a href="#reservations" className="btn-gold">
            Reserve VIP <span className="arrow">→</span>
          </a>
          <a href="#events" className="btn-outline">
            View Events
          </a>
        </div>
      </div>

      <div className="hero-address">8521 Liberty Rd, Randallstown, MD 21133</div>
    </section>
  )
}
