import { useState, useEffect, FormEvent, useRef } from 'react'
import { initCustomCursor } from './utils/cursor.ts'
// Remove the import for circles
// import { initRandomCircles } from './utils/circles.ts'
import emailjs from '@emailjs/browser'
// Import Heroicons
import { 
  CodeBracketIcon, 
  CommandLineIcon,
  ServerIcon, 
  CloudIcon, 
  WrenchScrewdriverIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  UserIcon,
  BriefcaseIcon,
  XMarkIcon,
  Bars3Icon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import Projects from './components/Projects'

// Import our new animation components
import SmoothScroll from './components/SmoothScroll'
import AnimatedSection from './components/AnimatedSection'
import AnimatedCursor from './components/AnimatedCursor'
import { motion, AnimatePresence } from 'framer-motion'

// Remove unused videos object
// const videos = {
//   main: '/videos/background.mp4' // You'll need to add this video file to your public folder
// }

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formSubject, setFormSubject] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize custom cursor only, remove random circles
  useEffect(() => {
    initCustomCursor();
    
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Form submission handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    if (formRef.current) {
      // Use EmailJS to send the form data
      emailjs.sendForm(
        'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormSubmitting(false);
        setFormSubmitted(true);
        
        // Reset form after submission
        setFormName('');
        setFormEmail('');
        setFormSubject('');
        setFormMessage('');
        
        // Reset success message after some time
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
        setFormSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
    } else {
      setFormSubmitting(false);
      console.error('Form reference is null');
    }
  }

  return (
    <SmoothScroll>
      <AnimatedCursor />

      {/* Custom Cursor Elements - these will be managed by our animation components */}
      <div className="cursor"></div>
      <div className="cursor-dot"></div>

      {/* Main Video Background */}
      <div className="video-background">
        <motion.div 
          className="video-background-fallback animated-gradient-bg"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        ></motion.div>
        {/* Use only the fallback background until you have a video */}
        <video autoPlay muted loop playsInline>
          {/* <source src={videos.main} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar-container">
          <motion.a 
            href="#hero" 
            className="logo"
            whileHover={{ 
              scale: 1.05,
              color: "var(--color-purple-light)" 
            }}
          >
            Waqas Younas
          </motion.a>
          
          {/* Desktop menu */}
          <div className="nav-links">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item}`} 
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index + 0.3,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -3,
                  color: "var(--color-purple)" 
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
          
          {/* Nav buttons */}
          <div className="nav-buttons">
            <motion.a 
              href="/resume.pdf" 
              className="btn btn-sm btn-primary"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DocumentTextIcon className="w-4 h-4 mr-1" />
              Resume
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-sm btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <EnvelopeIcon className="w-4 h-4 mr-1" />
              Contact
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            className="mobile-menu-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['about', 'skills', 'experience', 'projects', 'contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item}`} 
                  onClick={toggleMenu} 
                  className="mobile-nav-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, color: "var(--color-purple)" }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
              <motion.div 
                className="mobile-nav-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href="/resume.pdf" 
                  className="btn btn-sm btn-primary"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DocumentTextIcon className="w-4 h-4 mr-1" />
                  Resume
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn btn-sm btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <EnvelopeIcon className="w-4 h-4 mr-1" />
                  Contact
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <AnimatedSection className="hero" direction="up">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
            >
              Hi, I'm <motion.span 
                className="text-primary"
                animate={{ 
                  color: ['var(--color-purple)', 'var(--color-purple-light)', 'var(--color-purple)'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                Waqas Younas
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Python/Django Developer | Cloud Platforms | DevOps Enthusiast
            </motion.h2>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Software Engineer experienced in Python, Django, REST APIs, AWS deployment, PostgreSQL.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.a 
                href="/resume.pdf" 
                className="btn btn-primary"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Contact Me
              </motion.a>
            </motion.div>
          </div>
          <motion.div 
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Waqas Younas" 
              className="profile-image"
              whileHover={{ rotate: [-1, 1, -1], transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" } }}
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Me */}
      <AnimatedSection className="about-section" direction="right">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Learn more about my journey and passion for software development
            </p>
          </div>

          <div className="about-content-wrapper">
            <div className="about-main-content">
              <div className="about-text-container">
                <h3 className="about-heading">
                  <span className="text-primary">Full-stack Developer</span> with a focus on backend excellence
                </h3>
                
                <p className="about-text">
                  I'm a skilled Software Engineer with expertise in Python, Django, and cloud technologies. 
                  My journey in software development has been driven by a passion for creating efficient, 
                  scalable solutions that solve real-world problems.
                </p>
                
                <p className="about-text">
                  I specialize in building robust backend systems with Django and Django REST Framework, 
                  deploying applications on cloud platforms, and implementing efficient database solutions 
                  with PostgreSQL, MySQL, and SQLite.
                </p>
                
                <div className="about-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon-container">
                      <ServerIcon className="highlight-icon" />
                    </div>
                    <div className="highlight-content">
                      <h4 className="highlight-title">Backend Expertise</h4>
                      <p className="highlight-text">Specialized in Django/Python ecosystem with a focus on API development and performance optimization</p>
                    </div>
                  </div>
                  
                  <div className="highlight-item">
                    <div className="highlight-icon-container">
                      <CloudIcon className="highlight-icon" />
                    </div>
                    <div className="highlight-content">
                      <h4 className="highlight-title">Cloud Solutions</h4>
                      <p className="highlight-text">Experience with AWS services including EC2, S3, RDS, and Lambda for scalable application deployment</p>
                    </div>
                  </div>
                  
                  <div className="highlight-item">
                    <div className="highlight-icon-container">
                      <CodeBracketIcon className="highlight-icon" />
                    </div>
                    <div className="highlight-content">
                      <h4 className="highlight-title">Full-Stack Capabilities</h4>
                      <p className="highlight-text">Proficient in React and modern frontend technologies to create responsive, user-friendly interfaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-timeline">
              <h3 className="about-timeline-title">My Journey</h3>
              
              <div className="about-timeline-item">
                <div className="about-timeline-point"></div>
                <div className="about-timeline-content">
                  <h4 className="about-timeline-date">2016</h4>
                  <p className="about-timeline-text">Started my programming journey with Python</p>
                </div>
              </div>
              
              <div className="about-timeline-item">
                <div className="about-timeline-point"></div>
                <div className="about-timeline-content">
                  <h4 className="about-timeline-date">2017</h4>
                  <p className="about-timeline-text">First professional role as Junior Web Developer</p>
                </div>
              </div>
              
              <div className="about-timeline-item">
                <div className="about-timeline-point"></div>
                <div className="about-timeline-content">
                  <h4 className="about-timeline-date">2019</h4>
                  <p className="about-timeline-text">Specialized in Django and backend development</p>
                </div>
              </div>
              
              <div className="about-timeline-item">
                <div className="about-timeline-point"></div>
                <div className="about-timeline-content">
                  <h4 className="about-timeline-date">2021</h4>
                  <p className="about-timeline-text">Advanced to Senior Django Developer position</p>
                </div>
              </div>
              
              <div className="about-timeline-item">
                <div className="about-timeline-point"></div>
                <div className="about-timeline-content">
                  <h4 className="about-timeline-date">Present</h4>
                  <p className="about-timeline-text">Working on cloud-native applications and mentoring junior developers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="skills-section" direction="left">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">
              Technologies and tools I work with
            </p>
          </div>

          <div className="skills-container">
            <div className="skill-card">
              <div className="skill-icon-container">
                <CommandLineIcon className="skill-icon" />
              </div>
              <h3 className="skill-category">Backend Development</h3>
              <ul className="skill-list">
                <li className="skill-item">Python</li>
                <li className="skill-item">Django</li>
                <li className="skill-item">Django REST Framework</li>
                <li className="skill-item">Flask</li>
                <li className="skill-item">FastAPI</li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-icon-container">
                <CodeBracketIcon className="skill-icon" />
              </div>
              <h3 className="skill-category">Frontend Development</h3>
              <ul className="skill-list">
                <li className="skill-item">HTML5 / CSS3</li>
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">React</li>
                <li className="skill-item">Bootstrap</li>
                <li className="skill-item">Responsive Design</li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-icon-container">
                <ServerIcon className="skill-icon" />
              </div>
              <h3 className="skill-category">Database</h3>
              <ul className="skill-list">
                <li className="skill-item">PostgreSQL</li>
                <li className="skill-item">MySQL</li>
                <li className="skill-item">SQLite</li>
                <li className="skill-item">Redis</li>
                <li className="skill-item">MongoDB</li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-icon-container">
                <CloudIcon className="skill-icon" />
              </div>
              <h3 className="skill-category">DevOps & Cloud</h3>
              <ul className="skill-list">
                <li className="skill-item">AWS (EC2, S3, RDS, Lambda)</li>
                <li className="skill-item">Docker</li>
                <li className="skill-item">CI/CD Pipelines</li>
                <li className="skill-item">Nginx</li>
                <li className="skill-item">Linux Server Administration</li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-icon-container">
                <WrenchScrewdriverIcon className="skill-icon" />
              </div>
              <h3 className="skill-category">Tools & Methodologies</h3>
              <ul className="skill-list">
                <li className="skill-item">Git & GitHub</li>
                <li className="skill-item">Agile Development</li>
                <li className="skill-item">Test-Driven Development</li>
                <li className="skill-item">RESTful API Design</li>
                <li className="skill-item">Microservices Architecture</li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-icon-container">
                <ChatBubbleBottomCenterTextIcon className="skill-icon" />
              </div>
              <h3 className="skill-category">Soft Skills</h3>
              <ul className="skill-list">
                <li className="skill-item">Problem Solving</li>
                <li className="skill-item">Team Collaboration</li>
                <li className="skill-item">Technical Documentation</li>
                <li className="skill-item">Project Management</li>
                <li className="skill-item">Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="experience-section" direction="right">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              My professional journey
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">Senior Web Developer</h3>
                <p className="company">TechSolutions Inc</p>
                <p className="job-date">March 2022 - Present</p>
                <p className="job-description">
                  Lead development of enterprise web applications using React and Django. Mentored junior developers and implemented CI/CD pipelines. Reduced system downtime by 40% through architecture improvements.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">Web Developer</h3>
                <p className="company">Digital Innovations</p>
                <p className="job-date">April 2018 - February 2022</p>
                <p className="job-description">
                  Developed and maintained various client websites and web applications. Implemented responsive designs and optimized performance. Collaborated with design and marketing teams to create effective web solutions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="job-title">Junior Web Developer</h3>
                <p className="company">WebCraft Studios</p>
                <p className="job-date">June 2016 - February 2018</p>
                <p className="job-description">
                  Designed and developed responsive websites for various clients. Collaborated with designers and stakeholders to deliver high-quality web solutions. Managed deployment and maintenance of web applications.
        </p>
      </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <AnimatedSection className="contact-section" direction="up">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a question or want to work together? Send me a message!
            </p>
          </div>

          <motion.form 
            className="contact-form tilt-card"
            onSubmit={handleSubmit} 
            ref={formRef}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="from_name"
                className="form-input no-custom-cursor" 
                placeholder="Your name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="from_email"
                className="form-input no-custom-cursor" 
                placeholder="Your email address"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="form-input no-custom-cursor" 
                placeholder="Subject of your message"
                value={formSubject}
                onChange={(e) => setFormSubject(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message"
                className="form-textarea no-custom-cursor" 
                placeholder="Your message"
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button no-custom-cursor" disabled={formSubmitting}>
              {formSubmitting ? (
                <div className="spinner"></div>
              ) : (
                <>
                  {formSubmitted ? (
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                  ) : (
                    <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                  )}
                  {formSubmitted ? 'Message Sent' : 'Send Message'}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:waqas.younas@example.com" className="social-link">
              <EnvelopeIcon className="w-5 h-5 mr-2 inline-block" />
              Email
            </a>
          </div>
          
          <motion.p 
            className="copyright"
            whileHover={{ scale: 1.05, color: "var(--color-purple-light)" }}
          >
            © {new Date().getFullYear()} Waqas Younas. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </SmoothScroll>
  )
}

export default App
