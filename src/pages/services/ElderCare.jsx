import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function ElderCare() {
  return (
    <ServiceTemplate
      currentSlug="elder-care"
      icon="heart"
      title="Geriatric Care and Elderly Health Management"
      description="Comprehensive assessment of older adults, coordination of medical consultations, chronic disease follow-up, functional assessments, fall-prevention guidance and personalised long-term care planning."
      intro="Ageing well requires more than periodic doctor visits. Our geriatric care service builds a complete picture of an older adult's medical, functional and daily-living needs, then coordinates the right mix of consultations, monitoring and support to help them live safely and independently for as long as possible."
      highlights={[
        { title: 'Geriatric Assessment', description: 'A structured review of medical history, medications, mobility, cognition and daily functioning.' },
        { title: 'Chronic Disease Follow-Up', description: 'Ongoing coordination for diabetes, hypertension, cardiac and other long-term conditions common in older adults.' },
        { title: 'Fall-Prevention Guidance', description: 'Home-safety review and mobility guidance to reduce the risk of falls and related injury.' },
        { title: 'Long-Term Care Planning', description: 'A personalised care roadmap developed with the family, covering medical, nutritional and daily-support needs.' },
      ]}
      whoItsFor={[
        'An elderly family member needs coordinated, ongoing medical support',
        'You are concerned about memory, mobility or fall risk',
        'Multiple chronic conditions need to be tracked together',
        'Your family wants a long-term plan, not just one-time advice',
      ]}
      process={[
        { title: 'Needs Assessment', description: 'Our team conducts an initial assessment covering medical, functional and home-environment factors.' },
        { title: 'Care Plan Development', description: 'A personalised geriatric care plan is prepared in consultation with the family and treating doctors.' },
        { title: 'Ongoing Coordination', description: 'Regular follow-up, monitoring and adjustment of the care plan as needs change over time.' },
      ]}
    />
  )
}
