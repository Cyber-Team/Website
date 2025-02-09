import { motion } from 'framer-motion';
import BoxBS from '../components/Boxbss';
import sp from '../assets/sp.png';
import '../styles/Bugs.css';

const Bugs = () => {
  const BugsPerRow = 7;

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
          {[...Array(BugsPerRow * 2)].map((_, index) => (
            <BoxBS key={index} image={sp} />
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
          {[...Array(BugsPerRow * 2)].map((_, index) => (
            <BoxBS key={index} image={sp} />
          ))}
        </motion.div>

        {/* Row 3 (Left scroll) */}
        <motion.div
          className="sponsorRow"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(BugsPerRow * 2)].map((_, index) => (
            <BoxBS key={index} image={sp} />
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