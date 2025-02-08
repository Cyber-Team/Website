import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Award, BadgeCheck } from 'lucide-react';

const SponsorSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sponsors = [
    { tier: 'Diamond', companies: ['Microsoft', 'Google', 'Amazon'] },
    { tier: 'Platinum', companies: ['Intel', 'IBM', 'Oracle'] },
    { tier: 'Gold', companies: ['Cisco', 'Dell', 'HP'] }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-cyan-500" />
            <span className="text-lg font-semibold text-cyan-500">Our Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Backed by Industry
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"> Leaders </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Partnering with world-class companies to deliver cutting-edge cybersecurity solutions and drive innovation.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid gap-8 md:gap-12">
          {sponsors.map((tier, index) => (
            <div 
              key={tier.tier}
              className={`transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {/* Tier Header */}
              <div className="flex items-center space-x-4 mb-6">
                {tier.tier === 'Diamond' && <Award className="w-8 h-8 text-cyan-500" />}
                {tier.tier === 'Platinum' && <Star className="w-8 h-8 text-blue-500" />}
                {tier.tier === 'Gold' && <BadgeCheck className="w-8 h-8 text-yellow-500" />}
                <h3 className="text-2xl font-bold text-white">{tier.tier} Partners</h3>
              </div>

              {/* Sponsors Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tier.companies.map((company) => (
                  <div 
                    key={company}
                    className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    {/* Placeholder logo - replace with actual company logos */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-white">{company}</span>
                      <ChevronRight className="w-5 h-5 text-cyan-500 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <div className="mt-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                      {tier.tier} Level Partner
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center justify-center mx-auto hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all">
            Become a Partner
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Add these styles to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  .bg-grid-white\/5 {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;
document.head.appendChild(style);

export default SponsorSection;