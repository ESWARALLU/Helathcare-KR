import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import PageHero from './PageHero.jsx'
import CTASection from './CTASection.jsx'
import { services } from '../data/services.js'

export default function ServiceTemplate({
  icon,
  eyebrow = 'Our Care Services',
  title,
  description,
  intro,
  highlights = [],
  whoItsFor = [],
  process = [],
  note,
  currentSlug,
  accent = 'ocean',
}) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3)
  const isWarm = accent === 'marigold'

  return (
    <div>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        icon={
          <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${isWarm ? 'bg-marigold-500' : 'bg-teal-600'}`}>
            <Icon name={icon} className="h-7 w-7" />
          </span>
        }
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-teal-900">Overview</h2>
          <p className="mt-4 text-sm leading-relaxed text-teal-900/75 sm:text-base">{intro}</p>

          {highlights.length > 0 && (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.title} className="card">
                  <h3 className="text-sm font-semibold text-teal-800">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-teal-900/70">{h.description}</p>
                </div>
              ))}
            </div>
          )}

          {process.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-teal-900">How It Works</h2>
              <ol className="mt-5 space-y-5">
                {process.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sage-100 text-sm font-semibold text-sage-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-teal-800">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-teal-900/70">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {note && (
            <p className="mt-10 text-xs leading-relaxed text-teal-900/50">{note}</p>
          )}
        </div>

        <aside className="space-y-6">
          {whoItsFor.length > 0 && (
            <div className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600">
                This service may help if
              </h3>
              <ul className="mt-4 space-y-3">
                {whoItsFor.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-teal-900/75">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-sage-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={`card text-white ${isWarm ? 'bg-marigold-500' : 'bg-teal-700'}`}>
            <h3 className={`text-sm font-semibold uppercase tracking-wide ${isWarm ? 'text-marigold-50' : 'text-teal-100'}`}>
              Request This Service
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Tell us about your family&apos;s needs and our care coordination team will get back
              to you with next steps.
            </p>
            <Link
              to="/contact"
              className={`btn-primary mt-5 w-full justify-center bg-white hover:bg-cream ${isWarm ? 'text-marigold-600' : 'text-teal-700'}`}
            >
              Request Care Assessment
            </Link>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600">
              Related Services
            </h3>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={`/services/${r.slug}`} className="text-sm font-medium text-teal-700 hover:text-teal-900">
                    {r.name}
                  </Link>
                  <p className="text-xs text-teal-900/60">{r.short}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <CTASection />
    </div>
  )
}
