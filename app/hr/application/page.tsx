import { HRLayout } from '@/components/hr/HRLayout'

function Field({ label, wide }: { label: string; wide?: boolean }) {
  return (
    <div className={`mb-5 ${wide ? 'col-span-2' : ''}`}>
      <label className="block text-[#C9A24A] text-xs uppercase tracking-widest mb-1">{label}</label>
      <div className="border-b border-[#242424] py-2 print:border-black" />
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[#F4D06F] text-sm font-semibold uppercase tracking-widest mb-4 pb-1 border-b border-[#1A1A1A]">{title}</h2>
      <div className="grid grid-cols-2 gap-x-8">{children}</div>
    </div>
  )
}

export default function ApplicationPage() {
  return (
    <HRLayout title="Employment Application" subtitle="All positions · Confidential">
      <p className="text-[#9F7A28] text-xs mb-8 italic">
        Loyalty Lounge Md is an equal opportunity employer. All information is kept confidential and used only for hiring purposes.
      </p>

      <Section title="Personal Information">
        <Field label="Full Legal Name" wide />
        <Field label="Preferred Name" />
        <Field label="Phone Number" />
        <Field label="Email Address" wide />
        <Field label="Address (Street, City, State, ZIP)" wide />
        <Field label="Are you 21 or older?" />
        <Field label="Are you legally authorized to work in the US?" />
      </Section>

      <Section title="Position Applied For">
        <Field label="Position" />
        <Field label="Desired Start Date" />
        <Field label="Availability (Days/Hours)" wide />
        <Field label="Full-Time or Part-Time?" />
        <Field label="Referred By" />
      </Section>

      <Section title="Work Experience (Most Recent First)">
        <Field label="Employer 1 — Name" wide />
        <Field label="Job Title" />
        <Field label="Dates Employed" />
        <Field label="Reason for Leaving" wide />
        <Field label="Employer 2 — Name" wide />
        <Field label="Job Title" />
        <Field label="Dates Employed" />
        <Field label="Reason for Leaving" wide />
      </Section>

      <Section title="Certifications & Licenses">
        <Field label="TIPS / ServSafe Certified?" />
        <Field label="Cert. Expiration Date" />
        <Field label="Food Handler's Card?" />
        <Field label="Security License (if applicable)" />
      </Section>

      <Section title="Acknowledgment">
        <div className="col-span-2 text-[#9F7A28] text-xs mb-4">
          By signing below, I certify that all information provided is true and complete. I understand that falsification of any information is grounds for immediate dismissal.
        </div>
        <Field label="Signature" />
        <Field label="Date" />
      </Section>
    </HRLayout>
  )
}
