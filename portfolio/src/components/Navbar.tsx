import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '../utils/shadcn';
import { motion } from 'framer-motion';
import { XMarkIcon, Bars3Icon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 overflow-hidden rounded-full mr-3 border-2 border-primary/30">
            <img 
              src="images\image.jpg.HEIC.jpg" 
              alt="Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=W+Y&background=100020&color=8844ff&size=200`;
              }}
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-300 text-transparent bg-clip-text">
            Waqas Younas
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {["Home", "About", "Skills", "Experience", "Certifications", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.div 
            className="ml-4 flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
              <a href="/resume.pdf" download>
                <DocumentTextIcon className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <Button variant="gradient" size="sm" className="flex items-center gap-1" asChild>
              <a href="#contact">
                <EnvelopeIcon className="w-4 h-4" />
                Contact
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-1">
            {["Home", "About", "Experience", "Certifications", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-center" asChild>
                <a href="/resume.pdf" download>
                  <DocumentTextIcon className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
              <Button variant="gradient" size="sm" className="w-full justify-center" asChild>
                <a href="#contact">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar; 