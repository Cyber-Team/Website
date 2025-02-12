import { motion } from 'framer-motion';
import BoxBS from '../components/Boxbss';
import '../styles/Bugs.css';
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
const Bugs = () => {
  // Array of image links
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
    bangladesh
   
  ];

  const BugsPerRow = bugImages.length /2; // Number of bugs per row

  return (
    <div className="BugsMain">
      <div className="HeadingSpon">Our Bugs</div>
      <div className="allBugs">
        {/* Row 1 (Left scroll) */}
        <motion.div
          className="sponsorRow"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(BugsPerRow)].map((_, index) => (
            <BoxBS key={index} image={bugImages[index % bugImages.length]} />
          ))}
        </motion.div>

        {/* Row 2 (Right scroll) */}
        <motion.div
          className="sponsorRow"
          animate={{ x: ['-100%', '0%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(BugsPerRow)].map((_, index) => (
            <BoxBS key={index} image={bugImages[(index + BugsPerRow) % bugImages.length]} />
          ))}
        </motion.div>
      </div>

      {/* Add gradient overlays */}
      <div className="gradient-overlay left" />
      <div className="gradient-overlay right" />
    </div>
  );
};

export default Bugs;