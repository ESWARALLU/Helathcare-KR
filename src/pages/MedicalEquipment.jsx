import Icon from '../components/Icon.jsx'
import PageHero from '../components/PageHero.jsx'
import CTASection from '../components/CTASection.jsx'

const equipment = [
  { icon: 'bed', title: 'Hospital Beds', text: 'Manual and semi-automatic hospital beds for home use, suited to prolonged recovery and limited mobility.' },
  { icon: 'activity', title: 'Wheelchairs & Mobility Aids', text: 'Standard and reclining wheelchairs, walkers and mobility aids to support daily movement.' },
  { icon: 'shield', title: 'Oxygen Equipment', text: 'Oxygen concentrators and related equipment, with guidance on safe home use.' },
  { icon: 'heart', title: 'Patient Monitoring', text: 'Basic vital-signs monitoring equipment for use alongside nursing and follow-up care.' },
  { icon: 'clipboard', title: 'Rehabilitation Aids', text: 'Supportive equipment used during physiotherapy and mobility rehabilitation at home.' },
  { icon: 'utensils', title: 'Nutrition & Feeding Support', text: 'Equipment and supplies to support feeding and nutrition plans where required.' },
]

export default function MedicalEquipment() {
  return (
    <div>
      <PageHero
        eyebrow="Medical Equipment"
        title="The Right Equipment for Safe Recovery at Home"
        description="Hospital beds, wheelchairs, oxygen equipment and other essentials — made available as part of a coordinated home-care or rehabilitation plan."
        icon={
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <Icon name="bed" className="h-7 w-7" />
          </span>
        }
      />

      <section className="container-page py-16">
        <p className="section-label">What We Provide</p>
        <h2 className="mt-3 text-2xl font-bold text-teal-900 sm:text-3xl">Equipment Categories</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((e) => (
            <div key={e.title} className="card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon name={e.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-teal-900">{e.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-teal-900/65">{e.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-teal-900/50">
          Equipment availability depends on service location and current operational status.
          Please speak with our care coordination team to confirm what is available for your
          location and care plan.
        </p>
      </section>

      <CTASection
        title="Need Equipment for Home Care?"
        description="Our care coordination team can help you choose and arrange the right equipment alongside your home healthcare or rehabilitation plan."
      />
    </div>
  )
}
