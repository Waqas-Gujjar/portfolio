import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950/20 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
              Waqas Younas
            </h2>
            <p className="text-gray-400 mb-4">
              Back-End Developer specializing in creating REST-api and FAST-API, and build application in Django , interactive web experiences with modern technologies.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-primary transition-colors duration-300">Experience</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors duration-300">Projects</a></li>
              <li><a href="#certifications" className="text-gray-400 hover:text-primary transition-colors duration-300">Certifications</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>
         
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">Rawalpindi, Pakistan</p>
            <a href="mailto:wg4941792@gmail.com" className="text-gray-400 hover:text-primary transition-colors duration-300">
              wg4941792@gmail.com
            </a>
            
            <div className="flex justify-center md:justify-end mt-4 space-x-4">
              <a
                href="https://github.com/Waqas-Gujjar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/waqasyounas1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="https://wa.me/923255908332"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-6 border-t-2 border-primary/30 text-center text-gray-500">
          <p>© {currentYear} Waqas Younas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 