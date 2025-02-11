import React, { useState, useEffect } from "react";
import { Star, ChevronRight, Award, BadgeCheck } from "lucide-react";

const SponsorSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sponsors = [
    { tier: "Diamond", companies: ["Microsoft", "Google", "Amazon"] },
    { tier: "Platinum", companies: ["Intel", "IBM", "Oracle"] },
    { tier: "Gold", companies: ["Cisco", "Dell", "HP"] },
  ];

  return (
    <div className="bg-[#06080b] py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#51292e]/10 to-[#140f11]/10 animate-pulse"></div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-[#8e0d1e]" />
            <span className="text-lg font-semibold text-[#8e0d1e]">
              Our Trusted Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Backed by Industry{" "}
            <span className="bg-gradient-to-r from-[#8e0d1e] to-[#51292e] text-transparent bg-clip-text">
              Leaders
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Partnering with world-class companies to deliver cutting-edge
            cybersecurity solutions and drive innovation.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid gap-8 md:gap-12">
          {sponsors.map((tier, index) => (
            <div
              key={tier.tier}
              className={`transform transition-all duration-1000 delay-${
                index * 200
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Tier Header */}
              <div className="flex items-center space-x-4 mb-6">
                {tier.tier === "Diamond" && (
                  <Award className="w-8 h-8 text-[#8e0d1e]" />
                )}
                {tier.tier === "Platinum" && (
                  <Star className="w-8 h-8 text-[#51292e]" />
                )}
                {tier.tier === "Gold" && (
                  <BadgeCheck className="w-8 h-8 text-[#b3b3b3]" />
                )}
                <h3 className="text-2xl font-bold text-white">
                  {tier.tier} Partners
                </h3>
              </div>

              {/* Sponsors Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tier.companies.map((company) => (
                  <div
                    key={company}
                    className="group relative bg-[#12131c] backdrop-blur-sm p-8 rounded-xl border border-[#51292e] hover:border-[#8e0d1e]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8e0d1e]/20"
                  >
                    {/* Placeholder logo - replace with actual company logos */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-white">
                        {company}
                      </span>
                      <ChevronRight className="w-5 h-5 text-[#8e0d1e] transform group-hover:translate-x-1 transition-transform" />
                    </div>

                    <div className="mt-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                      {tier.tier} Level Partner
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8e0d1e]/0 to-[#51292e]/0 group-hover:from-[#8e0d1e]/5 group-hover:to-[#51292e]/5 rounded-xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-[#8e0d1e] to-[#51292e] text-white rounded-lg font-semibold flex items-center justify-center mx-auto hover:shadow-lg hover:shadow-[#8e0d1e]/20 transform hover:-translate-y-1 transition-all">
            Become a Partner
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Add these styles to your global CSS or Tailwind config
const style = document.createElement("style");
style.textContent = `
  .bg-grid-white\/5 {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;
document.head.appendChild(style);

export default SponsorSection;
