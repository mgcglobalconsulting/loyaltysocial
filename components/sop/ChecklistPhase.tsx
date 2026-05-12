import { ChecklistItem } from './ChecklistItem'

interface Phase {
  title: string
  timing?: string
  items: { text: string; sub?: string[] }[]
}

const PHASE_COLORS = [
  'from-[#C9A24A] to-[#F4D06F]',
  'from-[#D4B04A] to-[#E8C96A]',
  'from-[#B8922A] to-[#D4A93A]',
  'from-[#C9A24A] to-[#F4D06F]',
  'from-[#D4B04A] to-[#E8C96A]',
  'from-[#B8922A] to-[#D4A93A]',
  'from-[#C9A24A] to-[#F4D06F]',
]

export function ChecklistPhase({ phase, index }: { phase: Phase; index: number }) {
  const gradClass = PHASE_COLORS[index % PHASE_COLORS.length]

  return (
    <section className="mb-8 break-inside-avoid print:mb-6">
      {/* Phase header */}
      <div className="flex items-start gap-4 mb-3">
        {/* Numbered circle */}
        <div className={`flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br ${gradClass} text-[#050505] text-sm font-black shrink-0 shadow-lg shadow-[#C9A24A]/20 print:shadow-none print:border print:border-[#C9A24A] print:bg-white print:text-black`}>
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="text-[#F4D06F] text-base font-bold uppercase tracking-wider print:text-black">
              {phase.title}
            </h2>
            {phase.timing && (
              <span className="text-[#C9A24A] text-[10px] uppercase tracking-[0.3em] bg-[#1A1400] px-2 py-0.5 rounded border border-[#C9A24A]/30 shrink-0 print:bg-transparent print:border-gray-300 print:text-gray-500">
                {phase.timing}
              </span>
            )}
          </div>
          {/* Gold underline */}
          <div className={`mt-1.5 h-px w-full bg-gradient-to-r ${gradClass} opacity-40 print:opacity-100 print:bg-gray-300`} />
        </div>
      </div>

      {/* Items card */}
      <div className="ml-[52px] bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl overflow-hidden divide-y divide-[#161616] print:bg-white print:border-gray-200 print:divide-gray-100 print:ml-0 print:rounded-none">
        {phase.items.map((item, i) => (
          <ChecklistItem key={i} text={item.text} sub={item.sub} />
        ))}
      </div>
    </section>
  )
}
