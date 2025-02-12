import React from 'react';
import { motion } from 'framer-motion';
import bangladesh from "../assets/BangladeshNavy.svg.png"
import GoaPolice from "../assets/GoaPolice.png"
import Google from "../assets/Google_logo.svg.webp"
import headscale from "../assets/headscale.png"
import igl from "../assets/IGL.png"
import mhgov from "../assets/mhgov.png"
import nobull from "../assets/nobull.png"
import pvr from "../assets/png-clipart-pvr-cinemas-logo-cinema-logos-thumbnail.png"
import punjab from "../assets/punjab-gov.svg"
import razorpay from "../assets/razorpay.webp"
import srilanka from "../assets/SriLanka.svg.webp"
import vit from "../assets/vit.svg"
import zingsec from "../assets/zingsec.svg"
const BoxBS = ({ image }) => (
  <div className="flex items-center justify-center w-48 h-32 bg-gray-800 rounded-lg overflow-hidden">
    <img 
      src={image} 
      alt="Logo" 
      className="max-w-full max-h-full object-contain p-4"
    />
  </div>
);

const Bugs = () => {
  // Array of image paths - replace these with your actual image imports
  const bugImages = [
    bangladesh,
    GoaPolice,
    Google,
    headscale,
    igl,
    mhgov,
    nobull,
    pvr,
    punjab,
    razorpay,
    srilanka,
    vit,
    zingsec,
    bangladesh,
    GoaPolice,
    Google,
    headscale,
    igl,
    mhgov,
    nobull,
    pvr,
    punjab,
    razorpay,
    srilanka,
    vit,
    zingsec,
  ];

  const bugsPerRow = bugImages.length / 2;

  return (
    <div className="relative w-screen h-[70vh] bg-[#101010] flex flex-col items-center justify-center text-white overflow-hidden">
      <h2 className="text-5xl font-bold mb-8 p-5">Our Bugs</h2>
      
      <div className="flex flex-col gap-8 h-[70vh] relative overflow-hidden w-screen">
        {/* Row 1 - Left scroll */}
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(bugsPerRow)].map((_, index) => (
            <BoxBS key={index} image={bugImages[index % bugImages.length]} />
          ))}
        </motion.div>

        {/* Row 2 - Right scroll */}
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ['-100%', '0%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(bugsPerRow)].map((_, index) => (
            <BoxBS key={index} image={bugImages[(index + bugsPerRow) % bugImages.length]} />
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 pointer-events-none z-10 bg-gradient-to-r from-[#101010] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 pointer-events-none z-10 bg-gradient-to-l from-[#101010] to-transparent" />
      </div>
    </div>
  );
};

export default Bugs;