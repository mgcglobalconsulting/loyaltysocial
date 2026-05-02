import { Hero } from '../components/Hero'

const experiences = [
  'Upscale food and drink service for date nights, birthdays, and after-work gatherings',
  'Weekly themed events curated for a grown, social, professional crowd',
  'VIP table reservations with premium placement and a more private lounge rhythm',
  'Private nightly events for brands, entrepreneurs, creatives, and milestone celebrations',
]

const events = [
  {
    title: 'Fly Fridays',
    description: 'A polished Friday night setting for cocktails, music, style, and social momentum.',
    image: '/loyal-assets/flyfridays.JPEG',
  },
  {
    title: 'Thursday Temptations',
    description: 'A weekly midweek lounge experience with a grown nightlife edge.',
    image: '/loyal-assets/thursday-temptation.jpg',
  },
  {
    title: 'Saturday Housewerk',
    description: 'A weekend room built for movement, culture, and a premium social atmosphere.',
    image: '/loyal-assets/saturday-housewerk.jpg',
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="intro-band" id="experience">
        <div className="intro-copy">
          <p className="section-eyebrow">The Social Lounge Experience</p>
          <h2>Luxury nightlife for the grown, stylish, and connected.</h2>
        </div>
        <div className="intro-text">
          <p>
            Loyalty Social Ultra Lounge brings a mature, elevated lounge atmosphere to Randallstown
            and the greater Baltimore market. The room is designed for guests who want more than a
            night out: they want hospitality, music, premium lighting, strong visuals, and a social
            club feeling with intention.
          </p>
        </div>
      </section>

      <section className="content-section experience-grid">
        <div className="media-feature">
          <img src="/loyal-assets/people-drinks-times.jpg" alt="Guests enjoying drinks at Loyalty Social Ultra Lounge" />
        </div>
        <div className="feature-copy">
          <p className="section-eyebrow">Food | Drinks | Culture | VIP</p>
          <h2>Built for elevated evenings and private moments.</h2>
          <div className="feature-list">
            {experiences.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section event-section" id="events">
        <div className="section-heading compact">
          <p className="section-eyebrow">Weekly Events</p>
          <h2>A controlled luxury frame for bold nightlife energy.</h2>
          <p>
            Flyers can bring the heat. The website keeps the room premium, focused, and invitation-ready.
          </p>
        </div>
        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <img src={event.image} alt={`${event.title} event flyer`} />
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section" id="private-events">
        <div className="private-copy">
          <p className="section-eyebrow">Private Events</p>
          <h2>Host the room like it was reserved for your circle.</h2>
          <p>
            From brand activations and professional mixers to birthday celebrations and private
            nightly experiences, Loyalty Social Ultra Lounge gives hosts a polished environment
            with a nightlife pulse.
          </p>
          <div className="service-row">
            <span>Professional mixers</span>
            <span>Private celebrations</span>
            <span>VIP table service</span>
            <span>Social club nights</span>
          </div>
        </div>
        <div className="image-stack" aria-label="Lounge imagery">
          <img src="/loyal-assets/new-loyalty.PNG" alt="Loyalty Social Ultra Lounge interior with black and gold styling" />
          <img src="/loyal-assets/loyaltysocial.jpg" alt="Premium lounge seating and lighting at Loyalty Social Ultra Lounge" />
        </div>
      </section>

      <section className="content-section menu-section">
        <div className="section-heading compact">
          <p className="section-eyebrow">Kitchen & Bar</p>
          <h2>Food and drinks with a premium nightlife rhythm.</h2>
        </div>
        <div className="menu-layout">
          <img src="/loyal-assets/three-three.png" alt="Loyalty Social food and drink presentation" />
          <div className="menu-panel">
            <h3>For the table, the toast, and the after-work unwind.</h3>
            <p>
              Pair the lounge experience with food, drinks, and curated hospitality built for groups,
              celebrations, and guests who came dressed for the night.
            </p>
            <a href="#reservations" className="button secondary">Plan a Visit</a>
          </div>
        </div>
      </section>

      <section className="content-section contact-section" id="reservations">
        <div className="section-heading">
          <p className="section-eyebrow">Reservations & Booking</p>
          <h2>Request VIP tables, private nights, or a professional mixer.</h2>
        </div>
        <div className="grid-two-columns contact-grid">
          <div className="contact-copy">
            <p>
              Share the date, guest count, and experience you have in mind. The team will follow up
              with availability, table options, and private event details.
            </p>
            <div className="contact-details">
              <p>
                <strong>Address:</strong> 8521 Liberty Rd, Randallstown, MD 21133
              </p>
              <p>
                <strong>Market:</strong> Randallstown, Baltimore County, Baltimore, Maryland
              </p>
            </div>
          </div>

          <form className="contact-form" action="/api/contact" method="post">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Reservation or event details
              <textarea name="message" placeholder="Date, guest count, table request, or private event details" required />
            </label>
            <button type="submit" className="button primary">
              Send Request
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Loyalty Social Ultra Lounge | 8521 Liberty Rd, Randallstown, MD 21133</p>
      </footer>
    </main>
  )
}
