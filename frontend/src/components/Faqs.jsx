import { useState } from "react";
import { Plus, Minus, MessageCircle, Zap, ShieldCheck, Settings } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "About CyberTeam",
      icon: <Zap className="w-5 h-5 text-[#8e0d1e]" />,
      questions: [
        {
          question: "What is CyberTeam?",
          answer:
            "CyberTeam is a company focused on raising cybersecurity awareness and providing a platform for enthusiasts to enhance their skills through workshops, training, and resources.",
        },
        {
          question: "Who can join CyberTeam?",
          answer:
            "Anyone passionate about cybersecurity—beginners, students, and professionals—are welcome to join and grow with us.",
        },
      ],
    },
    {
      category: "Services We Offer",
      icon: <ShieldCheck className="w-5 h-5 text-[#8e0d1e]" />,
      questions: [
        {
          question: "What services does CyberTeam offer?",
          answer:
            "Workshops & Training: Hands-on workshops covering a wide range of topics, from hacking techniques to defense strategies, with exclusive content. Capture The Flag (CTF) Events: Real-world inspired challenges designed to test and improve your skills in areas like web exploitation and cryptography.Security Audits & Consulting: Expert audits and consulting services to help businesses strengthen their cybersecurity posture.Exclusive Resources & Insights: Stay updated with our weekly newsletter, Secure Saturdays, offering in-depth cybersecurity insights.Certification Preparation: Get ready for certifications like CEH and CC through real-time hacking experiences and challenges.",
        },
        
      ],
    },
    {
      category: "General Questions",
      icon: <MessageCircle className="w-5 h-5 text-[#8e0d1e]" />,
      questions: [
        {
          question: "How can I attend a CyberTeam workshop?",
          answer:
            "Register online through our website and stay updated on upcoming events via our Instagram, LinkedIn, and WhatsApp channels.",
        },
        {
          question: "Are CyberTeam’s workshops beginner-friendly?",
          answer:
            "Yes! Our workshops cater to all levels, from beginners to advanced, ensuring there's something for everyone.",
        },
        {
          question: "Can I get a certificate for attending a CyberTeam workshop?",
          answer:
            "Yes, we provide participation certificates, and top performers in CTFs and challenges receive certificates of excellence.",
        },
        {
          question: "Does CyberTeam offer internships?",
          answer:
            "Yes, we offer internships in various roles. Follow our website and social media for the latest opportunities.",
        }
      ],
    },
  ];

  return (
    <div className="py-24 bg-[#06080b] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#51292e]/5 to-[#140f11]/5 transition-opacity duration-700"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Settings className="w-6 h-6 text-[#8e0d1e] animate-spin-slow" />
            <span className="text-[#8e0d1e] font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#8e0d1e] to-[#51292e] text-transparent bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services, security features, and support options.
          </p>
        </div>

        {/* FAQ Categories */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {faqs.map((category) => (
            <div
              key={category.category}
              className="bg-[#12131c] backdrop-blur-sm rounded-xl p-6 hover:bg-[#140f11] transition-all duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8e0d1e]/40"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-[#8e0d1e]/20 text-[#8e0d1e] transition-all duration-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              <p className="text-gray-400">{`Find answers about ${category.category.toLowerCase()} and related topics.`}</p>
            </div>
          ))}
        </div> */}

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto bg-[#12131c] backdrop-blur-sm rounded-2xl p-8 transition-all duration-700 hover:shadow-lg hover:shadow-[#8e0d1e]/40">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category} className="mb-8 last:mb-0">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-[#8e0d1e]/20 text-[#8e0d1e]">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{category.category}</h3>
              </div>
              <div className="space-y-2">
                {category.questions.map((faq, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="border-b border-[#51292e] last:border-0 transition-transform duration-700 ease-in-out"
                    onClick={() =>
                      setOpenIndex(openIndex === `${categoryIndex}-${questionIndex}` ? null : `${categoryIndex}-${questionIndex}`)
                    }
                  >
                    <div className="py-6 cursor-pointer group">
                      <div className="flex justify-between items-center">
                        <h4
                          className={`text-lg font-medium transition-all duration-700 ease-in-out ${
                            openIndex === `${categoryIndex}-${questionIndex}`
                              ? "text-[#8e0d1e]"
                              : "text-white group-hover:text-[#8e0d1e]"
                          }`}
                        >
                          {faq.question}
                        </h4>
                        <button className={`flex-shrink-0 ml-4 transition-transform duration-700 ease-in-out ${
                          openIndex === `${categoryIndex}-${questionIndex}` ? "rotate-180" : ""
                        }`}>
                          {openIndex === `${categoryIndex}-${questionIndex}` ? (
                            <Minus className="w-5 h-5 text-[#8e0d1e] transition-all duration-700" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#8e0d1e] transition-all duration-700" />
                          )}
                        </button>
                      </div>
                      <div
                        className={`transition-all duration-700 ease-in-out overflow-hidden ${
                          openIndex === `${categoryIndex}-${questionIndex}` ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#8e0d1e] to-[#51292e] text-white rounded-lg font-semibold transition-all duration-700 hover:shadow-lg hover:shadow-[#8e0d1e]/40 transform hover:-translate-y-1">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
