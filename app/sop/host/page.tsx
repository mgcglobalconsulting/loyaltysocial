import { SOPLayout } from '@/components/sop/SOPLayout'

const phases = [
  {
    title: 'Phase 1 — Pre-Open Setup',
    items: [
      { text: 'Review reservation list and VIP bookings with manager' },
      { text: 'Prepare welcome station', sub: ['Clean podium, pens, reservation binder or tablet', 'Guest list printed or digital copy confirmed'] },
      { text: 'Confirm table layout and capacity with floor manager' },
      { text: 'Inspect entrance area', sub: ['Sweep/wipe entry, check signage, ensure velvet rope is set'] },
    ],
  },
  {
    title: 'Phase 2 — Guest Arrival & Check-In',
    items: [
      { text: 'Greet every guest with eye contact and a warm welcome within 10 seconds of arrival' },
      { text: 'Verify guest age (ID check for all guests who appear under 40)' },
      { text: 'Check guest list / reservation status', sub: ['Walk-ins: assess capacity and notify manager if at limit', 'Reservations: confirm name and party size'] },
      { text: 'Collect cover charge if applicable', sub: ['Issue wristband or stamp per venue policy'] },
      { text: 'Escort guests to table or waiting area — never point, always lead' },
    ],
  },
  {
    title: 'Phase 3 — Floor Coordination',
    items: [
      { text: 'Maintain a real-time table availability count' },
      { text: 'Communicate wait times honestly and proactively' },
      { text: 'Coordinate with servers when tables turn over' },
      { text: 'Monitor entrance line — notify security if line exceeds venue policy' },
    ],
  },
  {
    title: 'Phase 4 — VIP & Private Event Handling',
    items: [
      { text: 'Confirm VIP section setup before guest arrival', sub: ['Verify reserved signage is in place', 'Alert VIP Concierge when VIP party approaches'] },
      { text: 'Escort VIP guests personally to their section', sub: ['Introduce them to their concierge/server by name'] },
    ],
  },
  {
    title: 'Phase 5 — Closing',
    timing: 'End of Night',
    items: [
      { text: 'Clear and organize welcome station' },
      { text: 'Submit guest count report to manager', sub: ['Total covers, VIP reservations fulfilled, walk-ins'] },
      { text: 'Note any guest feedback or complaints in shift log' },
      { text: 'Final walkthrough with manager and sign off' },
    ],
  },
]

export default function HostSOP() {
  return (
    <SOPLayout
      department="Host / Hostess"
      role="Front of House · Guest Relations · Door Management"
      objective="Create a first-class first impression for every guest — managing flow, reservations, and the overall entrance experience with confidence and professionalism."
      phases={phases}
    />
  )
}
