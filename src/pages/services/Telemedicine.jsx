import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function Telemedicine() {
  return (
    <ServiceTemplate
      currentSlug="telemedicine"
      accent="marigold"
      icon="video"
      title="Telemedicine & Virtual Geriatric Care"
      description="Expert healthcare guidance, wherever you are — secure digital consultations connecting senior citizens and home care patients with qualified healthcare professionals."
      intro="At Kalyan Ram Healthcare, we envision making healthcare more accessible, convenient and continuous for senior citizens and patients requiring long-term home-based medical support. Our Telemedicine & Virtual Geriatric Care services connect elderly patients and their caregivers with qualified healthcare professionals through secure digital consultations, strengthening our continuum-of-care model for senior citizens, bedridden patients, patients recovering after hospitalisation and those receiving home-based geriatric care."
      highlights={[
        { title: 'Geriatric Specialist Consultations', description: 'Virtual consultations with qualified medical professionals for age-related health concerns, chronic disease follow-up, medication reviews and preventive healthcare guidance.' },
        { title: 'Post-Hospitalisation Follow-Up', description: 'Remote follow-up consultations for patients recovering from stroke, orthopaedic surgery, neurosurgical procedures and polytrauma, coordinated with their treating specialists.' },
        { title: 'Home-Based Patient Monitoring', description: 'Support for recording and reviewing blood pressure, blood glucose, oxygen saturation, pulse, temperature and other relevant health parameters.' },
        { title: 'AYUSH Teleconsultations', description: 'Access to appropriately qualified AYUSH practitioners for consultations, lifestyle guidance and supportive wellness programmes within applicable professional regulations.' },
        { title: 'Palliative & Supportive Care', description: 'Virtual follow-up for symptom assessment, caregiver counselling, comfort-focused care planning and coordination with the treating medical team.' },
        { title: 'Nutrition & Rehabilitation Follow-Up', description: 'Online consultations with qualified nutritionists, physiotherapists and other rehabilitation professionals for appropriate follow-up guidance.' },
        { title: 'Family & Caregiver Counselling', description: 'Guidance for family members on elderly care routines, nutrition, fall prevention, mobility support and home-care planning.' },
      ]}
      whoItsFor={[
        'A senior citizen prefers expert guidance without travelling to a clinic',
        'A bedridden or home-bound patient needs regular remote follow-up',
        'A family is coordinating recovery after a hospital stay from a distance',
        'Caregivers want guidance on vitals monitoring, nutrition or mobility support',
      ]}
      process={[
        { title: 'Request a Teleconsultation', description: 'Share the patient’s needs and preferred service through our Contact / Book Care page.' },
        { title: 'Secure Video Consultation', description: 'Connect with a qualified healthcare professional through a secure digital consultation at the scheduled time.' },
        { title: 'Follow-Up & Care Coordination', description: 'Recommendations are shared with the family and coordinated with the treating medical team and any ongoing home care or rehabilitation plan.' },
      ]}
      note="Telemedicine consultations will be delivered through appropriately registered practitioners on a secure consultation platform, with patient consent, clinical documentation and referral protocols in line with applicable Indian telemedicine guidelines. Remote monitoring is a follow-up and coordination support, and is not continuous emergency surveillance."
    />
  )
}
