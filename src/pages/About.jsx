import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import CTASection from '../components/CTASection.jsx'

const leaders = [
  {
    name: 'Dr. Satyanaryana Murthy',
    role: 'Founder & Director, Kalyan Ram Health Care Private Limited',
    bio: [
      "Kalyan Ram Healthcare is led with a strong background in healthcare administration, with a focus on building services that are clinically coordinated, operationally dependable and genuinely centred on the patient and family experience. The company's approach reflects years of understanding how hospitals, rehabilitation teams and home-care providers can work together more effectively.",
    ],
  },
  {
    name: 'Mrs. G. Kalyani',
    role: 'Director, Kalyan Ram Health Care Private Limited',
    tagline: 'Yoga, Holistic Wellness & Compassionate Care',
    badge: 'Standard Care Pathways — Launching Soon',
    bio: [
      'Mrs. G. Kalyani is a compassionate, dynamic and socially responsible individual with a strong commitment to promoting holistic health, wellness and community well-being.',
      'She holds a Postgraduate Diploma in Yoga and has professional experience as a Yoga Instructor, with an interest in the therapeutic and preventive applications of Yoga for improving physical, mental and emotional well-being.',
      "As a Director of Kalyan Ram Health Care Private Limited, she brings a caring, patient-centred perspective to the organisation's healthcare philosophy. Her involvement is expected to contribute meaningfully to the development of Yoga-based wellness programmes, supportive care pathways, elderly wellness initiatives and community health education.",
      'She is particularly committed to making compassionate care and wellness guidance accessible to elderly individuals, patients undergoing rehabilitation and people requiring continued support at home.',
      'Her vision is to integrate the principles of Yoga, preventive wellness, healthy ageing and compassionate caregiving into the broader continuum of healthcare services offered by Kalyan Ram Healthcare.',
    ],
    quote: 'Care with compassion, promote wellness with dedication, and help every individual live with dignity and better health.',
  },
  {
    name: 'Mr.Ram Sashank',
    role: 'Director, Kalyan Ram Health Care Private Limited',
    bio: [
      "Mr.Ram Sashank serves as a Director of Kalyan Ram Health Care Private Limited, supporting the company's healthcare administration, governance and strategic growth as the organisation expands its care services.",
    ],
  },
]

const corporateDetails = [
  { label: 'Legal Name', value: 'Kalyanram Health Care Private Limited' },
  { label: 'Corporate Identification Number (CIN)', value: 'U85300AP2022PTC123219' },
  { label: 'Registration Number', value: '123219' },
  { label: 'Date of Incorporation', value: '11 November 2022' },
  { label: 'Company Type', value: 'Private, Non-Government Company' },
  { label: 'Registered With', value: 'Registrar of Companies' },
  { label: 'NIC Code', value: '853 — Social Work Activities' },
  {
    label: 'Registered Office',
    value: 'RS No-210, Door No. 81-28-19, Flat No D4, Bharathi Residence, Kanchana Nagar, JN Road, Rajahmundry, Andhra Pradesh, India – 533101',
  },
  { label: 'Email', value: 'drgsmurthy@yahoo.co.in' },
  { label: 'Phone', value: '+91 98493 30120' },
]

const values = [
  { icon: 'heart', title: 'Compassion', text: 'Every care plan is built around the dignity and comfort of the individual, not just the condition.' },
  { icon: 'clipboard', title: 'Coordination', text: 'We work alongside treating doctors and hospitals to keep recovery connected, not fragmented.' },
  { icon: 'shield', title: 'Responsibility', text: 'Clear communication with families and realistic expectations about what care can achieve.' },
  { icon: 'users', title: 'Accessibility', text: 'Bilingual, home-based and clinic-based options designed for families across the region.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Caring Beyond the Hospital, From Day One"
        description="Kalyan Ram Health Care Private Limited was founded to close the gap between hospital discharge and full recovery — bringing AYUSH wellness, geriatric care, rehabilitation and home healthcare into one coordinated service."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-teal-900">Our Vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-teal-900/75 sm:text-base">
            To develop an integrated healthcare service network bringing together AYUSH
            consultations, geriatric care, physiotherapy, neurological and orthopaedic
            rehabilitation, post-hospitalisation recovery, palliative care and home healthcare
            services &mdash; so that every family has one trusted partner across every stage of
            recovery.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-teal-900">Our Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-teal-900/75 sm:text-base">
            To make healthcare more accessible, coordinated, compassionate and responsive to
            individual needs, while promoting dignity, independence and quality of life for every
            patient we serve.
          </p>
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/60 py-16">
        <div className="container-page">
          <p className="section-label">Leadership</p>
          <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">
            Guided by Healthcare Administration and Compassionate Care Experience
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            {leaders.map((l) => (
              <div key={l.name} className="grid gap-6 sm:grid-cols-[160px_1fr] sm:items-start">
                <div className="aspect-square w-full max-w-[160px] rounded-3xl bg-gradient-to-br from-teal-600 to-sage-500 shadow-md" />
                <div className="card">
                  <h3 className="text-base font-semibold text-teal-900">{l.name}</h3>
                  <p className="text-sm text-sage-600">{l.role}</p>
                  {l.tagline && (
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-teal-900/50">
                      {l.tagline}
                    </p>
                  )}
                  {l.badge && (
                    <span className="mt-2 inline-block rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold text-teal-600">
                      {l.badge}
                    </span>
                  )}
                  <div className="mt-4 space-y-3">
                    {l.bio.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-teal-900/75">
                        {p}
                      </p>
                    ))}
                  </div>
                  {l.quote && (
                    <p className="mt-4 border-l-2 border-sage-300 pl-4 text-sm italic leading-relaxed text-teal-900/70">
                      &ldquo;{l.quote}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <p className="section-label">Corporate Information</p>
        <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">
          Registered with the Registrar of Companies
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-teal-900/70">
          Kalyan Ram Healthcare operates under Kalyanram Health Care Private Limited, a private,
          non-government company incorporated in India. Key corporate details are listed below
          for transparency.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600">
              Company Details
            </h3>
            <dl className="mt-4 space-y-3">
              {corporateDetails.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col gap-0.5 border-b border-teal-100 pb-3 last:border-0 last:pb-0 sm:flex-row sm:gap-4"
                >
                  <dt className="w-full flex-none text-xs font-semibold uppercase tracking-wide text-teal-900/50 sm:w-48">
                    {d.label}
                  </dt>
                  <dd className="text-sm text-teal-900/80">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600">
              Board of Directors
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-teal-900/80">
              <li>Satyanarayana Murthy Gedela</li>
              <li>Kalyani Gedela</li>
              <li>Gedela Ram Sashank</li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-teal-900/50">
              As recorded with the Registrar of Companies. See Leadership above for director
              profiles.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <p className="section-label">What Guides Us</p>
        <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">Our Values</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon name={v.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-teal-900">{v.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-teal-900/65">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-3xl border border-teal-100 bg-white p-8 sm:p-12">
          <p className="section-label">Our Direction</p>
          <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">
            An Integrated Geriatric, Rehabilitation &amp; Home Healthcare Provider
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-teal-900/70 sm:text-base">
            We are positioning Kalyan Ram Healthcare as an integrated provider across geriatric
            care, rehabilitation and home healthcare, with AYUSH and wellness as a distinct,
            prominent service division. This gives our company a clear identity today, while
            leaving room to grow into a broader healthcare network as new locations and services
            become operational.
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-teal-900/50">
            Note: some services described on this website are operational, while others are in
            planning. We are committed to clearly distinguishing current services from planned
            services, and to ensuring every clinical claim reflects the care we are authorised and
            equipped to deliver.
          </p>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">
            Speak With Our Team
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
