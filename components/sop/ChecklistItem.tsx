export function ChecklistItem({ text, sub }: { text: string; sub?: string[] }) {
  return (
    <li className="flex gap-3 py-2 border-b border-[#242424] last:border-0">
      <span className="mt-0.5 w-5 h-5 shrink-0 rounded border-2 border-[#C9A24A] bg-transparent print:border-black" />
      <div>
        <p className="text-[#F5F0E6] text-sm font-medium">{text}</p>
        {sub && (
          <ul className="mt-1 space-y-0.5 pl-3">
            {sub.map((s, i) => (
              <li key={i} className="text-[#9F7A28] text-xs before:content-['•'] before:mr-1">{s}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}
