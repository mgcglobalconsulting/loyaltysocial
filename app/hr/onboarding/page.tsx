import { HRLayout } from '@/components/hr/HRLayout'
import { ChecklistPhase } from '@/components/sop/ChecklistPhase'

const phases = [
  {
    title: 'Day 1 — Welcome & Paperwork',
    items: [
      { text: 'Complete I-9 Employment Eligibility Verification', sub: ['Bring original documents (passport or ID + SS card)'] },
      { text: 'Complete W-4 tax withholding form' },
      { text: 'Sign and receive copy of Employee Handbook' },
      { text: 'Sign Workplace Policies acknowledgment' },
      { text: 'Uniform/dress code walkthrough with manager' },
      { text: 'Tour of venue — all areas including staff-only zones' },
      { text: 'Receive staff schedule and contact list' },
      { text: 'Set up in POS system (if applicable)' },
    ],
  },
  {
    title: 'Week 1 — Shadow & Train',
    items: [
      { text: 'Shadow assigned trainer for first 3 shifts' },
      { text: 'Complete department SOP review', sub: ['Read and initial your department SOP', 'Ask manager any questions before first solo shift'] },
      { text: 'Complete alcohol awareness training (TIPS or equivalent)' },
      { text: 'Review emergency procedures', sub: ['Fire exits, first aid kit locations, incident protocol'] },
      { text: 'POS training completed and signed off by manager' },
    ],
  },
  {
    title: 'Day 30 — 30-Day Check-In',
    items: [
      { text: '30-day performance review with manager' },
      { text: 'Any outstanding paperwork completed' },
      { text: 'Confirm schedule preferences and availability on file' },
      { text: 'Direct deposit setup confirmed (payroll)' },
    ],
  },
]

export default function OnboardingPage() {
  return (
    <HRLayout title="New Hire Onboarding" subtitle="Day 1 · Week 1 · 30-Day Review">
      <p className="text-[#9F7A28] text-xs mb-8 italic">
        Complete each item in order. Manager must initial next to Day 1 items. Employee initials all remaining phases.
      </p>
      {phases.map((phase, i) => (
        <ChecklistPhase key={i} phase={phase} index={i} />
      ))}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div>
          <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Employee Signature</p>
          <div className="border-b border-[#242424] py-2" />
        </div>
        <div>
          <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-1">Manager Signature</p>
          <div className="border-b border-[#242424] py-2" />
        </div>
      </div>
    </HRLayout>
  )
}
