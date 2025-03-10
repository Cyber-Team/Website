// import Sponsors from './pages/Sponsors'

import './App.css'
import BlogSlider from './components/BlogSection';

import FAQSection from './components/Faqs';
// import FooterSection from './components/Footer';
import { SpotlightNewDemo } from './components/Hero';
// import Boxbss from './components/Boxbss'
import "./components/MemberCard";
import { AnimatedTestimonialsDemo } from './components/members';
import Milestone from './components/Milestone';
//import { SVGMaskEffectDemo } from './components/Reveal';
import TestimonialsSection from './components/testimonials';
import Navbar from './components/ui/simpleNavbar';
//import {Routes,Route,BrowserRouter} from "react-router-dom";
import Bugs from './pages/Bugs';
import Footer from './components/Footer';
import "./pages/Members"
// import Members from './pages/Members';
// import Sponsors from './pages/Sponsors';
function App() {


  return (
  
    
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <section id="home">
        <SpotlightNewDemo />
      </section>
      
      <section id="blogs">
        <BlogSlider />
      </section>
      <section id="milestones">
        <Milestone />
      </section>
      <section id="bugs">
        <Bugs />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="members">
        <AnimatedTestimonialsDemo />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <section id="#footer">
        <Footer />
      </section>
      {/* <BrowserRouter>
      <Routes>
        <Route exact path="" element={<SpotlightNewDemo />}>
        
        </Route>
        <Route
          path="/members"
          element={<Members />}
        >

        </Route>
        <Route
          path="/blogs"
          element={<BlogSlider />}

        >

        </Route>
        <Route
          path="/milestones"
          element={<Milestone />}
          
        >

        </Route>
      </Routes>
      </BrowserRouter> */}
      

      {/* Main here */}
      {/* <SpotlightNewDemo />
      <BlogSlider />
      <Milestone />   
      <Bugs />
      <TestimonialsSection />
      <AnimatedTestimonialsDemo />
      <FAQSection /> */}
      
      {/* <Sponsors /> */}

    </div>

 
      
      
  
     
    
  )
}

export default App
