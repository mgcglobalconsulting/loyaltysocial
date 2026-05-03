import { SOPLayout } from '@/components/sop/SOPLayout'

const phases = [
  {
    title: 'Phase 1 — Pre-Shift Briefing',
    items: [
      { text: 'Report to manager for shift briefing before doors open' },
      { text: 'Review any known threats, banned individuals, or special event notes' },
      { text: 'Confirm radio/comm device is charged and working' },
      { text: 'Inspect assigned post — clear sight lines, no obstructions' },
    ],
  },
  {
    title: 'Phase 2 — Door & Entry Control',
    items: [
      { text: 'Card ALL guests who appear under 40 — no exceptions', sub: ["Accept: valid state ID, driver's license, passport", 'Reject: expired IDs, student IDs, unclear photos'] },
      { text: 'Conduct bag check per venue policy', sub: ['No weapons, no outside alcohol', 'Use proper search protocol — do not violate guest dignity'] },
      { text: 'Enforce dress code consistently', sub: ['No athletic wear, no visible weapons, no offensive clothing', 'Escalate edge cases to manager — never make solo judgment calls on ambiguous dress code'] },
      { text: 'Monitor line for conflicts or intoxicated arrivals', sub: ['Deny entry to visibly intoxicated guests', 'Communicate denial privately and calmly'] },
    ],
  },
  {
    title: 'Phase 3 — Floor Patrol',
    items: [
      { text: 'Conduct floor sweeps every 20 minutes' },
      { text: 'Monitor crowding near bar, exits, and VIP areas' },
      { text: 'Respond immediately to any altercations', sub: ['De-escalate verbally first', 'Use physical intervention only as last resort', 'Radio for backup before engaging'] },
      { text: 'Keep all emergency exits clear at all times' },
    ],
  },
  {
    title: 'Phase 4 — Incident Protocol',
    items: [
      { text: 'Any physical altercation: radio manager and backup immediately' },
      { text: 'Escort removed guests off premises — do not engage further once outside' },
      { text: 'Document all incidents in shift log', sub: ['Time, description, parties involved, action taken'] },
      { text: 'For medical emergencies: call 911 first, then notify manager' },
    ],
  },
  {
    title: 'Phase 5 — Close & Egress',
    timing: 'End of Night',
    items: [
      { text: 'Monitor guest egress — ensure safe, orderly exit' },
      { text: 'Sweep parking area and immediate exterior before standing down' },
      { text: 'Submit incident report to manager', sub: ['Include any notable events even if no action was required'] },
      { text: 'Return radio/equipment to charging station' },
    ],
  },
]

export default function SecuritySOP() {
  return (
    <SOPLayout
      department="Security"
      role="Door Control · Floor Patrol · Incident Response"
      objective="Maintain a safe, secure, and welcoming environment for every guest — protecting the venue, the staff, and the Loyalty Social experience without compromising hospitality."
      phases={phases}
    />
  )
}
