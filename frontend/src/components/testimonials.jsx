import { useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const testimonials = [
    {
      content: "My team, Floorp, comprising of Abhishek Girish Sangeetha, Chirag Jamariya, and myself, recently participated in Paradox'24, a 24-hour Capture the Flag (CTF) cybersecurity competition organized by the IEEE Computer Society -VITC! Competing against over 170 participants from various colleges, we proudly secured the 16th position.The true measure of success, however, lies in the exceptional growth demonstrated by my teammates, who were new to the CTF landscape. The fun and informative foundational cybersecurity workshop conducted by Abhishek Kumar, Aditi Rai, and Ansh Sharma from the Cyber Team proved instrumental in their rapid development. Their ability to quickly grasp complex concepts and apply them effectively during the competition was very impressive. ",
      author: "Abhinav Anil",
      role: "Open Source Enthusiast, VITC 27",
      image: "/testpic.jpg"
    },
    {
      content: "Hello bhaiya! once again, thank you so so much for today's session! Please aise hi sessions karate rahiye aage bhi!!! bohot kuch seekhno ko mila aaj :)",
      author: "Aditya Vardhan Sharma ",
      role: "Student",
      image: "/testpic.jpg"
    },
    {
      content: "Thanks a lot to the Linux club Team for such an amazing event. Special credits to @Amreal.py and the tech team for organising things so well. (Loved the new dynamic ctfs)",
      author: "Faizaan",
      role: "VIT Chennai",
      image: "/testpic.jpg"
    },
    {
      content: "I agree. This time it was much more immersive and adrenaline pumping than password 2023, especially because of the new dynamic style ctfs",
      author: "Sugam Sharma",
      role: "Student",
      image: "/testpic.jpg"
    },
    {
      content: "Ahhhh it has been an awesome event, great experience!! Congratulations to all the fellow participants for making this competition even more competititve, learnt a lot of new things And kudos to Cyberteam for hosting this amazing event flawlessly Will be eagerly waiting for the next event!! ",
      author: "Bhuvan",
      role: "Unknown",
      image: "/testpic.jpg"
    },
    {
      content: "Special thanks to Abhishek Kumar, Ansh Sharma and Aditi Rai from Cyber Team for making this event as fun as it was. Looking forward to more such opportunities to grow and excel!",
      author: "Unknown",
      role: "Unknown",
      image: "/testpic.jpg"
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