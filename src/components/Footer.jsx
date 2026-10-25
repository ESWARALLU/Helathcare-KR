import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-teal-100 bg-teal-800 text-teal-50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-heading text-base font-bold text-teal-800">
              KR
            </span>
            <span className="font-heading text-lg font-semibold">Kalyan Ram Healthcare</span>
          </div>
          <p className="mt-4 text-sm text-teal-100/80">
            Compassionate Care. Continuous Recovery. Better Living.
          </p>
          <p className="mt-3 text-sm text-teal-100/70">
            Integrated Healthcare &middot; Rehabilitation &middot; Elder Care
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-sage-300">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-teal-100/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-sage-300">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-teal-100/80">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/medical-equipment" className="hover:text-white">Medical Equipment</Link></li>
            <li><Link to="/patient-resources" className="hover:text-white">Patient Resources</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact / Book Care</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-sage-300">Get in Touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-teal-100/80">
            <li>Hyderabad &middot; Rajahmundry &middot; Vijayawada</li>
            <li>drgsmurthy@yahoo.co.in</li>
          </ul>
          <Link to="/contact" className="btn-primary mt-5 bg-sage-500 hover:bg-sage-600">
            Request a Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-page flex flex-col gap-2 text-xs text-teal-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Kalyanram Health Care Private Limited. All rights
            reserved. &middot; CIN: U85300AP2022PTC123219
          </p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Consent &amp; Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
