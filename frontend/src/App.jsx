// import Sponsors from './pages/Sponsors'

import './App.css'
import BlogSlider from './components/BlogSection';

import FAQSection from './components/Faqs';
import Footer from './components/Footer';

import { SpotlightNewDemo } from './components/Hero';
// import Boxbss from './components/Boxbss'
import "./components/MemberCard";
import { AnimatedTestimonialsDemo } from './components/members';
import Milestone from './components/Milestone';
import { SVGMaskEffectDemo } from './components/Reveal';
import TestimonialsSection from './components/testimonials';
import Navbar from './components/ui/simpleNavbar';
//import {Routes,Route,BrowserRouter} from "react-router-dom";
import Bugs from './pages/Bugs';

import "./pages/Members"
import Members from './pages/Members';
import Sponsors from './pages/Sponsors';
function App() {


  return (
  
    
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      <SpotlightNewDemo />
      <Members />
      <BlogSlider />
      <Milestone />
      
      
   
      <Bugs />
      <TestimonialsSection />
      <AnimatedTestimonialsDemo />
      <FAQSection />
      <SVGMaskEffectDemo />
      <Sponsors />
      <Footer />
      
     
    </div>

 
      
      
  
     
    
  )
}

export default App
