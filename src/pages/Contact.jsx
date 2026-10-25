import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import { services } from '../data/services.js'

const locations = [
  { city: 'Hyderabad', status: 'Launching Soon' },
  { city: 'Rajahmundry', status: 'Launching Soon' },
  { city: 'Vijayawada', status: 'Launching Soon' },
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  location: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact / Book Care"
        title="Request a Care Assessment"
        description="Tell us about your family's needs. Our care coordination team will get back to you to discuss next steps — no unnecessary sensitive medical details required at this stage."
        icon={
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <Icon name="phone" className="h-7 w-7" />
          </span>
        }
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="card">
          {submitted ? (
            <div className="flex flex-col items-start gap-4 py-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                <Icon name="check" className="h-6 w-6" />
              </span>
              <h2 className="text-xl font-semibold text-teal-900">Thank you, {form.name || 'there'}.</h2>
              <p className="text-sm leading-relaxed text-teal-900/70">
                We have received your request. Our care coordination team will contact you shortly
                to discuss your family's needs and next steps.
              </p>
              <button
                type="button"
                className="btn-secondary mt-2"
                onClick={() => {
                  setForm(initialForm)
                  setSubmitted(false)
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-lg font-semibold text-teal-900">Care Assessment Request</h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="font-medium text-teal-900">Full Name</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    className="mt-1 w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-teal-900">Phone Number</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className="mt-1 w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                    placeholder="10-digit mobile number"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="font-medium text-teal-900">Email (optional)</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className="mt-1 w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  placeholder="you@example.com"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="font-medium text-teal-900">Service of Interest</span>
                  <select
                    value={form.service}
                    onChange={update('service')}
                    className="mt-1 w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Medical Equipment">Medical Equipment</option>
                    <option value="Not Sure">Not Sure &mdash; Please Advise</option>
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-teal-900">Preferred Location</span>
                  <select
                    value={form.location}
                    onChange={update('location')}
                    className="mt-1 w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  >
                    <option value="">Select a location</option>
                    {locations.map((l) => (
                      <option key={l.city} value={l.city}>
                        {l.city}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm">
                <span className="font-medium text-teal-900">Tell us briefly about your needs</span>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  placeholder="For example: my father needs post-stroke rehabilitation support at home"
                />
              </label>

              <p className="text-xs text-teal-900/50">
                Please avoid sharing sensitive medical records here. Our team will discuss detailed
                medical information securely once we connect with you.
              </p>

              <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                Submit Request
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600">
              Other Ways to Reach Us
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-teal-900/80">
              <li className="flex gap-3">
                <Icon name="phone" className="h-5 w-5 flex-none text-teal-600" />
                <span>+91 98493 30120</span>
              </li>
              <li className="flex gap-3">
                <Icon name="chat" className="h-5 w-5 flex-none text-teal-600" />
                <a href="https://wa.me/919849330120" target="_blank" rel="noreferrer" className="hover:text-teal-700">
                  WhatsApp Care Enquiry
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clipboard" className="h-5 w-5 flex-none text-teal-600" />
                <span>drgsmurthy@yahoo.co.in</span>
              </li>
              <li className="flex gap-3">
                <Icon name="map" className="h-5 w-5 flex-none text-teal-600" />
                <span>
                  RS No-210, Door No. 81-28-19, Flat No D4, Bharathi Residence, Kanchana Nagar,
                  JN Road, Rajahmundry, Andhra Pradesh, India &ndash; 533101
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-teal-900/50">Support available in English and Telugu.</p>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600">
              Service Locations
            </h3>
            <ul className="mt-4 space-y-3">
              {locations.map((l) => (
                <li key={l.city} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 font-medium text-teal-900">
                    <Icon name="map" className="h-4 w-4 text-sage-500" />
                    {l.city}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      l.status === 'Operational'
                        ? 'bg-sage-100 text-sage-700'
                        : 'bg-teal-50 text-teal-600'
                    }`}
                  >
                    {l.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
