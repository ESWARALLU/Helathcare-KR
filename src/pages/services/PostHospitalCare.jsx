import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function PostHospitalCare() {
  return (
    <ServiceTemplate
      currentSlug="post-hospital-care"
      icon="shield"
      title="Post-Hospital Care"
      description="Dedicated recovery support for patients discharged after stroke, trauma or major surgery — bridging the gap between hospital and home."
      intro="The period immediately after hospital discharge is often the most vulnerable stage of recovery. Our post-hospital care service provides structured support during this transition, covering nursing, mobility, wound and medication management, and close communication with the family and treating doctors."
      highlights={[
        { title: 'Stroke Recovery Support', description: 'Coordinated nursing and rehabilitation support for patients discharged after a stroke.' },
        { title: 'Trauma Recovery Support', description: 'Structured recovery care for patients discharged after significant trauma or injury.' },
        { title: 'Post-Surgical Recovery', description: 'Wound care coordination, mobility support and monitoring following major surgery.' },
        { title: 'Family Communication', description: 'Regular updates to the family on recovery progress and any concerns that need medical attention.' },
      ]}
      whoItsFor={[
        'A family member has just been discharged after stroke, trauma or surgery',
        'You need help managing medications, wound care or mobility at home',
        'You want a structured recovery plan rather than ad-hoc support',
        'You want close coordination with the discharging hospital',
      ]}
      process={[
        { title: 'Discharge Review', description: 'We review hospital discharge notes and medical instructions with the family.' },
        { title: 'Recovery Plan', description: 'A short-term recovery plan is prepared covering nursing, mobility and monitoring needs.' },
        { title: 'Transition to Continuum of Care', description: 'As recovery progresses, the plan evolves into longer-term rehabilitation or home healthcare support.' },
      ]}
    />
  )
}
