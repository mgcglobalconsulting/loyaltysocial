import { SOPLayout } from '@/components/sop/SOPLayout'

const phases = [
  {
    title: 'Phase 1 — Kitchen Opening',
    items: [
      { text: 'Wash hands immediately upon arrival — before touching any food or equipment' },
      { text: 'Check all refrigeration units', sub: ['Verify temps: fridge 34–40°F, freezer 0°F or below', 'Log temps on daily sheet'] },
      { text: 'Review prep list and menu for the night with kitchen lead' },
      { text: 'Sanitize all prep surfaces before starting', sub: ['Use approved food-safe sanitizer', 'Allow 60 seconds contact time before wiping'] },
    ],
  },
  {
    title: 'Phase 2 — Prep',
    items: [
      { text: 'Complete all cold prep first', sub: ['Salads, sauces, garnishes, cold proteins'] },
      { text: 'Label and date all prepped items', sub: ['Use FIFO (First In, First Out) rotation'] },
      { text: 'Portion and store proteins per menu spec', sub: ['Verify portion weights match standard recipe'] },
      { text: 'Notify kitchen lead when prep is complete and ready for service' },
    ],
  },
  {
    title: 'Phase 3 — Service',
    items: [
      { text: 'Call out every ticket as it fires', sub: ['Confirm times with front-of-house on rush orders'] },
      { text: 'Plate to spec — no substitutions without manager approval' },
      { text: 'Call dishes when ready — do not let food sit on the window' },
      { text: 'Maintain clean station throughout service', sub: ['Wipe down between tickets', 'Never let garbage overflow'] },
    ],
  },
  {
    title: 'Phase 4 — Food Safety During Service',
    items: [
      { text: 'Monitor hot-holding temps every hour', sub: ['Hot food must stay at 135°F or above'] },
      { text: 'Discard any food held out of temp for more than 2 hours' },
      { text: 'Change gloves after handling raw proteins' },
      { text: 'Report any food quality issues to kitchen lead immediately' },
    ],
  },
  {
    title: 'Phase 5 — Kitchen Close',
    timing: 'End of Service',
    items: [
      { text: 'Cool all leftover hot food properly', sub: ['Ice bath to 70°F within 2 hours, then 41°F within 4 hours total', 'Label, date, and store'] },
      { text: 'Deep clean all cooking surfaces, grills, and fryers' },
      { text: 'Sweep and mop kitchen floor' },
      { text: 'Empty all trash and replace liners' },
      { text: 'Log any food waste or discarded items on waste sheet' },
      { text: 'Final walkthrough with kitchen lead — sign off on close sheet' },
    ],
  },
]

export default function KitchenSOP() {
  return (
    <SOPLayout
      department="Kitchen"
      role="Food Prep · Line Service · Food Safety"
      objective="Produce consistent, high-quality dishes safely and efficiently — upholding Loyalty Social's culinary standards and all Maryland health code requirements."
      phases={phases}
    />
  )
}
