import ServiceTemplate from '../../components/ServiceTemplate.jsx'

export default function PalliativeCare() {
  return (
    <ServiceTemplate
      currentSlug="palliative-care"
      icon="hand"
      title="Palliative and Supportive Care"
      description="Comfort-focused support for people living with serious or life-limiting illnesses, including symptom-management coordination, family counselling and caregiver guidance."
      intro="Palliative care at Kalyan Ram Healthcare is centred on comfort, dignity and quality of life. We support patients living with serious or life-limiting illness, and work closely with families to provide guidance, emotional support and coordinated symptom management alongside the treating medical team."
      highlights={[
        { title: 'Symptom-Management Coordination', description: 'Working with treating doctors to help manage pain and other symptoms for comfort and quality of life.' },
        { title: 'Family Counselling', description: 'Emotional support and guidance for families navigating a serious illness.' },
        { title: 'Caregiver Guidance', description: 'Practical training for caregivers on comfort care, positioning and daily support.' },
        { title: 'Dignity-Centred Care', description: 'Care plans that respect the wishes, comfort and dignity of the patient at every stage.' },
      ]}
      whoItsFor={[
        'A family member is living with a serious or life-limiting illness',
        'You need coordinated support for comfort and symptom management',
        'Your family would benefit from counselling and emotional support',
        'Caregivers need guidance on day-to-day comfort care',
      ]}
      process={[
        { title: 'Compassionate Assessment', description: 'We understand the patient’s condition, wishes and the family’s support needs.' },
        { title: 'Supportive Care Plan', description: 'A plan is prepared covering comfort care, symptom coordination and family support.' },
        { title: 'Continued Presence', description: 'Our team remains in close contact with the family throughout the care journey.' },
      ]}
    />
  )
}
