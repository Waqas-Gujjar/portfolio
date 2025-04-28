import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  demoLink: string;
  githubLink: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  imageSrc, 
  demoLink, 
  githubLink,
  index
}) => {
  // Determine if card should come from left or right based on index
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="project-card"
      initial={{ 
        opacity: 0, 
        x: isEven ? -100 : 100 // Even cards come from left, odd from right
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: index * 0.1 // Stagger effect based on index
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="img-container overflow-hidden">
        <motion.img 
          src={imageSrc} 
          alt={title} 
          className="project-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div 
        className="project-content"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, i) => (
            <motion.span 
              key={i} 
              className="tech-tag"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'var(--color-purple)',
                color: 'white'
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="project-links">
          <motion.a 
            href={demoLink} 
            className="project-link"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5 mr-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            View Demo
          </motion.a>
          <motion.a 
            href={githubLink} 
            className="project-link"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5 mr-1 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 