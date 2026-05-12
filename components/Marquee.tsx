interface MarqueeProps {
  label: string
  items: string[]
}

export function Marquee({ label, items }: MarqueeProps) {
  // Duplicate items so the CSS animation loops seamlessly
  const doubled = [...items, ...items]

  return (
    <div className="marquee-band" aria-hidden="true">
      <span className="marquee-label-tag">{label}</span>
      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
