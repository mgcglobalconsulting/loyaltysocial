'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      <nav
        className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        <a className="brand-mark" href="#top" aria-label="Loyalty Lounge Md home">
          <span className="brand-main">Loyalty Lounge Md</span>
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
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Baltimore County · Randallstown · 21+
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Loyalty<br />Social
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
        >
          An elevated social lounge built for the grown, stylish, and connected.
          Food, drinks, VIP tables, and weekly events curated for a professional nightlife crowd.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
        >
          <a href="#reservations" className="btn-gold">
            Reserve VIP <span className="arrow">→</span>
          </a>
          <a href="#events" className="btn-outline">
            View Events
          </a>
        </motion.div>
      </div>

      <div className="hero-address">8521 Liberty Rd, Randallstown, MD 21133</div>
    </section>
  )
}
