import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import CTASection from '../components/CTASection.jsx'

const guides = [
  { icon: 'heart', title: 'Caring for an Elderly Parent at Home', text: 'Practical guidance on daily routines, safety and recognising when extra support is needed.' },
  { icon: 'activity', title: 'What to Expect After a Stroke', text: 'An overview of the recovery journey, rehabilitation timelines and family involvement.' },
  { icon: 'shield', title: 'Preparing for Hospital Discharge', text: 'A checklist for families preparing to bring a patient home after surgery or hospitalisation.' },
  { icon: 'utensils', title: 'Nutrition During Recovery', text: 'Why diet matters during rehabilitation and recovery, and how our nutrition team can help.' },
  { icon: 'hand', title: 'Supporting a Loved One with Serious Illness', text: 'Guidance for families on comfort care, communication and caregiver wellbeing.' },
  { icon: 'clipboard', title: 'Understanding Continuum of Care', text: 'How a coordinated care plan works, from hospital discharge through long-term wellness.' },
]

const faqs = [
  { q: 'How do I start a care assessment for a family member?', a: 'Use the Contact / Book Care page to request a care assessment. Our team will reach out to understand your needs and schedule an initial visit or call.' },
  { q: 'Are services available at home as well as in a clinic?', a: 'Yes. Depending on the service, we offer both clinic-based consultations and home visits, including nursing, physiotherapy and caregiver support.' },
  { q: 'Which locations are currently served?', a: 'We are expanding across Hyderabad, Rajahmundry and Vijayawada. Please contact us to confirm current availability in your area.' },
  { q: 'Do you coordinate with my family member’s existing doctors?', a: 'Yes. Our care plans are designed to work alongside the treating medical team, not replace them.' },
  { q: 'Is support available in Telugu?', a: 'Yes, our team can support families in both English and Telugu.' },
]

export default function PatientResources() {
  return (
    <div>
      <PageHero
        eyebrow="Patient Resources"
        title="Guides and Answers for Every Stage of Care"
        description="Care guides and frequently asked questions to help families understand what to expect and how Kalyan Ram Healthcare can support them."
        icon={
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <Icon name="clipboard" className="h-7 w-7" />
          </span>
        }
      />

      <section className="container-page py-16">
        <p className="section-label">Care Guides</p>
        <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">Educational Articles</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <div key={g.title} className="card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon name={g.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-teal-900">{g.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-teal-900/65">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/60 py-16">
        <div className="container-page">
          <p className="section-label">FAQs</p>
          <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-teal-100 bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-teal-900">
                  {f.q}
                  <span className="ml-4 text-teal-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-teal-900/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
