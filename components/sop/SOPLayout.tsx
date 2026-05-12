'use client'

import Image from 'next/image'
import Link from 'next/link'
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

const DEPT_ICONS: Record<string, string> = {
  'Bartender': '🍸',
  'Server / Bottle Svc': '🥂',
  'Host / Hostess': '🚪',
  'Security': '🛡️',
  'VIP Concierge': '👑',
  'Kitchen': '🍽️',
  'Management': '📋',
}

const DEPT_TAGLINES: Record<string, string> = {
  'Bartender': 'Craft Every Pour. Own the Bar.',
  'Server / Bottle Svc': 'Elevate Every Table.',
  'Host / Hostess': 'First Impression. Last Memory.',
  'Security': 'Protect the Experience.',
  'VIP Concierge': 'White Glove. Every Time.',
  'Kitchen': 'Plate with Pride.',
  'Management': 'Lead the Shift. Set the Standard.',
}

export function SOPLayout({ department, role, objective, phases }: SOPLayoutProps) {
  const icon = DEPT_ICONS[department] ?? '⭐'
  const tagline = DEPT_TAGLINES[department] ?? 'Excellence in Every Shift.'

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6] print:bg-white print:text-black">

      {/* ─── LOGO HEADER (screen only) ─── */}
      <header className="print:hidden border-b border-[#C9A24A]/20 bg-[#050505]">
        {/* Top gold rule */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />

        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#C9A24A]/50 shadow-[0_0_40px_rgba(201,162,74,0.2)]">
            <Image
              src="/loyal-assets/new-loyalty.PNG"
              alt="Loyalty Social"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Venue label */}
          <p className="text-[#C9A24A] text-[10px] uppercase tracking-[0.55em] -mt-2">
            Loyalty Social Ultra Lounge · Staff SOP
          </p>

          {/* Department name */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {department}
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-[#9F7A28] text-xs uppercase tracking-[0.4em]">{tagline}</p>

          {/* Bottom ornament */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A24A]/60" />
            <div className="w-1.5 h-1.5 bg-[#C9A24A] rotate-45" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A24A]/60" />
          </div>
        </div>
      </header>

      {/* ─── PRINT HEADER (print only) ─── */}
      <div className="hidden print:flex items-start justify-between border-b-2 border-[#C9A24A] pb-4 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-0.5">
            Loyalty Social Ultra Lounge · Internal SOP
          </p>
          <h1 className="text-3xl font-black text-black">{department}</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{role}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-[#C9A24A] tracking-tight leading-none">LS</div>
          <p className="text-[10px] text-gray-400 mt-0.5">Staff Operations</p>
        </div>
      </div>

      {/* ─── BODY ─── */}
      <div className="max-w-3xl mx-auto px-6 pb-28 print:px-0 print:pb-0">

        {/* Role tag + Objective */}
        <div className="mb-8 print:mb-5">
          <p className="text-[#9F7A28] text-[11px] uppercase tracking-[0.35em] mb-3 print:text-gray-500">
            {role}
          </p>
          <div className="border-l-4 border-[#C9A24A] pl-5 py-3 bg-[#0D0D0D] rounded-r-xl print:bg-gray-50 print:border-gray-700">
            <p className="text-[#F0EAD6] text-sm leading-relaxed print:text-black">
              <span className="text-[#C9A24A] font-bold uppercase text-[11px] tracking-widest mr-2 print:text-black">
                Objective
              </span>
              {objective}
            </p>
          </div>
        </div>

        {/* Gold divider (screen) */}
        <div className="flex items-center gap-4 mb-10 print:hidden">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/60 to-transparent" />
          <span className="text-[#C9A24A] text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">
            Standard Operating Procedure
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24A]/60 to-transparent" />
        </div>

        {/* Phases */}
        {phases.map((phase, i) => (
          <ChecklistPhase key={i} phase={phase} index={i} />
        ))}

        {/* ─── SIGNATURE BLOCK ─── */}
        <div className="mt-14 print:mt-8 pt-6 border-t border-[#1C1C1C] print:border-gray-300">
          <p className="text-[#C9A24A] text-[10px] uppercase tracking-[0.4em] mb-5 print:text-gray-500">
            Acknowledgment
          </p>
          <div className="grid grid-cols-3 gap-6 mb-6">
            {['Staff Signature', 'Printed Name', 'Date'].map((label) => (
              <div key={label}>
                <p className="text-[#555] text-[10px] uppercase tracking-widest mb-3 print:text-gray-400">
                  {label}
                </p>
                <div className="border-b border-[#2C2C2C] print:border-gray-400 py-1" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {['Manager Signature', 'Manager Initials'].map((label) => (
              <div key={label}>
                <p className="text-[#555] text-[10px] uppercase tracking-widest mb-3 print:text-gray-400">
                  {label}
                </p>
                <div className="border-b border-[#2C2C2C] print:border-gray-400 py-1" />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-[#383838] print:text-gray-400">
            <span>Loyalty Social Ultra Lounge · Baltimore, MD · Internal Use Only</span>
            <span>Confidential SOP Document</span>
          </div>
        </div>
      </div>

      {/* ─── FIXED BUTTONS (screen only) ─── */}
      <div className="fixed bottom-6 right-6 flex gap-3 print:hidden">
        <Link
          href="/sop"
          className="flex items-center gap-1.5 bg-[#0D0D0D] border border-[#2A2A2A] hover:border-[#C9A24A] text-[#C9A24A] hover:text-[#F4D06F] px-4 py-2.5 rounded-full text-sm font-semibold transition-all"
        >
          ← All SOPs
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 bg-[#C9A24A] hover:bg-[#F4D06F] text-[#050505] px-5 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-[#C9A24A]/20 transition-all"
        >
          🖨 Print SOP
        </button>
      </div>
    </div>
  )
}
