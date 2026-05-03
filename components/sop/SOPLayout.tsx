'use client'

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
