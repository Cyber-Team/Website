import React, { useEffect, useState } from 'react';
import { CircuitBoard, Shield, Code2, ChevronRight, ExternalLink } from 'lucide-react';
import ParticleBackground from './Background';

const He = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    new ParticleBackground();
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative">
        {/* Left side - Content */}
        <div className={`lg:w-1/2 space-y-8 ml-20 mt-20 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="flex items-center space-x-2 text-cyan-500 hover:scale-105 transition-transform cursor-pointer">
            <CircuitBoard className="w-6 h-6" />
            <span className="text-lg font-semibold">CyberTeam Elite</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Securing the
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient"> Digital </span>
            Future
          </h1>
          
          <p className="text-gray-300 text-xl max-w-xl leading-relaxed">
            Join our elite team of cybersecurity experts protecting critical infrastructure and advancing digital innovation through cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-cyan-500/30 text-white rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors flex items-center">
              Learn More
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-12 pt-8">
            <div className="flex flex-col hover:transform hover:scale-105 transition-transform cursor-pointer">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">500+</span>
              <span className="text-gray-400">Projects Completed</span>
            </div>
            <div className="flex flex-col hover:transform hover:scale-105 transition-transform cursor-pointer">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">98%</span>
              <span className="text-gray-400">Success Rate</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Enhanced Decorative Elements */}
        <div className={`lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative w-[500px] h-[500px]">
            {/* Animated outer ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse delay-150"></div>
            
            {/* Floating icons with enhanced animations */}
            <div className="absolute top-1/4 left-1/4 p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-cyan-500/20 transform hover:scale-110 transition-all animate-float">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transform hover:scale-110 transition-all animate-float-delayed">
              <Code2 className="w-8 h-8 text-blue-400" />
            </div>
            
            {/* Enhanced center piece */}
            <div className="absolute inset-1/4 bg-gray-800/90 backdrop-blur-xl rounded-full flex items-center justify-center transform hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/20">
              <CircuitBoard className="w-24 h-24 text-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 3s ease-in-out infinite;
    animation-delay: 1.5s;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
`;
document.head.appendChild(style);

export default He;