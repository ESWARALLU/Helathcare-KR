import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function Rehabilitation() {
  return (
    <ServiceTemplate
      currentSlug="rehabilitation"
      icon="activity"
      title="Neurological, Orthopaedic and Mobility Rehabilitation"
      description="Individualised rehabilitation support for stroke, neurological conditions, orthopaedic surgery, fractures and trauma — coordinated with each patient's treating medical team."
      intro="Recovery after a stroke, neurological event, surgery or significant trauma depends on structured, consistent rehabilitation. Our programmes combine physiotherapy, functional training and caregiver education, coordinated throughout with the patient's treating doctors so that therapy stays aligned with the medical plan."
      highlights={[
        { title: 'Neurological & Stroke Rehabilitation', description: 'Individualised support for patients recovering from stroke and other neurological conditions, focused on mobility and daily functioning.' },
        { title: 'Orthopaedic Rehabilitation', description: 'Structured recovery programmes following orthopaedic surgery, joint replacement and fractures.' },
        { title: 'Trauma & Post-Surgical Recovery', description: 'Coordinated rehabilitation following trauma or prolonged hospitalisation, rebuilding strength and independence.' },
        { title: 'Caregiver Education', description: 'Practical training for family members and caregivers to safely support exercises and daily activities at home.' },
      ]}
      whoItsFor={[
        'Recovering from a stroke or other neurological condition',
        'Recovering from orthopaedic surgery, a fracture or trauma',
        'Experiencing reduced mobility after prolonged hospitalisation',
        'Family caregivers who want guided, structured support at home',
      ]}
      process={[
        { title: 'Functional Assessment', description: 'A physiotherapist evaluates mobility, strength and daily-functioning goals.' },
        { title: 'Individualised Programme', description: 'A rehabilitation programme is designed around the patient’s condition, goals and home environment.' },
        { title: 'Guided Recovery & Review', description: 'Sessions continue with regular progress review and coordination with the treating medical team.' },
      ]}
    />
  )
}
