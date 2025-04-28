import { motion } from 'framer-motion'
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully-featured e-commerce platform with product management, shopping cart, user authentication, and payment integration.",
      technologies: ["Django", "React", "PostgreSQL", "AWS"],
      imageSrc: "/project1.jpg",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team management, and progress tracking features.",
      technologies: ["Django", "Django Channels", "React", "Redis"],
      imageSrc: "/project2.jpg",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that fetches and displays weather data from multiple sources with interactive visualizations.",
      technologies: ["Python", "Flask", "JavaScript", "D3.js"],
      imageSrc: "/project3.jpg",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Content Management System",
      description: "A custom CMS with role-based access control, content versioning, and a powerful admin dashboard.",
      technologies: ["Django", "PostgreSQL", "JavaScript", "Docker"],
      imageSrc: "/project4.jpg",
      demoLink: "#",
      githubLink: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="section-title">My Projects</h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Check out some of my recent work
          </motion.p>
        </motion.div>

        <motion.div 
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 1, 0.2], 
            x: [-10, 10, -10] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2
          }}
        >
          <div className="scroll-text">Scroll to explore</div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="scroll-arrow"
          >
            <path d="M7 7l5 5 5-5"></path>
            <path d="M7 13l5 5 5-5"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 