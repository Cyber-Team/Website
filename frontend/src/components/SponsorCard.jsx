import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, Star, Shield, Trophy, Award } from 'lucide-react';

// SponsorCard Component
const SponsorCard = ({ tier, company }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTierIcon = (tierName) => {
    switch (tierName) {
      case 'Platinum': return <Award className="w-6 h-6" />;
      case 'Gold': return <Trophy className="w-6 h-6" />;
      case 'Silver': return <Star className="w-6 h-6" />;
      default: return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
        isHovered ? 'blur-xl opacity-70' : 'blur-lg opacity-40'
      } bg-gradient-to-r ${tier.gradientClasses}`}></div>

      {/* Card Content */}
      <div className="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full transform hover:scale-[1.02]">
        {/* Tier Badge */}
        <div className="absolute -top-4 -right-4 p-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
          <div className={`p-2 rounded-full ${tier.iconBg}`}>
            {getTierIcon(tier.name)}
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent tracking-tight flex items-center gap-2 leading-none">
            {tier.name}
          </h3>
          <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${tier.badgeClasses}`}>
            {tier.badge}
          </span>
        </div>

        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            {/* Centered Image Container */}
            <div className="flex items-center justify-center relative group-hover:scale-105 transition-transform">
              <div className={`absolute inset-0  rounded-xl blur-md opacity-60 ${tier.gradientClasses}`}></div>
              <img
                src="/api/placeholder/100/100"
                alt={company.name}
                className="relative w-16 h-16 rounded-xl object-cover border-2 border-gray-800"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <h4 className="text-white font-semibold text-lg mb-1">{company.name}</h4>
              <p className="text-gray-400 leading-relaxed">{company.description}</p>
            </div>
          </div>
        </div>

          {/* Features */}
          <div className="space-y-3">
            {tier.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-gray-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <a 
              href="#" 
              className={`group flex items-center font-medium ${tier.textColor} hover:opacity-80 transition-opacity`}
            >
              Learn more about partnership 
              <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Sponsors Section
const SponsorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const SPONSOR_DATA = {
    tiers: {
      platinum: {
        name: 'Platinum',
        badge: 'Enterprise',
        gradientClasses: 'from-cyan-500 to-blue-500',
        badgeClasses: 'bg-cyan-500/10 text-cyan-400',
        iconBg: 'bg-cyan-500/20 text-cyan-400',
        textColor: 'text-cyan-400',
        features: [
          'Priority Support & Training',
          'Custom Integration Solutions',
          'Dedicated Account Manager'
        ]
      },
      gold: {
        name: 'Gold',
        badge: 'Premium',
        gradientClasses: 'from-amber-500 to-orange-500',
        badgeClasses: 'bg-amber-500/10 text-amber-400',
        iconBg: 'bg-amber-500/20 text-amber-400',
        textColor: 'text-amber-400',
        features: [
          'Advanced Security Features',
          'Premium Support Package',
          'Quarterly Business Reviews'
        ]
      },
      silver: {
        name: 'Silver',
        badge: 'Growth',
        gradientClasses: 'from-gray-400 to-gray-500',
        badgeClasses: 'bg-gray-500/10 text-gray-300',
        iconBg: 'bg-gray-500/20 text-gray-300',
        textColor: 'text-gray-300',
        features: [
          'Standard Security Suite',
          'Email Support',
          'Monthly Performance Reports'
        ]
      }
    },
    companies: [
      {
        name: 'TechGuard Solutions',
        description: 'Leading provider of enterprise cybersecurity solutions and advanced threat protection systems.',
      },
      {
        name: 'NetSecure Global',
        description: 'Innovative network security solutions for modern digital infrastructures.',
      },
      {
        name: 'CyberShield Inc',
        description: 'Protecting businesses with next-generation security intelligence.',
      }
    ]
  };

  return (
    <div className="py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="text-cyan-400 font-medium tracking-wider text-sm uppercase">Trusted Partners</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            Our Industry
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"> Leaders </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join forces with global technology leaders who are shaping the future of cybersecurity and digital innovation.
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {Object.entries(SPONSOR_DATA.tiers).map(([key, tier], index) => (
            <div
              key={key}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <SponsorCard
                tier={tier}
                company={SPONSOR_DATA.companies[index]}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mx-auto">
            Become a Sponsor
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Add the grid background style
const style = document.createElement('style');
style.textContent = `
  .bg-grid-white\/5 {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;
document.head.appendChild(style);

export default SponsorsSection;