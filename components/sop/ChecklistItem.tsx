export function ChecklistItem({ text, sub }: { text: string; sub?: string[] }) {
  return (
    <li className="flex gap-3 px-4 py-3 group hover:bg-[#0F0F0F] transition-colors print:hover:bg-transparent">
      {/* Custom checkbox */}
      <span className="mt-0.5 w-5 h-5 shrink-0 rounded border-2 border-[#C9A24A]/60 group-hover:border-[#C9A24A] bg-transparent transition-colors print:border-black" />

      <div className="min-w-0">
        <p className="text-[#E8E0CC] text-sm font-medium leading-snug print:text-black">
          {text}
        </p>
        {sub && (
          <ul className="mt-1.5 space-y-1 pl-1">
            {sub.map((s, i) => (
              <li
                key={i}
                className="flex gap-1.5 text-[#8A7040] text-xs leading-relaxed print:text-gray-500"
              >
                <span className="text-[#C9A24A]/50 mt-0.5 print:text-gray-400">›</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}
