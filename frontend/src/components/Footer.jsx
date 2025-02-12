
import { YouTube } from "@mui/icons-material";
import {  Twitter, Linkedin, Github,Youtube , Instagram} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue text-white py-12">
      <div className="w-[calc(100%-4rem)] mx-auto">
        <div className="flex items-center flex-col justify-center px-2 md:px-10">
          <h2 className="text-2xl md:text-5xl font-bold text-center">
            Cyber Team : Protecting Your Digital World
          </h2>
          <p className="text-sm md:text-2xl max-w-xl mt-6 text-center">
            Stay protected. Cyber threats evolve, but we stay ahead to keep you secure.
          </p>
          
          <div className="flex gap-6 mt-6">
            
            <a href="#" className="text-white hover:text-blue-400" target="_blank">
              <Twitter size={24} />
            </a>
            <a href="https://www.linkedin.com/company/thecyberteam/" className="text-white hover:text-blue-600" target="_blank">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Cyber-Team" target="_blank" className="text-white hover:text-gray-400">
              <Github size={24} />
            </a>
            <a href="https://www.youtube.com/@thecyberteam" target="_blank" className="text-white hover:text-gray-400">
              <YouTube size={24} />
            </a>
            <a href="https://www.instagram.com/cyberteam00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-white hover:text-gray-400">
              <Instagram size={24} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}