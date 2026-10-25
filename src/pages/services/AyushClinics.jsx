import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function AyushClinics() {
  return (
    <ServiceTemplate
      currentSlug="ayush-clinics"
      icon="leaf"
      title="AYUSH Clinics and Holistic Wellness"
      description="Consultation services in Ayurveda and Homoeopathy, together with Yoga-based wellness programmes, preventive health guidance and lifestyle support."
      intro="Our AYUSH division brings together traditional systems of medicine and modern preventive wellness under one roof. Consultations are delivered by appropriately qualified professionals, with an emphasis on individualised, sustainable lifestyle support rather than one-off treatment."
      highlights={[
        { title: 'Ayurveda Consultations', description: 'Assessment and guidance rooted in classical Ayurvedic principles, tailored to individual constitution and health goals.' },
        { title: 'Homoeopathy Consultations', description: 'Individualised homoeopathic consultations for chronic and general wellness concerns.' },
        { title: 'Yoga & Wellness Programmes', description: 'Structured yoga and breathing-based sessions supporting mobility, stress management and healthy ageing.' },
        { title: 'Preventive Health Guidance', description: 'Lifestyle, diet and routine recommendations aimed at preventing illness and supporting long-term wellbeing.' },
      ]}
      whoItsFor={[
        'You want preventive, lifestyle-based wellness support',
        'You are interested in Ayurveda or Homoeopathy alongside conventional care',
        'You are recovering and want a gentle, complementary wellness programme',
        'You want guided yoga for mobility, stress or healthy ageing',
      ]}
      process={[
        { title: 'Initial Consultation', description: 'A qualified practitioner reviews your health history, current concerns and goals.' },
        { title: 'Personalised Plan', description: 'A wellness or treatment plan is prepared, combining consultation, lifestyle guidance and, where appropriate, yoga sessions.' },
        { title: 'Follow-Up & Review', description: 'Progress is reviewed at agreed intervals and the plan adjusted as needed.' },
      ]}
    />
  )
}
