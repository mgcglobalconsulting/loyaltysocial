import { SOPLayout } from '@/components/sop/SOPLayout'

const phases = [
  {
    title: 'Phase 1 — Initial Bar Inspection',
    timing: 'Upon Arrival',
    items: [
      { text: 'Inspect bar top', sub: ['Wipe down and sanitize all surfaces', 'Remove any debris, spills, or residue'] },
      { text: 'Check bar sinks', sub: ['Verify hot water is working', 'Confirm sinks are clean and sanitized', 'Check drain functionality'] },
      { text: 'Inspect floor area', sub: ['Sweep if necessary', 'Place floor mats properly behind bar'] },
      { text: 'Check trash cans', sub: ['Empty if needed', 'Replace liners'] },
    ],
  },
  {
    title: 'Phase 2 — Stock & Inventory Check',
    items: [
      { text: 'Review bar inventory needs', sub: ['Identify low or missing items', 'Restock all essential liquors, mixers, and supplies'] },
      { text: 'Check beer stock (coolers)', sub: ['Ensure fully stocked and organized'] },
      { text: 'Inspect condiment station', sub: ['Refill garnishes, mixers, and bar essentials'] },
      { text: 'Verify service line', sub: ['Napkins stocked', 'Straws stocked', 'Utensils stocked', 'Salt/pepper shakers filled and clean'] },
    ],
  },
  {
    title: 'Phase 3 — Prep Stations',
    items: [
      { text: 'Prepare fruit station', sub: ['Cut fresh fruit (lemons, limes, oranges, etc.)', 'Store in clean, labeled containers', 'Ensure station is clean and ready'] },
      { text: 'Prepare garnish trays', sub: ['Fully stocked and organized'] },
      { text: 'Check napkin supply', sub: ['Ensure backup stock is ready for service'] },
    ],
  },
  {
    title: 'Phase 4 — Glassware & Sanitation',
    items: [
      { text: 'Inspect glassware', sub: ['Clean, polished, and free of spots', 'Organized by type (rocks, highball, martini, shot, wine)'] },
      { text: 'Set up sanitizing station', sub: ['Prepare sanitizer solution with tablets', 'Use correct water temperature per health code', 'Replace solution every 2 hours during service'] },
    ],
  },
  {
    title: 'Phase 5 — 10 Min Pre-Open Tasks',
    timing: '10 Minutes Before Opening',
    items: [
      { text: 'Load ice bins', sub: ['Fill to capacity', 'Verify ice scoop is present and clean'] },
      { text: 'Test POS system', sub: ['Log in and verify connectivity', 'Confirm all menu items are active'] },
      { text: 'Final bar walk', sub: ['Scan for anything out of place', 'Confirm music/lighting is set to pre-service level'] },
      { text: 'Radio check with management', sub: ['Confirm staffing is in place', 'Get any special instructions for the night'] },
    ],
  },
  {
    title: 'Phase 6 — Service Standards',
    timing: 'During Service',
    items: [
      { text: 'Greet every guest within 30 seconds of approach' },
      { text: 'Card all guests who appear under 40 — no exceptions' },
      { text: 'Maintain clean bar top throughout shift', sub: ['Wipe down after every transaction'] },
      { text: 'Never leave bar unattended during open hours', sub: ['Communicate with floor staff before stepping away'] },
      { text: 'Monitor guest intoxication levels', sub: ['Notify management immediately if cut-off required'] },
      { text: 'Upsell premium spirits on every order', sub: ['Suggest top-shelf upgrades, bottle service, and specialty cocktails'] },
    ],
  },
  {
    title: 'Phase 7 — Closing Procedures',
    timing: 'End of Shift',
    items: [
      { text: 'Last call announcement (30 min before close)', sub: ['Coordinate with management on exact time'] },
      { text: 'Break down fruit and garnish stations', sub: ['Date-label and refrigerate remaining product', 'Discard expired items'] },
      { text: 'Deep clean bar surfaces', sub: ['Use approved sanitizer on all surfaces', 'Polish glassware and store inverted'] },
      { text: 'Drain and clean all sinks', sub: ['Scrub sink basins', 'Replace drain screens if needed'] },
      { text: 'Liquor count and end-of-night inventory', sub: ['Record any discrepancies on inventory sheet', 'Lock all liquor and lock storage area'] },
      { text: 'Empty and reline all trash cans', sub: ['Dispose of waste in designated area'] },
      { text: 'Final walkthrough with manager', sub: ['Sign off on closing checklist', 'Report any equipment issues or incidents'] },
    ],
  },
]

export default function BartenderSOP() {
  return (
    <SOPLayout
      department="Bartender"
      role="Bar Operations · Pre-Shift · Service · Close"
      objective="Ensure the bar is fully operational, sanitized, stocked, and service-ready — delivering an elevated guest experience consistent with Loyalty Social Ultra Lounge standards."
      phases={phases}
    />
  )
}
