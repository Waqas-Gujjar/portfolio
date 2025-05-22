import { motion } from 'framer-motion'
// import { cn } from '../utils/shadcn'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

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
      className="relative pl-8 pb-12"
    >
      {/* Timeline connector line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-black border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      
      <div className="mb-1">
        <h3 className="text-xl font-bold text-white inline-block">{title}</h3>
        <p className="text-primary font-medium">{company}</p>
        <p className="text-gray-400 text-sm mb-3">{period}</p>
      </div>
      
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
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
      {/* Purple accent gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center text-white">
            <BriefcaseIcon className="w-7 h-7 mr-2 text-primary" />
            Work <span className="text-primary ml-2">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-300 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
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