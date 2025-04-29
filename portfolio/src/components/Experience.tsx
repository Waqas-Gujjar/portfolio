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
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2022 - Present",
      description: [
        "Led the development of responsive React applications with TypeScript, improving user engagement by 35%",
        "Implemented modern UI libraries and frameworks such as Tailwind CSS and Shadcn UI",
        "Mentored junior developers and conducted code reviews to ensure codebase quality and best practices"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "Mar 2019 - Dec 2021",
      description: [
        "Developed and maintained multiple client-facing web applications using React and Redux",
        "Collaborated with UX/UI designers to implement pixel-perfect, responsive designs",
        "Optimized application performance, reducing load times by 40% through code splitting and lazy loading"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "Jun 2017 - Feb 2019",
      description: [
        "Built responsive websites using HTML, CSS, and JavaScript for various clients",
        "Assisted in the development of interactive UI components and animations",
        "Participated in daily stand-ups and sprint planning sessions in an Agile environment"
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