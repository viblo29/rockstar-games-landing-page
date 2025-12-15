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
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;