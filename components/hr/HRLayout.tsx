'use client'

export function HRLayout({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6] px-6 py-10 max-w-3xl mx-auto print:bg-white print:text-black">
      <div className="mb-10 pb-6 border-b border-[#C9A24A]">
        <p className="text-[#C9A24A] text-xs uppercase tracking-[0.3em] mb-1">Loyalty Social Ultra Lounge · Human Resources</p>
        <h1 className="text-4xl font-bold text-[#F4D06F] mb-1">{title}</h1>
        <p className="text-[#9F7A28] text-sm uppercase tracking-widest">{subtitle}</p>
      </div>
      {children}
      <div className="mt-12 pt-6 border-t border-[#242424] flex justify-between text-xs text-[#9F7A28]">
        <span>Loyalty Social Ultra Lounge — Confidential HR Document</span>
        <span>Date: ____________</span>
      </div>
      <button
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 bg-[#C9A24A] text-[#050505] px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[#F4D06F] transition print:hidden"
      >
        Print
      </button>
    </div>
  )
}
