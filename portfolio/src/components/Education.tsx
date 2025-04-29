import { motion } from 'framer-motion'
import { FiBookOpen, FiAward } from 'react-icons/fi'

const Education = () => {
  const educationItems = [
    {
      degree: "Certified Python Django Developer",
      institution: "Online Certification",
      year: "2021",
      description: "Comprehensive training in Python and Django development, including web applications, APIs, and database management."
    },
    {
      degree: "Intermediate in Science",
      institution: "Board of Education",
      year: "2018",
      description: "Focused on Physics, Chemistry, and Mathematics to build a strong foundation in scientific principles."
    },
    {
      degree: "Matriculation in Science",
      institution: "Board of Education",
      year: "2016",
      description: "Completed secondary education with a focus on science subjects and computer studies."
    }
  ]

  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FiBookOpen className="text-primary text-xl" />
            <h2 className="section-title">Education</h2>
          </div>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            My academic journey and certifications
          </p>

          <div className="relative mt-12 pb-10">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Education Items */}
            {educationItems.map((item, index) => (
              <motion.div 
                key={index}
                className={`relative mb-12 flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex-1"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <FiAward className="text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 md:px-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                    <div className="flex items-center text-gray-600 mt-1 mb-3">
                      <span className="mr-2">{item.institution}</span>
                      <span className="bg-primary/10 px-2 py-1 rounded text-xs font-medium text-primary">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education