import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MedicalEquipment from './pages/MedicalEquipment.jsx'
import PatientResources from './pages/PatientResources.jsx'
import Contact from './pages/Contact.jsx'
import AyushClinics from './pages/services/AyushClinics.jsx'
import ElderCare from './pages/services/ElderCare.jsx'
import Telemedicine from './pages/services/Telemedicine.jsx'
import Rehabilitation from './pages/services/Rehabilitation.jsx'
import PostHospitalCare from './pages/services/PostHospitalCare.jsx'
import ContinuumOfCare from './pages/services/ContinuumOfCare.jsx'
import PalliativeCare from './pages/services/PalliativeCare.jsx'
import HomeHealthcare from './pages/services/HomeHealthcare.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/ayush-clinics" element={<AyushClinics />} />
        <Route path="/services/elder-care" element={<ElderCare />} />
        <Route path="/services/telemedicine" element={<Telemedicine />} />
        <Route path="/services/rehabilitation" element={<Rehabilitation />} />
        <Route path="/services/post-hospital-care" element={<PostHospitalCare />} />
        <Route path="/services/continuum-of-care" element={<ContinuumOfCare />} />
        <Route path="/services/palliative-care" element={<PalliativeCare />} />
        <Route path="/services/home-healthcare" element={<HomeHealthcare />} />
        <Route path="/medical-equipment" element={<MedicalEquipment />} />
        <Route path="/patient-resources" element={<PatientResources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
