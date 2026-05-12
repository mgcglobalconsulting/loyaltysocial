import Link from 'next/link'
import Image from 'next/image'

const departments = [
  {
    slug: 'bartender',
    label: 'Bartender',
    icon: '🍸',
    desc: 'Opening · Closing · Service Standards',
    image: '/loyal-assets/people-drinks-times.jpg',
    tagline: 'Own the Bar',
  },
  {
    slug: 'server',
    label: 'Server / Bottle Svc',
    icon: '🥂',
    desc: 'Table Service · Upsell · Checkout',
    image: '/loyal-assets/loyaltysocial.jpg',
    tagline: 'Elevate Every Table',
  },
  {
    slug: 'host',
    label: 'Host / Hostess',
    icon: '🚪',
    desc: 'Door · Seating · Reservations',
    image: '/loyal-assets/thursday-temptation.jpg',
    tagline: 'First Impression',
  },
  {
    slug: 'security',
    label: 'Security',
    icon: '🛡️',
    desc: 'ID Check · Crowd · Incident Protocol',
    image: '/loyal-assets/saturday-housewerk.jpg',
    tagline: 'Protect the Experience',
  },
  {
    slug: 'vip',
    label: 'VIP Concierge',
    icon: '👑',
    desc: 'Reservations · Bottle Setup · Guest Exp.',
    image: '/loyal-assets/cigar-wall.jpg',
    tagline: 'White Glove Every Time',
  },
  {
    slug: 'kitchen',
    label: 'Kitchen',
    icon: '🍽️',
    desc: 'Prep · Plating · Food Safety',
    image: '/loyal-assets/jerk-chicken.jpeg',
    tagline: 'Plate with Pride',
  },
  {
    slug: 'management',
    label: 'Management',
    icon: '📋',
    desc: 'Shift Open · Close · Staff Coordination',
    image: '/loyal-assets/friday-titanflyer.JPG',
    tagline: 'Lead the Shift',
  },
]

export default function SOPHub() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6]">

      {/* ─── LOGO HEADER ─── */}
      <header className="border-b border-[#C9A24A]/20">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-5">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#C9A24A]/50 shadow-[0_0_40px_rgba(201,162,74,0.2)]">
            <Image src="/loyal-assets/new-loyalty.PNG" alt="Loyalty Social Logo" fill className="object-cover" priority />
          </div>
          <p className="text-[#C9A24A] text-[10px] uppercase tracking-[0.6em]">Internal Operations</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">Staff SOPs</h1>
          <p className="text-[#9F7A28] text-xs uppercase tracking-[0.4em]">
            Loyalty Lounge Md · Baltimore, MD
          </p>
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A24A]/60" />
            <div className="w-1.5 h-1.5 bg-[#C9A24A] rotate-45" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A24A]/60" />
          </div>
        </div>
      </header>

      {/* ─── CONTENT ─── */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent" />
          <span className="text-[#C9A24A] text-[10px] uppercase tracking-[0.5em] whitespace-nowrap">
            Select Department
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent" />
        </div>

        {/* Department grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((d) => (
            <Link
              key={d.slug}
              href={`/sop/${d.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[#1A1A1A] hover:border-[#C9A24A]/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C9A24A]/10"
            >
              {/* Card background image */}
              <div className="absolute inset-0">
                <Image
                  src={d.image}
                  alt=""
                  fill
                  className="object-cover object-center opacity-15 group-hover:opacity-25 transition-opacity duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]/60" />
              </div>

              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card content */}
              <div className="relative px-5 py-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl drop-shadow-lg">{d.icon}</span>
                  <span className="text-[#C9A24A]/40 group-hover:text-[#C9A24A] text-lg transition-colors duration-300">→</span>
                </div>
                <p className="text-[#F4D06F] font-bold text-xl group-hover:text-white transition-colors duration-200 mb-1">
                  {d.label}
                </p>
                <p className="text-[#7A6030] text-xs group-hover:text-[#C9A24A]/70 transition-colors duration-200 mb-3">
                  {d.desc}
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="h-px w-6 bg-[#C9A24A]/40 group-hover:w-10 group-hover:bg-[#C9A24A] transition-all duration-300" />
                  <span className="text-[#C9A24A]/60 group-hover:text-[#C9A24A] text-[10px] uppercase tracking-[0.3em] transition-colors duration-200">
                    {d.tagline}
                  </span>
                </div>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* HR link */}
        <div className="mt-12 pt-8 border-t border-[#111]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#C9A24A] text-xs uppercase tracking-[0.35em] mb-1">Also Available</p>
              <p className="text-[#F5F0E6] font-semibold">HR Hiring Packet</p>
              <p className="text-[#555] text-xs mt-0.5">Employment Application · Onboarding · Handbook · Policies</p>
            </div>
            <Link
              href="/hr"
              className="flex items-center gap-2 bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#C9A24A] text-[#C9A24A] hover:text-[#F4D06F] px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
            >
              HR Hub →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
