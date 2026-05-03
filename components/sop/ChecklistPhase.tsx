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
