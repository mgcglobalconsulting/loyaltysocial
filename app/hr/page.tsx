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
