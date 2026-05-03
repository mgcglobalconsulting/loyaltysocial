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
