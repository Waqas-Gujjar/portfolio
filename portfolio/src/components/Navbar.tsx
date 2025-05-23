import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '../utils/shadcn';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, Bars3Icon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionId = sectionElement.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const popInVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: -10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.5
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    })
  };

  const logoText = "Waqas Younas".split("");

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-10 h-10 overflow-hidden rounded-full mr-3 border-2 border-primary/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img 
              src="/images/IMG-20250202-WA0000.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=W+Y&background=100020&color=8844ff&size=200`;
              }}
            />
          </motion.div>
          <span className="flex text-2xl font-bold overflow-hidden">
            {logoText.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block bg-gradient-to-r from-primary to-purple-300 text-transparent bg-clip-text font-['UnifrakturMaguntia']"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          <motion.div 
            className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {["Home", "About", "Services", "Skills", "Experience", "Certifications", "Projects", "Contact"].map((item, index) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium relative group",
                    isActive ? "text-primary" : "text-white hover:text-primary"
                  )}
                  variants={popInVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      layoutId="activeSection"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.span 
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="hidden md:flex items-center space-x-2 flex-shrink-0"
          variants={popInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1 group" 
            asChild
          >
            <motion.a 
              href="/resume.pdf" 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="flex items-center gap-1"
                whileHover={{ x: 2 }}
              >
                <DocumentTextIcon className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                Resume
              </motion.span>
            </motion.a>
          </Button>
          <Button 
            variant="gradient" 
            size="sm" 
            className="flex items-center gap-1 group" 
            asChild
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="flex items-center gap-1"
                whileHover={{ x: 2 }}
              >
                <EnvelopeIcon className="w-4 h-4 group-hover:rotate-6 transition-transform" />
                Contact
              </motion.span>
            </motion.a>
          </Button>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto',
              opacity: 1
            }}
            exit={{ 
              height: 0,
              opacity: 0
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <motion.div 
              className="px-4 py-4 space-y-1"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {["Home", "About", "Services", "Skills", "Experience", "Certifications", "Projects", "Contact"].map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                      isActive 
                        ? "bg-primary/20 text-primary" 
                        : "text-white hover:bg-primary/10 hover:text-primary"
                    )}
                    onClick={toggleMenu}
                    variants={popInVariants}
                    whileHover={{ 
                      x: 8,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                  >
                    {item}
                  </motion.a>
                );
              })}
              <motion.div 
                className="mt-4 grid grid-cols-2 gap-2"
                variants={popInVariants}
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-center group" 
                  asChild
                >
                  <motion.a 
                    href="/resume.pdf" 
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <DocumentTextIcon className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
                    Resume
                  </motion.a>
                </Button>
                <Button 
                  variant="gradient" 
                  size="sm" 
                  className="w-full justify-center group" 
                  asChild
                >
                  <motion.a 
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EnvelopeIcon className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
                    Contact
                  </motion.a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar; 