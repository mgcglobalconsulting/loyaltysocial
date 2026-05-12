import { SOPLayout } from '@/components/sop/SOPLayout'

const phases = [
  {
    title: 'Phase 1 — Shift Open',
    items: [
      { text: 'Arrive 60 minutes before staff', sub: ['Review reservations, special events, and any carry-over issues from prior shift'] },
      { text: 'Walk the entire venue', sub: ['Check bar, floor, kitchen, restrooms, VIP areas, and entry'] },
      { text: 'Brief all staff before doors open', sub: ['Reservations, specials, staffing changes, behavior expectations for the night'] },
      { text: 'Confirm POS system, cash drawer, and payment processing are live' },
      { text: 'Verify security staffing is in place' },
    ],
  },
  {
    title: 'Phase 2 — Active Floor Management',
    items: [
      { text: 'Walk the floor every 30 minutes', sub: ['Check in with bar, servers, and security', 'Scan for service or safety issues'] },
      { text: 'Monitor pacing — adjust staffing if sections are overwhelmed' },
      { text: 'Handle all guest complaints personally', sub: ['Resolve at the table — do not send staff to manage serious complaints'] },
      { text: 'Authorize all comps, discounts, and policy exceptions' },
      { text: 'Monitor all areas for compliance', sub: ['Capacity limits, alcohol service responsibility, fire exit clearance'] },
    ],
  },
  {
    title: 'Phase 3 — Revenue & Upsell Oversight',
    items: [
      { text: 'Monitor bottle service pacing with VIP Concierge' },
      { text: 'Check in on bar sales — review tab activity mid-shift' },
      { text: 'Coordinate any on-the-spot promotions with DJ and staff' },
    ],
  },
  {
    title: 'Phase 4 — Incident Management',
    items: [
      { text: 'Respond immediately to any security radio call' },
      { text: 'Make all final decisions on guest removal' },
      { text: 'Document all incidents in shift log', sub: ['Time, parties involved, action taken, follow-up needed'] },
      { text: 'Contact ownership for any serious incidents (assault, injury, major damage)' },
    ],
  },
  {
    title: 'Phase 5 — Shift Close',
    timing: 'End of Night',
    items: [
      { text: 'Call last call and manage guest egress' },
      { text: 'Walk venue after all guests have exited', sub: ['Check for left property, safety hazards, and unreported damage'] },
      { text: 'Collect and verify cash drawers', sub: ['Run end-of-night sales report', 'Reconcile any discrepancies before staff dismissal'] },
      { text: 'Review shift log and complete manager close report' },
      { text: 'Confirm all staff have signed out', sub: ['Dismiss staff in order — security last'] },
      { text: 'Lock and secure the venue', sub: ['Alarm set, all doors checked, exterior lights on'] },
    ],
  },
]

export default function ManagementSOP() {
  return (
    <SOPLayout
      department="Management"
      role="Shift Lead · Operations · Staff Coordination"
      objective="Run a seamless, profitable, and safe shift — coordinating every department and making real-time decisions that protect the guest experience and the Loyalty Social brand."
      phases={phases}
    />
  )
}
