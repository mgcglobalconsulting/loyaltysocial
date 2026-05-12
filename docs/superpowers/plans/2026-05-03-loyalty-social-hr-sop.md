# Loyalty Social Ultra Lounge — HR Packet & Department SOPs

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full HR hiring packet and visual, brand-matched SOPs for every department at Loyalty Social Ultra Lounge — deployable as printable Next.js pages.

**Architecture:** Each SOP and HR doc lives at its own route under `/app/sop/[department]/page.tsx` and `/app/hr/[doc]/page.tsx`. A shared layout wraps all pages with the Loyalty Social brand (matte black background, Egyptian gold accents, print-safe CSS). All pages are standalone — no auth required — so management can share direct links or print them.

**Tech Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · brand tokens from `PROJECT_BRIEF.md`

---

## Brand Tokens (reference throughout all tasks)

```ts
// Use these in every component — never hardcode hex
const brand = {
  black:    '#050505',
  softBlack:'#0B0B0B',
  charcoal: '#1A1A1A',
  graphite: '#242424',
  gold:     '#C9A24A',
  goldBright:'#F4D06F',
  goldAntique:'#9F7A28',
  warmWhite:'#F5F0E6',
}
```

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/sop/layout.tsx` | Shared SOP shell: brand header, print button, footer |
| `app/sop/page.tsx` | SOP hub — index of all departments |
| `app/sop/bartender/page.tsx` | Bartender full SOP (opening, closing, service) |
| `app/sop/server/page.tsx` | Server / Bottle Service SOP |
| `app/sop/host/page.tsx` | Host / Hostess SOP |
| `app/sop/security/page.tsx` | Security / Door Staff SOP |
| `app/sop/vip/page.tsx` | VIP Concierge SOP |
| `app/sop/kitchen/page.tsx` | Kitchen / Food Staff SOP |
| `app/sop/management/page.tsx` | Management / Shift Lead SOP |
| `app/hr/layout.tsx` | Shared HR shell (same brand wrapper) |
| `app/hr/page.tsx` | HR hub — index of all docs |
| `app/hr/application/page.tsx` | Employment application form (print-ready) |
| `app/hr/onboarding/page.tsx` | New hire onboarding checklist |
| `app/hr/handbook/page.tsx` | Employee handbook overview |
| `app/hr/policies/page.tsx` | Attendance, dress code, conduct policies |
| `components/sop/SOPLayout.tsx` | Reusable SOP page wrapper with phase sections |
| `components/sop/ChecklistPhase.tsx` | Collapsible checklist phase block |
| `components/sop/ChecklistItem.tsx` | Single checklist row with checkbox |
| `components/hr/HRLayout.tsx` | Reusable HR doc wrapper |
| `app/globals.css` | Add `@media print` rules for clean printing |

---

## Task 1: Shared SOP Components

**Files:**
- Create: `components/sop/ChecklistItem.tsx`
- Create: `components/sop/ChecklistPhase.tsx`
- Create: `components/sop/SOPLayout.tsx`

- [ ] **Step 1: Create `ChecklistItem.tsx`**

```tsx
// components/sop/ChecklistItem.tsx
export function ChecklistItem({ text, sub }: { text: string; sub?: string[] }) {
  return (
    <li className="flex gap-3 py-2 border-b border-[#242424] last:border-0">
      <span className="mt-0.5 w-5 h-5 shrink-0 rounded border-2 border-[#C9A24A] bg-transparent print:border-black" />
      <div>
        <p className="text-[#F5F0E6] text-sm font-medium">{text}</p>
        {sub && (
          <ul className="mt-1 space-y-0.5 pl-3">
            {sub.map((s, i) => (
              <li key={i} className="text-[#9F7A28] text-xs before:content-['•'] before:mr-1">{s}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}
```

- [ ] **Step 2: Create `ChecklistPhase.tsx`**

```tsx
// components/sop/ChecklistPhase.tsx
import { ChecklistItem } from './ChecklistItem'

interface Phase {
  title: string
  timing?: string
  items: { text: string; sub?: string[] }[]
}

export function ChecklistPhase({ phase, index }: { phase: Phase; index: number }) {
  return (
    <section className="mb-8 break-inside-avoid">
      <div className="flex items-center gap-4 mb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C9A24A] text-[#050505] text-sm font-bold shrink-0">
          {index + 1}
        </span>
        <div>
          <h2 className="text-[#F4D06F] text-lg font-semibold tracking-wide uppercase">
            {phase.title}
          </h2>
          {phase.timing && (
            <p className="text-[#9F7A28] text-xs uppercase tracking-widest">{phase.timing}</p>
          )}
        </div>
      </div>
      <ul className="bg-[#0B0B0B] border border-[#242424] rounded-lg overflow-hidden divide-y divide-[#1A1A1A] px-4">
        {phase.items.map((item, i) => (
          <ChecklistItem key={i} text={item.text} sub={item.sub} />
        ))}
      </ul>
    </section>
  )
}
```

- [ ] **Step 3: Create `SOPLayout.tsx`**

```tsx
// components/sop/SOPLayout.tsx
import { ChecklistPhase } from './ChecklistPhase'

interface SOPLayoutProps {
  department: string
  role: string
  objective: string
  phases: {
    title: string
    timing?: string
    items: { text: string; sub?: string[] }[]
  }[]
}

export function SOPLayout({ department, role, objective, phases }: SOPLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6] px-6 py-10 max-w-3xl mx-auto print:bg-white print:text-black">
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-[#C9A24A]">
        <p className="text-[#C9A24A] text-xs uppercase tracking-[0.3em] mb-1">Loyalty Social Ultra Lounge</p>
        <h1 className="text-4xl font-bold text-[#F4D06F] mb-1">{department}</h1>
        <p className="text-[#9F7A28] text-sm uppercase tracking-widest mb-4">{role}</p>
        <div className="bg-[#1A1A1A] border-l-4 border-[#C9A24A] px-4 py-3 rounded-r print:bg-gray-100">
          <p className="text-[#F5F0E6] text-sm italic">
            <span className="text-[#C9A24A] font-semibold not-italic">Objective: </span>
            {objective}
          </p>
        </div>
      </div>

      {/* Phases */}
      {phases.map((phase, i) => (
        <ChecklistPhase key={i} phase={phase} index={i} />
      ))}

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[#242424] flex justify-between text-xs text-[#9F7A28]">
        <span>Loyalty Social Ultra Lounge — Internal SOP</span>
        <span>Staff Initials: _______ Date: _______</span>
      </div>

      {/* Print button (hidden on print) */}
      <button
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 bg-[#C9A24A] text-[#050505] px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[#F4D06F] transition print:hidden"
      >
        Print SOP
      </button>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add components/sop/
git commit -m "feat: add shared SOP component library (ChecklistItem, Phase, Layout)"
```

---

## Task 2: Print CSS

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add print rules**

Append to `app/globals.css`:

```css
@media print {
  @page {
    margin: 1.5cm;
    size: letter portrait;
  }
  .print\:hidden { display: none !important; }
  body { background: white !important; color: black !important; }
  section { break-inside: avoid; }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: add print stylesheet for SOP/HR pages"
```

---

## Task 3: SOP Layout Shell

**Files:**
- Create: `app/sop/layout.tsx`

- [ ] **Step 1: Create layout**

```tsx
// app/sop/layout.tsx
export default function SOPRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/layout.tsx
git commit -m "feat: add SOP route layout shell"
```

---

## Task 4: SOP Hub Index Page

**Files:**
- Create: `app/sop/page.tsx`

- [ ] **Step 1: Create hub page**

```tsx
// app/sop/page.tsx
import Link from 'next/link'

const departments = [
  { slug: 'bartender',  label: 'Bartender',          icon: '🍸', desc: 'Opening · Closing · Service Standards' },
  { slug: 'server',     label: 'Server / Bottle Svc', icon: '🥂', desc: 'Table Service · Upsell · Checkout' },
  { slug: 'host',       label: 'Host / Hostess',      icon: '🚪', desc: 'Door · Seating · Reservations' },
  { slug: 'security',   label: 'Security',            icon: '🛡️', desc: 'ID Check · Crowd · Incident Protocol' },
  { slug: 'vip',        label: 'VIP Concierge',       icon: '👑', desc: 'Reservations · Bottle Setup · Guest Exp.' },
  { slug: 'kitchen',    label: 'Kitchen',             icon: '🍽️', desc: 'Prep · Plating · Food Safety' },
  { slug: 'management', label: 'Management',          icon: '📋', desc: 'Shift Open · Close · Staff Coordination' },
]

export default function SOPHub() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6] px-6 py-14 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <p className="text-[#C9A24A] text-xs uppercase tracking-[0.4em] mb-2">Internal Operations</p>
        <h1 className="text-5xl font-bold text-[#F4D06F] mb-3">Staff SOPs</h1>
        <p className="text-[#9F7A28] text-sm">Loyalty Social Ultra Lounge · Baltimore, MD</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {departments.map((d) => (
          <Link key={d.slug} href={`/sop/${d.slug}`}
            className="group flex items-center gap-4 bg-[#0B0B0B] border border-[#242424] hover:border-[#C9A24A] rounded-xl px-6 py-5 transition-all">
            <span className="text-3xl">{d.icon}</span>
            <div>
              <p className="text-[#F4D06F] font-semibold group-hover:text-white transition">{d.label}</p>
              <p className="text-[#9F7A28] text-xs">{d.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/hr" className="text-[#C9A24A] text-sm underline underline-offset-4 hover:text-[#F4D06F]">
          → HR Hiring Packet
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/page.tsx
git commit -m "feat: add SOP department hub index page"
```

---

## Task 5: Bartender SOP Page

**Files:**
- Create: `app/sop/bartender/page.tsx`

- [ ] **Step 1: Create page with full opening + closing + service data**

```tsx
// app/sop/bartender/page.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/bartender/
git commit -m "feat: add Bartender SOP page (opening, service, closing)"
```

---

## Task 6: Server / Bottle Service SOP

**Files:**
- Create: `app/sop/server/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/sop/server/page.tsx
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
      objective="Deliver seamless, luxury-level table service and bottle presentations that reflect the upscale identity of Loyalty Social Ultra Lounge."
      phases={phases}
    />
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/server/
git commit -m "feat: add Server/Bottle Service SOP page"
```

---

## Task 7: Host / Hostess SOP

**Files:**
- Create: `app/sop/host/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/sop/host/page.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/host/
git commit -m "feat: add Host/Hostess SOP page"
```

---

## Task 8: Security / Door Staff SOP

**Files:**
- Create: `app/sop/security/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/sop/security/page.tsx
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
      { text: 'Card ALL guests who appear under 40 — no exceptions', sub: ['Accept: valid state ID, driver\'s license, passport', 'Reject: expired IDs, student IDs, unclear photos'] },
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
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/security/
git commit -m "feat: add Security/Door Staff SOP page"
```

---

## Task 9: VIP Concierge SOP

**Files:**
- Create: `app/sop/vip/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/sop/vip/page.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/vip/
git commit -m "feat: add VIP Concierge SOP page"
```

---

## Task 10: Kitchen / Food Staff SOP

**Files:**
- Create: `app/sop/kitchen/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/sop/kitchen/page.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/kitchen/
git commit -m "feat: add Kitchen/Food Staff SOP page"
```

---

## Task 11: Management / Shift Lead SOP

**Files:**
- Create: `app/sop/management/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/sop/management/page.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add app/sop/management/
git commit -m "feat: add Management/Shift Lead SOP page"
```

---

## Task 12: HR Shared Components & Layout

**Files:**
- Create: `components/hr/HRLayout.tsx`
- Create: `app/hr/layout.tsx`

- [ ] **Step 1: Create `HRLayout.tsx`**

```tsx
// components/hr/HRLayout.tsx
export function HRLayout({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6] px-6 py-10 max-w-3xl mx-auto print:bg-white print:text-black">
      <div className="mb-10 pb-6 border-b border-[#C9A24A]">
        <p className="text-[#C9A24A] text-xs uppercase tracking-[0.3em] mb-1">Loyalty Social Ultra Lounge · Human Resources</p>
        <h1 className="text-4xl font-bold text-[#F4D06F] mb-1">{title}</h1>
        <p className="text-[#9F7A28] text-sm uppercase tracking-widest">{subtitle}</p>
      </div>
      {children}
      <div className="mt-12 pt-6 border-t border-[#242424] flex justify-between text-xs text-[#9F7A28]">
        <span>Loyalty Social Ultra Lounge — Confidential HR Document</span>
        <span>Date: ____________</span>
      </div>
      <button
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 bg-[#C9A24A] text-[#050505] px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[#F4D06F] transition print:hidden"
      >
        Print
      </button>
    </div>
  )
}
```

- [ ] **Step 2: Create `app/hr/layout.tsx`**

```tsx
// app/hr/layout.tsx
export default function HRRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

- [ ] **Step 3: Commit**

```bash
git add components/hr/ app/hr/layout.tsx
git commit -m "feat: add HR layout component and route shell"
```

---

## Task 13: HR Hub Index

**Files:**
- Create: `app/hr/page.tsx`

- [ ] **Step 1: Create hub**

```tsx
// app/hr/page.tsx
import Link from 'next/link'

const docs = [
  { slug: 'application', label: 'Employment Application',   icon: '📝', desc: 'Printable job application form' },
  { slug: 'onboarding',  label: 'New Hire Onboarding',      icon: '✅', desc: 'Day 1 through Day 30 checklist' },
  { slug: 'handbook',    label: 'Employee Handbook',        icon: '📖', desc: 'Policies, rights, and expectations' },
  { slug: 'policies',    label: 'Workplace Policies',       icon: '⚖️', desc: 'Attendance · Dress Code · Conduct' },
]

export default function HRHub() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6] px-6 py-14 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <p className="text-[#C9A24A] text-xs uppercase tracking-[0.4em] mb-2">Human Resources</p>
        <h1 className="text-5xl font-bold text-[#F4D06F] mb-3">Hiring Packet</h1>
        <p className="text-[#9F7A28] text-sm">Loyalty Social Ultra Lounge · Baltimore, MD</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {docs.map((d) => (
          <Link key={d.slug} href={`/hr/${d.slug}`}
            className="group flex items-center gap-4 bg-[#0B0B0B] border border-[#242424] hover:border-[#C9A24A] rounded-xl px-6 py-5 transition-all">
            <span className="text-3xl">{d.icon}</span>
            <div>
              <p className="text-[#F4D06F] font-semibold group-hover:text-white transition">{d.label}</p>
              <p className="text-[#9F7A28] text-xs">{d.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link href="/sop" className="text-[#C9A24A] text-sm underline underline-offset-4 hover:text-[#F4D06F]">
          → Staff SOPs
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/hr/page.tsx
git commit -m "feat: add HR hub index page"
```

---

## Task 14: Employment Application

**Files:**
- Create: `app/hr/application/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/hr/application/page.tsx
import { HRLayout } from '@/components/hr/HRLayout'

function Field({ label, wide }: { label: string; wide?: boolean }) {
  return (
    <div className={`mb-5 ${wide ? 'col-span-2' : ''}`}>
      <label className="block text-[#C9A24A] text-xs uppercase tracking-widest mb-1">{label}</label>
      <div className="border-b border-[#242424] py-2 print:border-black" />
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[#F4D06F] text-sm font-semibold uppercase tracking-widest mb-4 pb-1 border-b border-[#1A1A1A]">{title}</h2>
      <div className="grid grid-cols-2 gap-x-8">{children}</div>
    </div>
  )
}

export default function ApplicationPage() {
  return (
    <HRLayout title="Employment Application" subtitle="All positions · Confidential">
      <p className="text-[#9F7A28] text-xs mb-8 italic">
        Loyalty Social Ultra Lounge is an equal opportunity employer. All information is kept confidential and used only for hiring purposes.
      </p>

      <Section title="Personal Information">
        <Field label="Full Legal Name" wide />
        <Field label="Preferred Name" />
        <Field label="Phone Number" />
        <Field label="Email Address" wide />
        <Field label="Address (Street, City, State, ZIP)" wide />
        <Field label="Are you 21 or older?" />
        <Field label="Are you legally authorized to work in the US?" />
      </Section>

      <Section title="Position Applied For">
        <Field label="Position" />
        <Field label="Desired Start Date" />
        <Field label="Availability (Days/Hours)" wide />
        <Field label="Full-Time or Part-Time?" />
        <Field label="Referred By" />
      </Section>

      <Section title="Work Experience (Most Recent First)">
        <Field label="Employer 1 — Name" wide />
        <Field label="Job Title" />
        <Field label="Dates Employed" />
        <Field label="Reason for Leaving" wide />
        <Field label="Employer 2 — Name" wide />
        <Field label="Job Title" />
        <Field label="Dates Employed" />
        <Field label="Reason for Leaving" wide />
      </Section>

      <Section title="Certifications & Licenses">
        <Field label="TIPS / ServSafe Certified?" />
        <Field label="Cert. Expiration Date" />
        <Field label="Food Handler's Card?" />
        <Field label="Security License (if applicable)" />
      </Section>

      <Section title="Acknowledgment">
        <div className="col-span-2 text-[#9F7A28] text-xs mb-4">
          By signing below, I certify that all information provided is true and complete. I understand that falsification of any information is grounds for immediate dismissal.
        </div>
        <Field label="Signature" />
        <Field label="Date" />
      </Section>
    </HRLayout>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/hr/application/
git commit -m "feat: add printable Employment Application HR page"
```

---

## Task 15: New Hire Onboarding Checklist

**Files:**
- Create: `app/hr/onboarding/page.tsx`

- [ ] **Step 1: Create page using ChecklistPhase**

```tsx
// app/hr/onboarding/page.tsx
import { HRLayout } from '@/components/hr/HRLayout'
import { ChecklistPhase } from '@/components/sop/ChecklistPhase'

const phases = [
  {
    title: 'Day 1 — Welcome & Paperwork',
    items: [
      { text: 'Complete I-9 Employment Eligibility Verification', sub: ['Bring original documents (passport or ID + SS card)'] },
      { text: 'Complete W-4 tax withholding form' },
      { text: 'Sign and receive copy of Employee Handbook' },
      { text: 'Sign Workplace Policies acknowledgment' },
      { text: 'Uniform/dress code walkthrough with manager' },
      { text: 'Tour of venue — all areas including staff-only zones' },
      { text: 'Receive staff schedule and contact list' },
      { text: 'Set up in POS system (if applicable)' },
    ],
  },
  {
    title: 'Week 1 — Shadow & Train',
    items: [
      { text: 'Shadow assigned trainer for first 3 shifts' },
      { text: 'Complete department SOP review', sub: ['Read and initial your department SOP', 'Ask manager any questions before first solo shift'] },
      { text: 'Complete alcohol awareness training (TIPS or equivalent)' },
      { text: 'Review emergency procedures', sub: ['Fire exits, first aid kit locations, incident protocol'] },
      { text: 'POS training completed and signed off by manager' },
    ],
  },
  {
    title: 'Day 30 — 30-Day Check-In',
    items: [
      { text: '30-day performance review with manager' },
      { text: 'Any outstanding paperwork completed' },
      { text: 'Confirm schedule preferences and availability on file' },
      { text: 'Direct deposit setup confirmed (payroll)' },
    ],
  },
]

export default function OnboardingPage() {
  return (
    <HRLayout title="New Hire Onboarding" subtitle="Day 1 · Week 1 · 30-Day Review">
      <p className="text-[#9F7A28] text-xs mb-8 italic">
        Complete each item in order. Manager must initial next to Day 1 items. Employee initials all remaining phases.
      </p>
      {phases.map((phase, i) => (
        <ChecklistPhase key={i} phase={phase} index={i} />
      ))}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div>
          <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Employee Signature</p>
          <div className="border-b border-[#242424] py-2" />
        </div>
        <div>
          <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Manager Signature</p>
          <div className="border-b border-[#242424] py-2" />
        </div>
      </div>
    </HRLayout>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/hr/onboarding/
git commit -m "feat: add New Hire Onboarding checklist HR page"
```

---

## Task 16: Policies Page

**Files:**
- Create: `app/hr/policies/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/hr/policies/page.tsx
import { HRLayout } from '@/components/hr/HRLayout'

function Policy({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-[#F4D06F] text-sm font-semibold uppercase tracking-widest mb-3 pb-1 border-b border-[#1A1A1A]">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-[#F5F0E6]">
            <span className="text-[#C9A24A] shrink-0">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PoliciesPage() {
  return (
    <HRLayout title="Workplace Policies" subtitle="Attendance · Dress Code · Conduct · Zero Tolerance">
      <Policy title="Attendance & Punctuality" items={[
        'Arrive at least 15 minutes before your scheduled shift start time.',
        'Tardiness of more than 15 minutes without prior notice is considered a no-call and subject to disciplinary action.',
        'Three unexcused absences within 90 days may result in termination.',
        'Shift trades must be approved by management 24 hours in advance.',
        'Calling out sick: notify your manager at least 4 hours before your shift via phone call — text alone is not accepted.',
      ]} />

      <Policy title="Dress Code" items={[
        'All staff must wear all-black attire unless otherwise specified by management.',
        'Attire must be clean, pressed, and professional in appearance.',
        'Open-toe shoes are not permitted for bar or kitchen staff.',
        'Excessive jewelry that poses a safety hazard is not permitted.',
        'Hair must be secured during service for bar, server, and kitchen staff.',
        'Management must approve any deviation from dress code in advance.',
      ]} />

      <Policy title="Professional Conduct" items={[
        'All staff are expected to treat every guest and coworker with dignity and respect.',
        'Unprofessional behavior on the floor — including arguing with guests, cursing, or public conflict with coworkers — is grounds for immediate dismissal.',
        'Personal phone use is prohibited during active service. Phones must be kept out of sight.',
        'Socializing with guests beyond professional interaction is not permitted during shift.',
        'Loyalty Social operates as an upscale environment — your behavior is part of the brand.',
      ]} />

      <Policy title="Zero Tolerance" items={[
        'Theft of any kind — cash, product, or property — results in immediate termination and may result in criminal charges.',
        'Any form of harassment (sexual, racial, or otherwise) will result in immediate termination.',
        'Reporting to work under the influence of alcohol or drugs will result in immediate termination.',
        'Serving alcohol to minors will result in immediate termination and may result in personal legal liability.',
        'Fighting or physical altercations with guests or coworkers will result in immediate termination.',
      ]} />

      <Policy title="Social Media" items={[
        'Do not post interior photos or video of guests without explicit consent.',
        'Do not represent or speak on behalf of Loyalty Social Ultra Lounge on any public platform without authorization.',
        'Negative posts about the venue, management, or coworkers are grounds for disciplinary action.',
      ]} />

      <div className="mt-10 bg-[#0B0B0B] border border-[#242424] rounded-lg px-6 py-5">
        <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-3">Acknowledgment</p>
        <p className="text-[#9F7A28] text-xs mb-6">
          By signing below, I acknowledge that I have read, understand, and agree to comply with all Loyalty Social Ultra Lounge workplace policies. I understand that violations may result in disciplinary action up to and including termination.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Employee Signature</p>
            <div className="border-b border-[#242424] py-2" />
          </div>
          <div>
            <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Date</p>
            <div className="border-b border-[#242424] py-2" />
          </div>
        </div>
      </div>
    </HRLayout>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/hr/policies/
git commit -m "feat: add Workplace Policies HR page"
```

---

## Task 17: Employee Handbook Overview

**Files:**
- Create: `app/hr/handbook/page.tsx`

- [ ] **Step 1: Create page**

```tsx
// app/hr/handbook/page.tsx
import { HRLayout } from '@/components/hr/HRLayout'

function HandbookSection({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-7">
      <h2 className="text-[#F4D06F] text-sm font-semibold uppercase tracking-widest mb-2">{title}</h2>
      <p className="text-[#F5F0E6] text-sm leading-relaxed">{body}</p>
    </div>
  )
}

export default function HandbookPage() {
  return (
    <HRLayout title="Employee Handbook" subtitle="Overview · Rights · Expectations">
      <p className="text-[#9F7A28] text-xs italic mb-8">
        This is an overview of the Loyalty Social Ultra Lounge employee handbook. Full policy details are contained in the Workplace Policies document. Management reserves the right to update policies with 7 days written notice.
      </p>

      <HandbookSection title="Our Mission"
        body="Loyalty Social Ultra Lounge exists to provide an elevated, culturally rich nightlife experience for Baltimore's professional community. Every staff member is an ambassador of that mission. We hold ourselves to a higher standard — because our guests do too." />

      <HandbookSection title="Employment Classification"
        body="Staff may be employed as Full-Time (30+ hours/week), Part-Time (<30 hours/week), or Event Staff (per-event basis). Classification determines eligibility for benefits, if any are offered, and scheduling priority. Classification changes require written notice from management." />

      <HandbookSection title="Pay & Payroll"
        body="Payroll is processed bi-weekly. Tipped employees are responsible for accurate tip declaration per IRS guidelines. Direct deposit is strongly encouraged. Paycheck discrepancies must be reported to management within 5 business days of receipt." />

      <HandbookSection title="Scheduling"
        body="Schedules are posted weekly by management. It is the employee's responsibility to check the schedule and arrive on time. Schedule change requests must be submitted at least 48 hours in advance. Loyalty Social reserves the right to adjust scheduling based on business needs." />

      <HandbookSection title="Performance Standards"
        body="All staff are reviewed informally on an ongoing basis and formally at 30 days (new hires), 90 days, and annually. Performance reviews address professionalism, guest feedback, punctuality, and adherence to SOPs. Corrective action is documented and kept in the employee's file." />

      <HandbookSection title="Grievance Procedure"
        body="Any employee who has a workplace concern is encouraged to raise it with their direct manager. If the concern involves the manager, escalate to ownership. All concerns are handled confidentially. Retaliation against any employee for raising a legitimate concern is prohibited." />

      <HandbookSection title="Separation"
        body="Loyalty Social is an at-will employer. Employment may be terminated at any time by either party. Employees are encouraged to provide at least two weeks' written notice. Final pay is issued on the next regular pay date following separation, or sooner as required by Maryland law." />

      <div className="mt-10 bg-[#0B0B0B] border border-[#242424] rounded-lg px-6 py-5">
        <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-3">Receipt of Handbook</p>
        <p className="text-[#9F7A28] text-xs mb-6">
          I acknowledge receipt of the Loyalty Social Ultra Lounge Employee Handbook. I understand it is my responsibility to read and comply with its contents.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Employee Signature</p>
            <div className="border-b border-[#242424] py-2" />
          </div>
          <div>
            <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Date</p>
            <div className="border-b border-[#242424] py-2" />
          </div>
        </div>
      </div>
    </HRLayout>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/hr/handbook/
git commit -m "feat: add Employee Handbook overview HR page"
```

---

## Self-Review

### Spec Coverage

| Requirement | Covered? | Task |
|-------------|----------|------|
| Bartender opening checklist (all 5 phases) | ✅ | Task 5 |
| Bartender closing procedures | ✅ | Task 5 |
| Bartender service standards | ✅ | Task 5 |
| Server/Bottle Service SOP | ✅ | Task 6 |
| Host/Hostess SOP | ✅ | Task 7 |
| Security/Door SOP | ✅ | Task 8 |
| VIP Concierge SOP | ✅ | Task 9 |
| Kitchen SOP | ✅ | Task 10 |
| Management SOP | ✅ | Task 11 |
| HR Employment Application | ✅ | Task 14 |
| HR New Hire Onboarding | ✅ | Task 15 |
| HR Handbook | ✅ | Task 17 |
| HR Workplace Policies | ✅ | Task 16 |
| Brand-matched visual design (black/gold) | ✅ | Tasks 1, 2 |
| Print-friendly output | ✅ | Task 2 |
| SOP hub index | ✅ | Task 4 |
| HR hub index | ✅ | Task 13 |

### Placeholder Scan — Clean ✅
No TBD, TODO, or "implement later" language present.

### Type Consistency — Clean ✅
`ChecklistPhase` and `SOPLayout` both accept `{ title, timing?, items: { text, sub? }[] }` — used identically in all 7 SOP pages and the onboarding HR page.
