import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ZapIcon, ShieldCheck, Settings } from 'lucide-react';


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Getting Started',
      icon: <ZapIcon className="w-5 h-5" />,
      questions: [
        {
          question: "How do I get started with CyberTeam Elite?",
          answer: "Getting started is easy! Simply sign up for an account, complete your security assessment, and our team will guide you through the onboarding process. We provide comprehensive documentation and support to ensure a smooth start."
        },
        {
          question: "What security features are included in the basic plan?",
          answer: "Our basic plan includes essential security features such as real-time threat monitoring, automated security scans, incident response support, and access to our security dashboard. You'll also get regular security reports and basic training materials."
        }
      ]
    },
    {
      category: 'Security & Privacy',
      icon: <ShieldCheck className="w-5 h-5" />,
      questions: [
        {
          question: "How do you handle data privacy and protection?",
          answer: "We implement industry-leading encryption standards and follow strict data protection protocols. Your data is encrypted both in transit and at rest, and we comply with major privacy regulations including GDPR and CCPA."
        },
        {
          question: "What certifications does your team hold?",
          answer: "Our team holds various industry-recognized certifications including CISSP, CEH, CompTIA Security+, and ISO 27001 Lead Auditor. We regularly update our certifications to stay current with industry standards."
        }
      ]
    },
    {
      category: 'Support',
      icon: <MessageCircle className="w-5 h-5" />,
      questions: [
        {
          question: "What kind of support do you offer?",
          answer: "We provide 24/7 technical support through multiple channels including live chat, email, and phone. Enterprise clients get access to a dedicated support team and priority response times."
        },
        {
          question: "How quickly do you respond to security incidents?",
          answer: "Our incident response team is available 24/7 with a guaranteed response time of 15 minutes for critical incidents. We follow a structured incident response plan to ensure quick and effective resolution."
        }
      ]
    }
  ];

  const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div 
      className={`border-b border-gray-800 last:border-0 transition-transform duration-700 ease-in-out ${
        isOpen ? 'transform scale-100' : 'transform scale-98'
      }`}
      onClick={onClick}
    >
      <div className="py-6 cursor-pointer group">
        <div className="flex justify-between items-center">
          <h4 className={`text-lg font-medium transition-all duration-700 ease-in-out ${
            isOpen ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
          }`}>
            {question}
          </h4>
          <button className={`flex-shrink-0 ml-4 transition-transform duration-700 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}>
            {isOpen ? (
              <Minus className="w-5 h-5 text-cyan-500 transition-all duration-700" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-all duration-700" />
            )}
          </button>
        </div>
        <div 
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          style={{
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <p className="text-gray-400 leading-relaxed transform transition-all duration-700 ease-in-out">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Three.js Background */}
     

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-500/5 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-grid-white/5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Settings className="w-6 h-6 text-cyan-500 animate-spin-slow" />
            <span className="text-cyan-500 font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"> Questions </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services, security features, and support options.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {faqs.map((category, idx) => (
            <div 
              key={category.category}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 transition-all duration-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              <p className="text-gray-400">
                {`Find answers about ${category.category.toLowerCase()} and related topics.`}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-700 hover:shadow-lg hover:shadow-cyan-500/10">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category} className="mb-8 last:mb-0">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.category}</h3>
              </div>
              <div className="space-y-2">
                {category.questions.map((faq, questionIndex) => (
                  <FAQItem
                    key={questionIndex}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === `${categoryIndex}-${questionIndex}`}
                    onClick={() => setOpenIndex(
                      openIndex === `${categoryIndex}-${questionIndex}` 
                        ? null 
                        : `${categoryIndex}-${questionIndex}`
                    )}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-700 ease-in-out hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;