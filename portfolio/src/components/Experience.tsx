import { motion } from 'framer-motion'
// import { cn } from '../utils/shadcn'
import { BriefcaseIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isLast?: boolean;
}

const ExperienceItem = ({ title, company, period, description, isLast = false }: ExperienceItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline connector line */}
      {!isLast && (
        <motion.div 
          className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      )}
      
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-0 top-1 w-6 h-6 rounded-full bg-black border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
      </motion.div>
      
      <div className="mb-4">
        <motion.h3 
          className="text-2xl font-bold text-white inline-block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <div className="flex items-center gap-2 text-primary/80 mt-1">
          <BuildingOfficeIcon className="w-4 h-4" />
          <p className="font-medium">{company}</p>
        </div>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
          <CalendarIcon className="w-4 h-4" />
          <p>{period}</p>
        </div>
      </div>
      
      <motion.ul 
        className="space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description.map((item, index) => (
          <motion.li 
            key={index} 
            className="text-gray-300 text-base flex items-start gap-3 group/item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="text-primary mt-1.5 text-lg group-hover/item:scale-125 transition-transform">•</span>
            <span className="group-hover/item:text-white transition-colors">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "The Vista.One Company",
      period: "Dec'07 – March",
      description: [
        "Developed a sale-based CRM application using python and Django to centralize company-wide sales tracking and Improving data visibility for unlimited users.",
        "Build REST-API for seamless for frontend-backend integrations.",
        "Deploy on AWS and use database Postgres.",
        "Collaborated with team members using version control systems such as Git to organize modifications and assign tasks."
      ]
    },
    {
      title: "Python Intern",
      company: "CodeAlpha",
      period: "Oct'01-Nov",
      description: [
        "Designed and implemented a fully functional Hameman game using Python, focusing on logic development, user interaction, and error handling to ensure a seamless gaming experience.",
        "Created a stock portfolio management tool to track and analyze stock performance in real-time. Integrated APIs for live data updates and implemented features like profit/loss calculation and portfolio visualization.",
        "Developed a Python script to organize files in a specified directory by categorizing them into folders based on file type. Enhanced efficiency by automating repetitive file management tasks."
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(105,30,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(105,30,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <BriefcaseIcon className="w-8 h-8 mr-3 text-primary" />
            Work <span className="text-primary ml-2">Experience</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-300 mx-auto rounded-full animate-pulse" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience 