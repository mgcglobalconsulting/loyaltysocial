import Image from 'next/image'
import Link from 'next/link'

const docs = [
  {
    slug: 'application',
    label: 'Employment Application',
    icon: '📝',
    desc: 'Printable job application form',
    image: '/loyal-assets/loyalty-social-into.png',
    tagline: 'Apply to Join the Team',
    accent: 'Complete & Submit',
  },
  {
    slug: 'onboarding',
    label: 'New Hire Onboarding',
    icon: '✅',
    desc: 'Day 1 through Day 30 checklist',
    image: '/loyal-assets/three-three.png',
    tagline: 'Day 1 · Week 1 · Day 30',
    accent: 'Welcome Checklist',
  },
  {
    slug: 'handbook',
    label: 'Employee Handbook',
    icon: '📖',
    desc: 'Policies, rights, and expectations',
    image: '/loyal-assets/loyaltysocial.jpg',
    tagline: 'Know Your Rights',
    accent: 'Full Handbook',
  },
  {
    slug: 'policies',
    label: 'Workplace Policies',
    icon: '⚖️',
    desc: 'Attendance · Dress Code · Conduct',
    image: '/loyal-assets/saturday-housewerk.jpg',
    tagline: 'Standards & Expectations',
    accent: 'Policy Doc',
  },
]

export default function HRHub() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6]">

      {/* ─── HERO ─── */}
      <div className="relative h-[42vh] min-h-[280px] overflow-hidden">
        <Image
          src="/loyal-assets/mayninth-nookie-leslie.png"
          alt="Loyalty Social HR"
          fill
          className="object-cover object-top scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,74,0.07)_0%,transparent_65%)]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-[#C9A24A]/60 shadow-2xl shadow-[#C9A24A]/20">
            <Image src="/loyal-assets/new-loyalty.PNG" alt="Logo" fill className="object-cover" />
          </div>
          <p className="text-[#C9A24A] text-[10px] uppercase tracking-[0.6em] mb-3">
            Human Resources
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
            Hiring Packet
          </h1>
          <p className="text-[#D4A93A] text-sm mt-3 uppercase tracking-[0.35em] font-medium">
            Loyalty Lounge Md · Baltimore, MD
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* ─── CONTENT ─── */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent" />
          <span className="text-[#C9A24A] text-[10px] uppercase tracking-[0.5em] whitespace-nowrap">
            HR Documents
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/50 to-transparent" />
        </div>

        {/* 2-column grid for HR docs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {docs.map((d) => (
            <Link
              key={d.slug}
              href={`/hr/${d.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[#1A1A1A] hover:border-[#C9A24A]/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C9A24A]/10"
            >
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src={d.image}
                  alt=""
                  fill
                  className="object-cover object-center opacity-12 group-hover:opacity-22 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#060606]/95 via-[#060606]/85 to-[#060606]/70" />
              </div>

              {/* Top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative px-6 py-7">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{d.icon}</span>
                  <span className="text-[10px] text-[#C9A24A]/50 group-hover:text-[#C9A24A] uppercase tracking-[0.3em] border border-[#C9A24A]/20 group-hover:border-[#C9A24A]/60 px-2 py-0.5 rounded transition-all duration-200">
                    {d.accent}
                  </span>
                </div>

                <p className="text-[#F4D06F] font-bold text-xl group-hover:text-white transition-colors duration-200 mb-1.5">
                  {d.label}
                </p>
                <p className="text-[#7A6030] text-xs group-hover:text-[#C9A24A]/70 transition-colors duration-200 mb-4">
                  {d.desc}
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-px w-5 bg-[#C9A24A]/40 group-hover:w-8 group-hover:bg-[#C9A24A] transition-all duration-300" />
                  <span className="text-[#6A5020] group-hover:text-[#C9A24A]/70 text-[10px] uppercase tracking-[0.3em] transition-colors duration-200">
                    {d.tagline}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom venue strip */}
        <div className="relative overflow-hidden rounded-2xl border border-[#1A1A1A] h-32">
          <Image
            src="/loyal-assets/people-drinks-times.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />
          <div className="absolute inset-0 flex items-center justify-between px-8">
            <div>
              <p className="text-[#C9A24A] text-xs uppercase tracking-[0.4em] mb-1">Also Available</p>
              <p className="text-white font-semibold">Staff SOPs</p>
              <p className="text-[#555] text-xs mt-0.5">7 Departments · Fully Documented</p>
            </div>
            <Link
              href="/sop"
              className="flex items-center gap-2 bg-[#C9A24A] hover:bg-[#F4D06F] text-[#050505] px-5 py-2.5 rounded-full text-sm font-bold transition-all"
            >
              View SOPs →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
