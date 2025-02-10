import React, { useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const testimonials = [
    {
      content: "CyberTeam's expertise in cybersecurity is unmatched. Their solutions have significantly strengthened our infrastructure.",
      author: "Alex Carter",
      role: "CTO, TechCorp",
      image: "/api/placeholder/40/40"
    },
    {
      content: "The most innovative security team we've worked with. Their proactive approach has saved us from multiple threats.",
      author: "Samantha Lee",
      role: "IT Security Manager",
      image: "/api/placeholder/40/40"
    },
    {
      content: "CyberTeam helped us streamline our security protocols, making our systems more resilient and efficient.",
      author: "Jordan Wright",
      role: "Senior DevOps Engineer",
      image: "/api/placeholder/40/40"
    },
    {
      content: "Their penetration testing services uncovered vulnerabilities we didn't even know existed. Highly recommended!",
      author: "Chris Thompson",
      role: "Cybersecurity Analyst",
      image: "/api/placeholder/40/40"
    },
    {
      content: "With CyberTeam's cutting-edge solutions, we no longer worry about data breaches or compliance issues.",
      author: "Emily Roberts",
      role: "CISO, FinTech Inc.",
      image: "/api/placeholder/40/40"
    },
    {
      content: "Incredible team with deep cybersecurity knowledge. Their incident response strategy saved us from a major attack.",
      author: "Nathan Green",
      role: "Network Security Engineer",
      image: "/api/placeholder/40/40"
    },
    {
      content: "CyberTeam's threat intelligence services have given us real-time insights, keeping us ahead of potential cyber risks.",
      author: "Olivia Adams",
      role: "Head of IT, Global Solutions",
      image: "/api/placeholder/40/40"
    },
    {
      content: "Exceptional service and top-notch security solutions. CyberTeam is a game-changer in the industry.",
      author: "Benjamin Carter",
      role: "CEO, SecureNet",
      image: "/api/placeholder/40/40"
    }
];

const TestimonialCard = ({ content, author, role, image }) => (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
    >
      <p className="text-gray-300 mb-4">{content}</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h4 className="text-white font-medium">{author}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
);

const ScrollingColumn = ({ items, speed = 20 }) => {
    const columnRef = useRef(null);
    const controls = useAnimationControls();

    useEffect(() => {
      const animate = async () => {
        const columnHeight = columnRef.current?.offsetHeight || 0;
        const contentHeight = columnHeight / 2;

        await controls.start({
          y: -contentHeight,
          transition: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          },
        });
      };

      animate();
    }, [speed, controls]);

    return (
      <div className="relative overflow-hidden h-full" ref={columnRef}>
        <motion.div
          animate={controls}
          className="space-y-6"
        >
          {[...items, ...items, ...items].map((item, index) => (
            <TestimonialCard key={`${item.author}-${index}`} {...item} />
          ))}
        </motion.div>
      </div>
    );
};

export default function TestimonialsSection() {
    const splitIntoColumns = (arr, cols) => {
      const result = Array.from({ length: cols }, () => []);
      arr.forEach((item, i) => result[i % cols].push(item));
      return result;
    };

    const columns = splitIntoColumns(testimonials, 3);

    return (
      <section className="bg-black min-h-screen py-20 relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by thousands of people
            </h2>
            <p className="text-xl text-white/60">
              Here's what some of our users have to say about our UI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[800px]">
            {columns.map((column, i) => (
              <div key={i} className="h-full">
                <ScrollingColumn 
                  items={column} 
                  speed={25} // Same speed for all columns
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}