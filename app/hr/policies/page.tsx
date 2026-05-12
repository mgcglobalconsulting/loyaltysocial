import { HRLayout } from '@/components/hr/HRLayout'

function Policy({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-[#F4D06F] text-sm font-semibold uppercase tracking-widest mb-3 pb-1 border-b border-[#1A1A1A]">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-[#F5F0E6]">
            <span className="text-[#C9A24A] shrink-0">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PoliciesPage() {
  return (
    <HRLayout title="Workplace Policies" subtitle="Attendance · Dress Code · Conduct · Zero Tolerance">
      <Policy title="Attendance & Punctuality" items={[
        'Arrive at least 15 minutes before your scheduled shift start time.',
        'Tardiness of more than 15 minutes without prior notice is considered a no-call and subject to disciplinary action.',
        'Three unexcused absences within 90 days may result in termination.',
        'Shift trades must be approved by management 24 hours in advance.',
        'Calling out sick: notify your manager at least 4 hours before your shift via phone call — text alone is not accepted.',
      ]} />

      <Policy title="Dress Code" items={[
        'All staff must wear all-black attire unless otherwise specified by management.',
        'Attire must be clean, pressed, and professional in appearance.',
        'Open-toe shoes are not permitted for bar or kitchen staff.',
        'Excessive jewelry that poses a safety hazard is not permitted.',
        'Hair must be secured during service for bar, server, and kitchen staff.',
        'Management must approve any deviation from dress code in advance.',
      ]} />

      <Policy title="Professional Conduct" items={[
        'All staff are expected to treat every guest and coworker with dignity and respect.',
        'Unprofessional behavior on the floor — including arguing with guests, cursing, or public conflict with coworkers — is grounds for immediate dismissal.',
        'Personal phone use is prohibited during active service. Phones must be kept out of sight.',
        'Socializing with guests beyond professional interaction is not permitted during shift.',
        'Loyalty Social operates as an upscale environment — your behavior is part of the brand.',
      ]} />

      <Policy title="Zero Tolerance" items={[
        'Theft of any kind — cash, product, or property — results in immediate termination and may result in criminal charges.',
        'Any form of harassment (sexual, racial, or otherwise) will result in immediate termination.',
        'Reporting to work under the influence of alcohol or drugs will result in immediate termination.',
        'Serving alcohol to minors will result in immediate termination and may result in personal legal liability.',
        'Fighting or physical altercations with guests or coworkers will result in immediate termination.',
      ]} />

      <Policy title="Social Media" items={[
        'Do not post interior photos or video of guests without explicit consent.',
        'Do not represent or speak on behalf of Loyalty Lounge Md on any public platform without authorization.',
        'Negative posts about the venue, management, or coworkers are grounds for disciplinary action.',
      ]} />

      <div className="mt-10 bg-[#0B0B0B] border border-[#242424] rounded-lg px-6 py-5">
        <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-3">Acknowledgment</p>
        <p className="text-[#9F7A28] text-xs mb-6">
          By signing below, I acknowledge that I have read, understand, and agree to comply with all Loyalty Lounge Md workplace policies. I understand that violations may result in disciplinary action up to and including termination.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Employee Signature</p>
            <div className="border-b border-[#242424] py-2" />
          </div>
          <div>
            <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Date</p>
            <div className="border-b border-[#242424] py-2" />
          </div>
        </div>
      </div>
    </HRLayout>
  )
}
