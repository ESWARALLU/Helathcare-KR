import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function ContinuumOfCare() {
  return (
    <ServiceTemplate
      currentSlug="continuum-of-care"
      icon="clipboard"
      title="Continuum of Care"
      description="Discharge planning, recovery monitoring and follow-up — one coordinated plan that follows the patient from hospital to home and beyond."
      intro="Rather than offering individual healthcare services in isolation, Kalyan Ram Healthcare is built around a Continuum of Care model — supporting patients from hospital discharge through recovery, rehabilitation, home care and long-term wellness, under one coordinated plan."
      highlights={[
        { title: 'Discharge Coordination', description: 'Working with hospitals and families to plan a safe, well-informed transition home.' },
        { title: 'Recovery Monitoring', description: 'Scheduled check-ins to track progress against the recovery plan and flag concerns early.' },
        { title: 'Nutrition & Rehabilitation Integration', description: 'Nutrition guidance and rehabilitation support coordinated as part of the same overall plan.' },
        { title: 'Scheduled Follow-Up', description: 'Regular follow-up assessments so care adapts as the patient’s needs change over time.' },
      ]}
      whoItsFor={[
        'You want one coordinated plan across hospital, rehab and home care',
        'A family member’s needs are likely to change over several months',
        'You want fewer handovers between different care providers',
        'You value regular, scheduled check-ins rather than reactive support',
      ]}
      process={[
        { title: 'Initial Care Mapping', description: 'We map out the full recovery journey, from current status to long-term goals.' },
        { title: 'Coordinated Delivery', description: 'Relevant services — rehabilitation, nursing, nutrition, follow-up — are delivered under one plan.' },
        { title: 'Ongoing Review', description: 'The plan is reviewed and adjusted at each follow-up to reflect the patient’s progress.' },
      ]}
    />
  )
}
