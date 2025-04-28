import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    // Handle cursor interaction with clickable elements
    const handleMouseOver = () => setCursorVariant("hover");
    const handleMouseOut = () => setCursorVariant("default");

    // Apply to all buttons, links, and interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  // Variants for different cursor states
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(138, 43, 226, 0)",
      border: "2px solid var(--color-purple)",
      transition: {
        type: "spring",
        mass: 0.3, // Lower mass for quicker response
        stiffness: 800,
        damping: 20
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(138, 43, 226, 0.2)",
      border: "2px solid var(--color-purple-light)",
      transition: {
        type: "spring",
        mass: 0.5,
        stiffness: 400,
        damping: 20
      }
    }
  };

  // Don't show custom cursor on touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={{
          default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          },
          hover: {
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            scale: 1.5
          }
        }}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default AnimatedCursor; 