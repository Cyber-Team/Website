
import "../../styles/Navbar.css";
import logo from "../../../public/logo.png"; // Ensure this image is in the same folder
//import { useNavigate,Router } from 'react-router-dom';
const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-links">
       
        <a href="/"> Home </a>
        <a href="#"> Members</a>
        <a href="#"> Blogs</a>
        <a href="#"> Milestones</a>
        
      </div>

      <img src={logo} alt="Logo" className="logo" />
    </nav>
  );
};

export default Navbar;
