export const services = [
  {
    slug: 'ayush-clinics',
    name: 'AYUSH Clinics',
    short: 'Ayurveda, Homoeopathy, Yoga and holistic wellness',
    icon: 'leaf',
  },
  {
    slug: 'elder-care',
    name: 'Elder Care',
    short: 'Geriatric consultations and long-term elder care',
    icon: 'heart',
  },
  {
    slug: 'telemedicine',
    name: 'Telemedicine & Virtual Geriatric Care',
    short: 'Virtual consultations for senior citizens and home care patients',
    icon: 'video',
  },
  {
    slug: 'rehabilitation',
    name: 'Rehabilitation',
    short: 'Neurological, orthopaedic and mobility rehabilitation',
    icon: 'activity',
  },
  {
    slug: 'post-hospital-care',
    name: 'Post-Hospital Care',
    short: 'Stroke, trauma and post-surgical recovery',
    icon: 'shield',
  },
  {
    slug: 'continuum-of-care',
    name: 'Continuum of Care',
    short: 'Discharge planning, recovery monitoring, follow-up',
    icon: 'clipboard',
  },
  {
    slug: 'palliative-care',
    name: 'Palliative Care',
    short: 'Comfort-focused care and family support',
    icon: 'hand',
  },
  {
    slug: 'home-healthcare',
    name: 'Home Healthcare',
    short: 'Home visits, nursing, caregivers and nutrition',
    icon: 'home',
  },
]

export const findService = (slug) => services.find((s) => s.slug === slug)
