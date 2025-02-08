// import Sponsors from './pages/Sponsors'
import './App.css'
import BlogSlider from './components/BlogSection';
import Clients from './components/Clients';
// import Boxbss from './components/Boxbss'
import "./components/MemberCard";
import Milestone from './components/Milestone';

import "./pages/Members"
import Members from './pages/Members';
function App() {


  return (
  
    <div className="bg-gray-900 text-white min-h-screen">
      <Members />
      {/* <BlogSlider/> */}
      <Clients />
      <Milestone />
    </div>
      
      
  
     
    
  )
}

export default App
