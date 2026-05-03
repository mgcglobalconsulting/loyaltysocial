import { SOPLayout } from '@/components/sop/SOPLayout'

const phases = [
  {
    title: 'Phase 1 — Pre-Event Reservation Prep',
    items: [
      { text: 'Review all VIP reservations for the night with manager', sub: ['Party size, bottle orders pre-confirmed, special requests'] },
      { text: 'Set VIP section 45 minutes before doors open', sub: ['Reserved signage placed', 'Tablecloth, candles, and branded decor per standard', 'Ice bucket, glassware, and mixers staged'] },
      { text: 'Confirm bottle orders with bar staff', sub: ['Verify each bottle is chilled and ready for timed delivery'] },
    ],
  },
  {
    title: 'Phase 2 — VIP Guest Arrival',
    items: [
      { text: 'Receive hand-off from host — greet VIP guests by name if known' },
      { text: 'Escort to VIP section personally', sub: ['Walk at guest pace, make conversation, make them feel like the only people in the room'] },
      { text: 'Introduce yourself as their personal concierge for the night' },
      { text: 'Present bottle menu if no pre-order exists', sub: ['Upsell premium spirits, champagne, and specialty packages'] },
    ],
  },
  {
    title: 'Phase 3 — Bottle Presentation & Setup',
    items: [
      { text: 'Coordinate sparkler presentation with bar and DJ', sub: ['DJ announces bottle arrival on cue', 'Sparklers lit by bar — walk confidently through the room'] },
      { text: 'Present bottle to guest of honor before opening' },
      { text: 'Pour first round personally', sub: ['Offer to pour for the entire table'] },
      { text: 'Set up full table', sub: ['Ice, mixers, garnish tray, extra glasses — all within guest reach'] },
    ],
  },
  {
    title: 'Phase 4 — Ongoing VIP Care',
    items: [
      { text: 'Check in every 15 minutes throughout the night' },
      { text: 'Anticipate needs before guests ask', sub: ['Refill ice, replace empty mixers, clear used glasses'] },
      { text: 'Proactively suggest add-ons', sub: ['Additional bottles, food items, specialty cocktails'] },
      { text: 'Coordinate with security to maintain VIP section exclusivity' },
    ],
  },
  {
    title: 'Phase 5 — Departure & Follow-Up',
    items: [
      { text: 'Thank guests personally at departure', sub: ['Offer to save their reservation for next visit', 'Collect any special feedback'] },
      { text: 'Document guest preferences in VIP log', sub: ['Favorite bottles, seating preferences, special requests for future visits'] },
      { text: 'Submit VIP section closeout report to manager' },
    ],
  },
]

export default function VIPSop() {
  return (
    <SOPLayout
      department="VIP Concierge"
      role="Table Reservations · Bottle Service · Guest Experience"
      objective="Deliver a white-glove, personalized VIP experience that makes every guest feel like a celebrity — driving bottle sales and guest loyalty through exceptional service."
      phases={phases}
    />
  )
}
