import { SOPLayout } from '@/components/sop/SOPLayout'

const phases = [
  {
    title: 'Phase 1 — Pre-Shift Setup',
    timing: 'Before Doors Open',
    items: [
      { text: 'Arrive in full uniform — inspect appearance before clocking in', sub: ['All-black attire, clean and pressed', 'Hair secured, minimal jewelry'] },
      { text: 'Review reservations and section assignments with manager' },
      { text: 'Set tables in your section', sub: ['Napkins folded, menus placed', 'Candles/decor per venue standard'] },
      { text: 'Restock server station', sub: ['Straws, napkins, pens, check presenters stocked'] },
    ],
  },
  {
    title: 'Phase 2 — Guest Arrival',
    items: [
      { text: 'Welcome every table within 90 seconds of being seated' },
      { text: 'Introduce yourself and present the drink menu' },
      { text: 'Card all guests who appear under 40' },
      { text: 'Take initial drink order — suggest a specialty cocktail or bottle option' },
    ],
  },
  {
    title: 'Phase 3 — Bottle Service Protocol',
    items: [
      { text: 'Receive bottle from bar with presentation tray', sub: ['Verify correct bottle, mixer, and garnish per order'] },
      { text: 'Deliver bottle service with full presentation', sub: ['Arrive with sparklers lit (if applicable)', 'Announce the bottle name loudly enough for the table to hear', 'Present bottle to guest before opening'] },
      { text: 'Set up table', sub: ['Ice bucket, mixers, garnish tray, glasses — in proper order', 'Confirm guest satisfaction before stepping away'] },
      { text: 'Check back every 15 minutes', sub: ['Refill mixers and ice as needed', 'Suggest additional bottles proactively'] },
    ],
  },
  {
    title: 'Phase 4 — Food Service',
    items: [
      { text: 'Deliver food orders within 3 minutes of kitchen call' },
      { text: 'Announce each dish when placing', sub: ['Name the dish, ask if anything else is needed'] },
      { text: 'Check back 2 minutes after food delivery', sub: ['Address any issues immediately'] },
      { text: 'Clear plates promptly after guests finish' },
    ],
  },
  {
    title: 'Phase 5 — Check & Checkout',
    items: [
      { text: 'Present check before guests ask', sub: ['Verify all items are correct before presenting'] },
      { text: 'Return payment within 3 minutes' },
      { text: 'Thank guests personally and invite them back' },
    ],
  },
  {
    title: 'Phase 6 — Section Closeout',
    timing: 'End of Shift',
    items: [
      { text: 'Clear and wipe down all tables in section' },
      { text: 'Restock server station for next shift' },
      { text: 'Submit tip declaration and cash-out to manager' },
      { text: 'Final walkthrough with manager — sign off on closing duties' },
    ],
  },
]

export default function ServerSOP() {
  return (
    <SOPLayout
      department="Server / Bottle Service"
      role="Floor Service · Table Management · Guest Experience"
      objective="Deliver seamless, luxury-level table service and bottle presentations that reflect the upscale identity of Loyalty Lounge Md."
      phases={phases}
    />
  )
}
