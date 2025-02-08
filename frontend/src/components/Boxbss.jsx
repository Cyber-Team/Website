
import '../styles/boxbs.css';
import { motion } from 'framer-motion';

const BoxBS = ({ image }) => {
  return (
    <motion.div
      className="BoxBS"
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <img src={image} alt="Sponsor" height="125" width="125" />
    </motion.div>
  );
};

export default BoxBS;