import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function HomeHealthcare() {
  return (
    <ServiceTemplate
      currentSlug="home-healthcare"
      accent="marigold"
      icon="home"
      title="Home Healthcare and Follow-Up Care"
      description="Coordinated home-based nursing, caregiver assistance, physiotherapy, monitoring, nutrition and follow-up services tailored to patients and their families."
      intro="For many families, the most practical and comfortable place to recover is home. Our home healthcare service brings nursing, caregiving, physiotherapy and nutrition support directly to the patient, with regular monitoring and follow-up so the family is never navigating recovery alone."
      highlights={[
        { title: 'Home Nursing', description: 'Qualified nursing support at home, including medication, wound and general care management.' },
        { title: 'Caregiver Assistance', description: 'Trained caregivers to support daily living activities and companionship.' },
        { title: 'Home Physiotherapy', description: 'Rehabilitation sessions delivered at home, coordinated with the broader recovery plan.' },
        { title: 'Nutrition & Diet Planning', description: 'Personalised nutritional assessment and diet planning to support recovery and healthy ageing.' },
      ]}
      whoItsFor={[
        'You prefer care to be delivered at home rather than a facility',
        'A family member needs nursing, caregiving or physiotherapy support',
        'You want nutrition guidance as part of an ongoing recovery plan',
        'You need regular follow-up without repeated hospital visits',
      ]}
      process={[
        { title: 'Home Care Assessment', description: 'We assess the home environment and the patient’s nursing, mobility and nutrition needs.' },
        { title: 'Care Team Assignment', description: 'A suitable nurse, caregiver and/or physiotherapist is assigned based on the assessment.' },
        { title: 'Ongoing Monitoring', description: 'Scheduled visits and follow-up calls keep the family and treating doctors informed of progress.' },
      ]}
    />
  )
}
