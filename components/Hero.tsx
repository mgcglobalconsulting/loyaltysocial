export function Hero() {
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
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Loyalty Social Ultra Lounge home">
          <span>Loyalty</span>
          <span>Social</span>
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#events">Events</a>
          <a href="#private-events">Private Events</a>
          <a href="#reservations">Reserve</a>
        </div>
      </nav>
      <div className="hero-overlay">
        <div className="hero-copy reveal-panel">
          <p className="eyebrow">Baltimore County | Randallstown | 21+</p>
          <h1>Loyalty Social Ultra Lounge</h1>
          <p className="tagline">
            A black-and-gold social lounge built for elevated nights, cultural energy,
            private celebrations, professional mixers, food, drinks, and VIP table experiences.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="#reservations" className="button primary">
              Reserve VIP
            </a>
            <a href="#events" className="button secondary">
              View Events
            </a>
          </div>
          <div className="hero-details" aria-label="Venue highlights">
            <span>Food & Drinks</span>
            <span>Weekly Events</span>
            <span>Private Nights</span>
            <span>VIP Tables</span>
          </div>
        </div>
      </div>
      <div className="scroll-cue">8521 Liberty Rd, Randallstown, MD</div>
    </section>
  )
}
