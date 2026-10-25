import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../data/services.js'

const pillars = [
  { icon: 'leaf', title: 'AYUSH', text: 'Traditional systems and wellness' },
  { icon: 'heart', title: 'Geriatric Care', text: 'Individualised elderly support' },
  { icon: 'activity', title: 'Rehabilitation', text: 'Neuro, ortho and mobility recovery' },
  { icon: 'home', title: 'Home Healthcare', text: 'Follow-up care and nursing support' },
]

const coreServices = [
  {
    slug: 'ayush-clinics',
    icon: 'leaf',
    title: 'AYUSH Clinics and Holistic Wellness',
    text: 'Consultations in Ayurveda and Homoeopathy, together with Yoga-based wellness programmes, preventive health guidance and lifestyle support.',
  },
  {
    slug: 'elder-care',
    icon: 'heart',
    title: 'Geriatric Care and Elderly Health Management',
    text: 'Comprehensive assessment of older adults, chronic disease follow-up, functional assessments, fall-prevention guidance and long-term care planning.',
  },
  {
    slug: 'telemedicine',
    icon: 'video',
    title: 'Telemedicine and Virtual Geriatric Care',
    text: 'Secure video consultations, home-based monitoring and specialist follow-up for senior citizens and home care patients, wherever they are.',
    accent: 'marigold',
  },
  {
    slug: 'rehabilitation',
    icon: 'activity',
    title: 'Neurological and Stroke Rehabilitation',
    text: 'Individualised rehabilitation for patients recovering from stroke and other neurological conditions, with emphasis on mobility and daily functioning.',
  },
  {
    slug: 'rehabilitation',
    icon: 'shield',
    title: 'Orthopaedic, Trauma and Post-Surgical Rehabilitation',
    text: "Structured recovery programmes following orthopaedic surgery, fractures, trauma and prolonged hospitalisation, coordinated with the patient's medical team.",
  },
  {
    slug: 'continuum-of-care',
    icon: 'clipboard',
    title: 'Continuum of Care and Post-Hospitalisation Services',
    text: 'Support transitioning from hospital to home through discharge coordination, recovery planning, nursing support and scheduled follow-up assessments.',
  },
  {
    slug: 'palliative-care',
    icon: 'hand',
    title: 'Palliative and Supportive Care',
    text: 'Compassionate, comfort-focused support for people living with serious illnesses, including symptom-management coordination and family counselling.',
  },
  {
    slug: 'home-healthcare',
    icon: 'utensils',
    title: 'Nutrition and Dietetic Services',
    text: 'Personalised nutritional assessment and diet planning to support healthy ageing, recovery, chronic disease management and rehabilitation.',
  },
  {
    slug: 'home-healthcare',
    icon: 'home',
    title: 'Home Healthcare and Follow-Up Care',
    text: 'Coordinated home-based nursing, caregiver assistance, physiotherapy, monitoring and follow-up services tailored to patients and their families.',
    accent: 'marigold',
  },
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-br from-teal-50 via-cream to-sage-50">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label">Kalyan Ram Healthcare</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-teal-900 sm:text-5xl">
              Caring Beyond the Hospital
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-teal-900/70 sm:text-lg">
              Personalised elder care, AYUSH wellness, rehabilitation and home healthcare &mdash;
              designed around every stage of recovery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request Care Assessment
              </Link>
              <Link to="/about" className="btn-secondary">
                Explore Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl bg-white/70 p-4 text-center shadow-sm">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold text-teal-900">{p.title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-teal-900/60">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-[2.5rem] bg-gradient-to-br from-teal-600 to-sage-500 shadow-xl" />
            <div className="absolute -bottom-6 -left-6 w-56 rounded-2xl bg-white p-5 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-sage-600">
                Continuum of Care
              </p>
              <p className="mt-2 text-sm text-teal-900/70">
                Hospital discharge through recovery, rehabilitation and long-term wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <p className="section-label text-center">Our Care Services</p>
        <h2 className="mt-3 text-center text-3xl font-bold text-teal-900">
          An Integrated Continuum of Care
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-teal-900/70 sm:text-base">
          At Kalyan Ram Healthcare, quality care extends beyond hospital walls &mdash; compassionate,
          coordinated and personalised support throughout ageing, illness, recovery and rehabilitation.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((s) => (
            <Link key={s.title} to={`/services/${s.slug}`} className="card flex flex-col">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  s.accent === 'marigold' ? 'bg-marigold-50 text-marigold-600' : 'bg-teal-50 text-teal-700'
                }`}
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-teal-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-teal-900/65">{s.text}</p>
              <span className="mt-4 text-xs font-semibold text-teal-600">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/60 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label">Our Commitment</p>
            <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">
              Healthcare that is accessible, coordinated and compassionate
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-teal-900/70 sm:text-base">
              We are building an integrated healthcare service network bringing together AYUSH
              consultations, geriatric care, physiotherapy, neurological and orthopaedic
              rehabilitation, post-hospitalisation recovery, palliative care and home healthcare
              services &mdash; promoting dignity, independence and quality of life.
            </p>
            <Link to="/about" className="btn-secondary mt-6 inline-flex">
              About Kalyan Ram Healthcare
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: 'users', title: 'Experienced Coordination', text: 'Guided by healthcare administration experience across clinical and home-care settings.' },
              { icon: 'map', title: 'Growing Locations', text: 'Services expanding across Hyderabad, Rajahmundry and Vijayawada.' },
              { icon: 'chat', title: 'English & Telugu', text: 'Bilingual support for families across Andhra Pradesh and Telangana.' },
              { icon: 'stethoscope', title: 'Clinically Coordinated', text: "Care plans coordinated with each patient's treating medical team." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <Icon name={f.icon} className="h-5 w-5 text-sage-600" />
                <h3 className="mt-3 text-sm font-semibold text-teal-900">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-teal-900/65">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <p className="section-label text-center">Service Areas</p>
        <h2 className="mt-3 text-center text-2xl font-bold text-teal-900 sm:text-3xl">
          Explore Every Stage of Care
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="card">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-sage-700">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-teal-900">{s.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-teal-900/65">{s.short}</p>
            </Link>
          ))}
          <Link to="/medical-equipment" className="card">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-100 text-sage-700">
              <Icon name="bed" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-sm font-semibold text-teal-900">Medical Equipment</h3>
            <p className="mt-1 text-xs leading-relaxed text-teal-900/65">
              Hospital beds, wheelchairs and oxygen equipment
            </p>
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
