export default function PageHero({ eyebrow, title, description, icon }) {
  return (
    <section className="border-b border-teal-100 bg-gradient-to-br from-teal-50 via-cream to-sage-50">
      <div className="container-page flex flex-col items-start gap-4 py-16 sm:py-20">
        {icon}
        <p className="section-label">{eyebrow}</p>
        <h1 className="max-w-3xl text-3xl font-bold text-teal-900 sm:text-4xl">{title}</h1>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-teal-900/70">{description}</p>
        )}
      </div>
    </section>
  )
}
