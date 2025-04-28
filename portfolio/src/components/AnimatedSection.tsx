import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0.2,
  direction = 'up',
  id
}) => {
  // Get initial direction values
  const getInitialDirection = () => {
    switch(direction) {
      case 'up': return { y: 100, opacity: 0 };
      case 'down': return { y: -100, opacity: 0 };
      case 'left': return { x: 100, opacity: 0 };
      case 'right': return { x: -100, opacity: 0 };
      default: return { y: 100, opacity: 0 };
    }
  };

  // Reset animation values
  const resetPosition = () => {
    if (direction === 'up' || direction === 'down') {
      return { y: 0, opacity: 1 };
    } else {
      return { x: 0, opacity: 1 };
    }
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial={getInitialDirection()}
      whileInView={resetPosition()}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smooth motion
      }}
    >
      {/* Background glow effects */}
      <div className="section-bg-glow section-bg-glow-1"></div>
      <div className="section-bg-glow section-bg-glow-2"></div>
      
      {/* Animated particles */}
      <div className="section-particles">
        <div className="section-particle"></div>
        <div className="section-particle"></div>
        <div className="section-particle"></div>
        <div className="section-particle"></div>
        <div className="section-particle"></div>
      </div>
      
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 