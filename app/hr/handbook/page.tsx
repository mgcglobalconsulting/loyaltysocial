import { HRLayout } from '@/components/hr/HRLayout'

function HandbookSection({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-7">
      <h2 className="text-[#F4D06F] text-sm font-semibold uppercase tracking-widest mb-2">{title}</h2>
      <p className="text-[#F5F0E6] text-sm leading-relaxed">{body}</p>
    </div>
  )
}

export default function HandbookPage() {
  return (
    <HRLayout title="Employee Handbook" subtitle="Overview · Rights · Expectations">
      <p className="text-[#9F7A28] text-xs italic mb-8">
        This is an overview of the Loyalty Lounge Md employee handbook. Full policy details are contained in the Workplace Policies document. Management reserves the right to update policies with 7 days written notice.
      </p>

      <HandbookSection title="Our Mission"
        body="Loyalty Lounge Md exists to provide an elevated, culturally rich nightlife experience for Baltimore's professional community. Every staff member is an ambassador of that mission. We hold ourselves to a higher standard — because our guests do too." />

      <HandbookSection title="Employment Classification"
        body="Staff may be employed as Full-Time (30+ hours/week), Part-Time (<30 hours/week), or Event Staff (per-event basis). Classification determines eligibility for benefits, if any are offered, and scheduling priority. Classification changes require written notice from management." />

      <HandbookSection title="Pay & Payroll"
        body="Payroll is processed bi-weekly. Tipped employees are responsible for accurate tip declaration per IRS guidelines. Direct deposit is strongly encouraged. Paycheck discrepancies must be reported to management within 5 business days of receipt." />

      <HandbookSection title="Scheduling"
        body="Schedules are posted weekly by management. It is the employee's responsibility to check the schedule and arrive on time. Schedule change requests must be submitted at least 48 hours in advance. Loyalty Social reserves the right to adjust scheduling based on business needs." />

      <HandbookSection title="Performance Standards"
        body="All staff are reviewed informally on an ongoing basis and formally at 30 days (new hires), 90 days, and annually. Performance reviews address professionalism, guest feedback, punctuality, and adherence to SOPs. Corrective action is documented and kept in the employee's file." />

      <HandbookSection title="Grievance Procedure"
        body="Any employee who has a workplace concern is encouraged to raise it with their direct manager. If the concern involves the manager, escalate to ownership. All concerns are handled confidentially. Retaliation against any employee for raising a legitimate concern is prohibited." />

      <HandbookSection title="Separation"
        body="Loyalty Social is an at-will employer. Employment may be terminated at any time by either party. Employees are encouraged to provide at least two weeks' written notice. Final pay is issued on the next regular pay date following separation, or sooner as required by Maryland law." />

      <div className="mt-10 bg-[#0B0B0B] border border-[#242424] rounded-lg px-6 py-5">
        <p className="text-[#C9A24A] text-xs uppercase tracking-widest mb-3">Receipt of Handbook</p>
        <p className="text-[#9F7A28] text-xs mb-6">
          I acknowledge receipt of the Loyalty Lounge Md Employee Handbook. I understand it is my responsibility to read and comply with its contents.
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
