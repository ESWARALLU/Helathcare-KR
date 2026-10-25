import { Link } from 'react-router-dom'

export default function CTASection({
  title = 'Begin Your Care Journey',
  description = "Speak with our care coordination team to discuss your family's needs and request an initial care assessment.",
}) {
  return (
    <section className="container-page py-16">
      <div className="rounded-3xl bg-teal-700 px-8 py-14 text-center text-white sm:px-16">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-teal-50/90 sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary bg-white text-teal-700 hover:bg-teal-50">
            Request a Consultation
          </Link>
          <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
            Enquire About Home Care
          </Link>
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            WhatsApp Care Enquiry
          </a>
        </div>
      </div>
    </section>
  )
}
