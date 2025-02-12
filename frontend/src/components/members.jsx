import { AnimatedTestimonials } from "./ui/animated-testimonials";
import abhishek from "../assets/abhishek.jpg"
import aditi from "../assets/aditi.jpg"
import nyasa from "../assets/nyasa.jpg"
import niket from "../assets/niket.jpg"
import ansh from "../assets/ansh.jpg"
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Security is not a product, but a process",
      name: "Abhishek Kumar",
      designation: "Founder Of CyberTeam",
      src: abhishek,
    },
    {
      quote:
        "True cyber security is preparing for what's NEXT, not what was LAST.",
      name: "Aditi Rai",
      designation: "Co-Founder Of CyberTeam",
      src: aditi,
    },
    {
      quote:
        "Never be cruel, never be cowardly, never give up and never give in, always try to be nice, but never fail to be kind.",
      name: "Ansh Sharma",
      designation: "Technical Lead",
      src: ansh,
    },
    {
      quote:
        "In cybersecurity, trust no one—verify everything",
      name: "Nysa",
      designation: "Content Lead",
      src: nyasa,
    },
    {
      quote:
        "The quieter you become, the more you are able to hear the vulnerabilities",
      name: "Niket Girdhar",
      designation: "Outreach Lead",
      src: niket,
    }

  ];
  return (
    <div className="bg-[#06080b]">
      <h1 className="text-5xl font-bold text-center py-10 \">Meet Our <span className="text-red-700"> Core </span> Team</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
