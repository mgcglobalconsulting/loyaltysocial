'use client'

import Image from 'next/image'
import Link from 'next/link'

interface HRLayoutProps {
  title: string
  subtitle: string
  children: React.ReactNode
  heroImage?: string
}

const HR_IMAGES: Record<string, string> = {
  'Employment Application': '/loyal-assets/loyalty-social-into.png',
  'New Hire Onboarding': '/loyal-assets/three-three.png',
  'Employee Handbook': '/loyal-assets/loyaltysocial.jpg',
  'Workplace Policies': '/loyal-assets/saturday-housewerk.jpg',
}

export function HRLayout({ title, subtitle, children, heroImage }: HRLayoutProps) {
  const img = heroImage ?? HR_IMAGES[title] ?? '/loyal-assets/loyalty-social-into.png'

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6] print:bg-white print:text-black">

      {/* ─── HERO (screen only) ─── */}
      <div className="relative h-64 sm:h-72 overflow-hidden print:hidden">
        <Image src={img} alt={title} fill className="object-cover object-center scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24A]/8 via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-6">
          <p className="text-[#C9A24A] text-[10px] uppercase tracking-[0.55em] mb-2">
            Loyalty Social Ultra Lounge · Human Resources
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-xl">
            {title}
          </h1>
          <p className="text-[#D4A93A] text-xs uppercase tracking-[0.35em] mt-2 font-medium">
            {subtitle}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* ─── PRINT HEADER ─── */}
      <div className="hidden print:flex items-start justify-between border-b-2 border-[#C9A24A] pb-4 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-0.5">
            Loyalty Social Ultra Lounge · Human Resources
          </p>
          <h1 className="text-3xl font-black text-black">{title}</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-[#C9A24A] tracking-tight leading-none">LS</div>
          <p className="text-[10px] text-gray-400 mt-0.5">HR Document</p>
        </div>
      </div>

      {/* ─── BODY ─── */}
      <div className="max-w-3xl mx-auto px-6 pb-28 print:px-0 print:pb-0">

        {/* Gold divider (screen) */}
        <div className="flex items-center gap-4 mb-8 print:hidden">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/60 to-transparent" />
          <span className="text-[#C9A24A] text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">
            Human Resources
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/60 to-transparent" />
        </div>

        {children}

        {/* Footer */}
        <div className="mt-14 print:mt-8 pt-6 border-t border-[#1C1C1C] print:border-gray-300">
          <div className="flex justify-between text-[10px] text-[#383838] print:text-gray-400">
            <span>Loyalty Social Ultra Lounge · Baltimore, MD · Confidential HR Document</span>
            <span>Internal Use Only</span>
          </div>
        </div>
      </div>

      {/* ─── FIXED BUTTONS (screen only) ─── */}
      <div className="fixed bottom-6 right-6 flex gap-3 print:hidden">
        <Link
          href="/hr"
          className="flex items-center gap-1.5 bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#C9A24A] text-[#C9A24A] hover:text-[#F4D06F] px-4 py-2.5 rounded-full text-sm font-semibold transition-all"
        >
          ← HR Hub
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 bg-[#C9A24A] hover:bg-[#F4D06F] text-[#050505] px-5 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-[#C9A24A]/20 transition-all"
        >
          🖨 Print
        </button>
      </div>
    </div>
  )
}
