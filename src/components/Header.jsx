import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { services } from '../data/services.js'

const navLink = ({ isActive }) =>
  `text-sm font-medium transition hover:text-teal-600 ${
    isActive ? 'text-teal-700' : 'text-teal-900/80'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-teal-100 bg-cream/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 font-heading text-lg font-bold text-white">
            KR
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-semibold text-teal-800">
              Kalyan Ram
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-sage-600">
              Healthcare
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className={navLink} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLink}>
            About Us
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-teal-900/80 hover:text-teal-600"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5">
                <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-teal-100 bg-white p-3 shadow-lg">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block rounded-xl px-3 py-2 text-sm text-teal-900/90 hover:bg-teal-50"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="font-medium">{s.name}</span>
                      <span className="block text-xs text-teal-700/60">{s.short}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/medical-equipment" className={navLink}>
            Medical Equipment
          </NavLink>
          <NavLink to="/patient-resources" className={navLink}>
            Patient Resources
          </NavLink>
          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Request Care Assessment
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M2 5h16M2 10h16M2 15h16" stroke="#0f453e" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-teal-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            <Link to="/" className="rounded-lg px-3 py-2 text-sm font-medium" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-medium" onClick={() => setOpen(false)}>
              About Us
            </Link>
            <span className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-sage-600">
              Services
            </span>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="rounded-lg px-3 py-2 text-sm text-teal-900/90"
                onClick={() => setOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <Link to="/medical-equipment" className="rounded-lg px-3 py-2 text-sm font-medium" onClick={() => setOpen(false)}>
              Medical Equipment
            </Link>
            <Link to="/patient-resources" className="rounded-lg px-3 py-2 text-sm font-medium" onClick={() => setOpen(false)}>
              Patient Resources
            </Link>
            <Link to="/contact" className="rounded-lg px-3 py-2 text-sm font-medium" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link to="/contact" className="btn-primary mt-2 justify-center" onClick={() => setOpen(false)}>
              Request Care Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
