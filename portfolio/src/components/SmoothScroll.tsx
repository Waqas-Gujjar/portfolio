import { ReactNode, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  // Set up smooth scrolling with physics-based spring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optional: Initialize smooth scroll behavior globally
  useEffect(() => {
    // Add smooth scroll to document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Cleanup when component unmounts
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {/* Progress bar that shows scroll position */}
      <motion.div 
        className="progress-bar"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export default SmoothScroll; 