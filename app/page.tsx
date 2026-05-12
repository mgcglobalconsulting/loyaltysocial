import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { ReservationForm } from '../components/ReservationForm'
import { FlyerCarousel } from '../components/FlyerCarousel'
import { Reveal, StaggerGroup, StaggerItem } from '../components/Reveal'

const loungeMarqueeItems = [
  'Birthday Celebrations',
  'VIP Table Nights',
  'Professional Mixers',
  'Date Nights',
  'After-Work Socials',
  'Brand Activations',
  'Social Club Evenings',
  'Upscale Nightlife',
]

const privateEventItems = [
  'Corporate Events',
  'Birthday Parties',
  'Brand Activations',
  'Networking Mixers',
  'Milestone Celebrations',
  'Private Buyouts',
  'Group Dining',
  'Influencer Gatherings',
]

const weeklyEvents = [
  {
    name: 'Fly Fridays',
    day: 'Every Friday',
    description:
      'A polished Friday night setting for cocktails, music, style, and social momentum. Dress the part. Arrive right.',
    image: '/loyal-assets/flyfridays.JPEG',
  },
  {
    name: 'Thursday Temptations',
    day: 'Every Thursday',
    description:
      'A weekly midweek lounge experience with a grown nightlife edge. Unwind before the weekend starts.',
    image: '/loyal-assets/thursday-temptation.jpg',
  },
  {
    name: 'Saturday Housewerk',
    day: 'Every Saturday',
    description:
      'A weekend room built for movement, culture, and a premium social atmosphere. The room you earned.',
    image: '/loyal-assets/saturday-housewerk.jpg',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <Hero />

      {/* ── STATEMENT BAND ── */}
      <section className="editorial-band" id="experience">
        <Reveal><p className="eb-label">An Elevated Nightlife Experience</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="eb-heading">
            Where the Night<br />Begins in Style
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="eb-body">
            Loyalty Lounge Md brings a mature, curated lounge atmosphere to Randallstown
            and the greater Baltimore market. A room designed for guests who want more than a night
            out — they want hospitality, premium lighting, strong visuals, and a social club feeling
            with intention.
          </p>
        </Reveal>
      </section>

      {/* ── LOUNGE VIBE MARQUEE ── */}
      <Marquee label="Perfect For" items={loungeMarqueeItems} />

      {/* ── VIP TABLES SPLIT ── (image left, copy right) */}
      <section className="split-full img-left" id="vip-tables">
        <Reveal className="split-image" delay={0}>
          <div data-frame>
            <span className="frame-corner tl" aria-hidden="true" />
            <span className="frame-corner tr" aria-hidden="true" />
            <span className="frame-corner bl" aria-hidden="true" />
            <span className="frame-corner br" aria-hidden="true" />
            <img
              src="/loyal-assets/people-drinks-times.jpg"
              alt="Guests enjoying drinks at Loyalty Lounge Md"
            />
          </div>
        </Reveal>
        <div className="split-copy">
          <Reveal><p className="sc-label">VIP Table Experiences</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="sc-heading">
              Reserve the Room<br />Like It Was Yours
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="sc-body">
              VIP table service at Loyalty Lounge Md gives your group premium
              placement, dedicated bottle service, and a more private rhythm inside the
              lounge. Whether it's date night, a celebration, or a professional gathering —
              your table is held.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="sc-tags">
              <span className="sc-tag">Premium Placement</span>
              <span className="sc-tag">Bottle Service</span>
              <span className="sc-tag">Private Rhythm</span>
              <span className="sc-tag">Group Dining</span>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <a href="#reservations" className="btn-gold">
              Make a Reservation <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── WEEKLY EVENTS ── */}
      <section className="events-section" id="events">
        <div className="events-section-head">
          <Reveal><p className="es-label">On the Calendar</p></Reveal>
          <Reveal delay={0.1}><h2 className="es-heading">Weekly Events</h2></Reveal>
        </div>
        <StaggerGroup className="events-grid">
          {weeklyEvents.map((event) => (
            <StaggerItem key={event.name}>
              <article className="event-tile">
                <div className="event-tile-img" data-frame="sm">
                  <span className="frame-corner tl" aria-hidden="true" />
                  <span className="frame-corner tr" aria-hidden="true" />
                  <span className="frame-corner bl" aria-hidden="true" />
                  <span className="frame-corner br" aria-hidden="true" />
                  <img src={event.image} alt={`${event.name} event at Loyalty Lounge Md`} />
                </div>
                <div className="event-tile-copy">
                  <p className="event-tile-day">{event.day}</p>
                  <h3 className="event-tile-name">{event.name}</h3>
                  <p className="event-tile-desc">{event.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* ── WEEKLY SPECIALS CAROUSEL ── */}
      <FlyerCarousel />

      {/* ── PRIVATE EVENTS SPLIT ── (copy left, image right) */}
      <section className="split-full img-right" id="private-events">
        <div className="split-copy">
          <Reveal><p className="sc-label">Private Event Spaces</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="sc-heading">
              Host Your Circle<br />in Our Room
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="sc-body">
              From brand activations and professional mixers to birthday celebrations and
              private nightly buyouts, Loyalty Lounge Md gives hosts a polished
              environment with a nightlife pulse. The room is yours to shape.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="sc-tags">
              <span className="sc-tag">Professional Mixers</span>
              <span className="sc-tag">Private Celebrations</span>
              <span className="sc-tag">Brand Activations</span>
              <span className="sc-tag">Full Buyouts</span>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <a href="#reservations" className="btn-gold">
              Inquire About Private Events <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
        <Reveal className="split-image" delay={0.15}>
          <div data-frame>
            <span className="frame-corner tl" aria-hidden="true" />
            <span className="frame-corner tr" aria-hidden="true" />
            <span className="frame-corner bl" aria-hidden="true" />
            <span className="frame-corner br" aria-hidden="true" />
            <img
              src="/loyal-assets/calvin-celebration.JPG"
              alt="Private celebration at Loyalty Lounge Md"
            />
          </div>
        </Reveal>
      </section>

      {/* ── PRIVATE EVENTS MARQUEE ── */}
      <Marquee label="Ideal For" items={privateEventItems} />

      {/* ── KITCHEN & BAR ── */}
      <section className="menu-band" id="menu">
        {/* Food image placeholder — swap src for real food photo when ready */}
        <div className="menu-band-image" data-frame>
          <span className="frame-corner tl" aria-hidden="true" />
          <span className="frame-corner tr" aria-hidden="true" />
          <span className="frame-corner bl" aria-hidden="true" />
          <span className="frame-corner br" aria-hidden="true" />
          <img
            src="/loyal-assets/food-blackened-fish.jpeg"
            alt="Blackened fish over pesto pasta at Loyalty Lounge Md"
          />
        </div>
        <div className="menu-band-copy">
          <p className="mb-label">Kitchen & Bar</p>
          <h2 className="mb-heading">
            Food &amp; Drinks<br />Done Right
          </h2>
          <p className="mb-body">
            Pair the lounge experience with a curated food and drink menu built for groups,
            celebrations, and guests who came dressed for the night. From shareable plates to
            premium cocktails — every detail is on point.
          </p>
          <a href="/menu" className="btn-gold">
            View Full Menu <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* ── FOOD PHOTO TRIO ── */}
      <div className="food-section" aria-label="Food and drink highlights">
        <div className="food-tile" data-frame="sm">
          <span className="frame-corner tl" aria-hidden="true" />
          <span className="frame-corner tr" aria-hidden="true" />
          <span className="frame-corner bl" aria-hidden="true" />
          <span className="frame-corner br" aria-hidden="true" />
          <img
            src="/loyal-assets/jerk-chicken.jpeg"
            alt="Jerk chicken at Loyalty Lounge Md"
          />
          <div className="food-label-overlay">Jerk Chicken</div>
        </div>
        <div className="food-tile" data-frame="sm">
          <span className="frame-corner tl" aria-hidden="true" />
          <span className="frame-corner tr" aria-hidden="true" />
          <span className="frame-corner bl" aria-hidden="true" />
          <span className="frame-corner br" aria-hidden="true" />
          <img
            src="/loyal-assets/teriyaki-salmon.jpeg"
            alt="Teriyaki salmon at Loyalty Lounge Md"
          />
          <div className="food-label-overlay">Teriyaki Salmon</div>
        </div>
        <div className="food-tile" data-frame="sm">
          <span className="frame-corner tl" aria-hidden="true" />
          <span className="frame-corner tr" aria-hidden="true" />
          <span className="frame-corner bl" aria-hidden="true" />
          <span className="frame-corner br" aria-hidden="true" />
          <img
            src="/loyal-assets/loyaltysocial.jpg"
            alt="The lounge at Loyalty Lounge Md"
          />
          <div className="food-label-overlay">The Lounge</div>
        </div>
      </div>

      {/* ── RESERVATIONS ── */}
      <section className="reservation-section" id="reservations">
        <div className="reservation-info">
          <p className="ri-label">Reservations & Booking</p>
          <h2 className="ri-heading">
            Claim Your<br />Table Tonight
          </h2>
          <p className="ri-body">
            Request VIP tables, private event nights, or a professional mixer.
            Share your date, guest count, and the experience you have in mind —
            the team will follow up with availability and options.
          </p>
          <div className="location-block">
            <p><strong>Address</strong><br />8521 Liberty Rd, Randallstown, MD 21133</p>
            <p><strong>Market</strong><br />Randallstown · Baltimore County · Baltimore, MD</p>
            <p><strong>Age Policy</strong><br />21+ | Valid ID Required</p>
          </div>
        </div>
        <div className="reservation-form-wrap">
          <ReservationForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="fb-name">Loyalty Lounge Md</p>
            <p className="fb-tagline">Ultra Lounge</p>
            <p className="fb-address">
              8521 Liberty Rd<br />
              Randallstown, MD 21133<br />
              Baltimore County
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#experience">The Lounge</a></li>
              <li><a href="#events">Weekly Events</a></li>
              <li><a href="#private-events">Private Events</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="/birthday">Birthday Packages</a></li>
            </ul>
          </nav>
          <div className="footer-hours">
            <h4>Hours</h4>
            <div className="hour-row"><span>Thursday</span><span>9pm – 2am</span></div>
            <div className="hour-row"><span>Friday</span><span>9pm – 2am</span></div>
            <div className="hour-row"><span>Saturday</span><span>9pm – 2am</span></div>
            <div className="hour-row"><span>Private Events</span><span>By Appointment</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Loyalty Lounge Md. All rights reserved.</p>
          <span className="age-badge">21+ Only</span>
        </div>
      </footer>
    </main>
  )
}
