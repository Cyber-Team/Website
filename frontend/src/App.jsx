// import Sponsors from './pages/Sponsors'
import './App.css'
import BlogSlider from './components/BlogSection';
import Clients from './components/Clients';
import FAQSection from './components/Faqs';
import He from './components/He';
import { SpotlightNewDemo } from './components/Hero';
// import Boxbss from './components/Boxbss'
import "./components/MemberCard";
import Milestone from './components/Milestone';
import TestimonialsSection from './components/testimonials';
import AnimatedTestimonials from './components/testimonials';
import Bugs from './pages/Bugs';

import "./pages/Members"
import Members from './pages/Members';
function App() {


  return (
  
    <div className="bg-gray-900 text-white min-h-screen">
      <SpotlightNewDemo />
      <Members />
      <Clients />
      <Milestone />
      <Bugs />
      <TestimonialsSection />
      <FAQSection />
    </div>
      
      
  
     
    
  )
}

export default App
