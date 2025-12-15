import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const AnimationWrapper = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // Start slightly lower and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to original position and visible
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of element is in view, only once
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.25, 0.4, 0.25, 1] // Professional "smooth" easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;