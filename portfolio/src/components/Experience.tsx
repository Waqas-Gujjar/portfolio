import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      company: "Vista.One Company",
      role: "Backend Developer",
      period: "2022 - Present",
      description: [
        "Built CRM system with Django and AWS for customer relationship management",
        "Developed RESTful APIs using Django REST Framework for mobile and web clients",
        "Collaborated with team using Git-based version control for streamlined development process",
        "Deployed and maintained applications on AWS infrastructure",
      ]
    },
    {
      company: "CodeAlpha",
      role: "Python Developer",
      period: "2021 - 2022",
      description: [
        "Developed Hammeman game using Python, implementing core game logic and user interface",
        "Created RESTful APIs for integrating with third-party services and frontend applications",
        "Worked on database design and implementation using PostgreSQL",
        "Participated in code reviews and contributed to improving development practices",
      ]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FiBriefcase className="text-primary text-xl" />
            <h2 className="section-title">Work Experience</h2>
          </div>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            My professional journey in software development
          </p>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100"
                variants={item}
              >
                <div className="bg-gradient-to-r from-primary to-indigo-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center mt-1 text-indigo-100">
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-4">
                    <FiCalendar className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 