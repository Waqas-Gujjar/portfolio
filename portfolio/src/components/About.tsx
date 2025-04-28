import { motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FiUser className="text-primary text-xl" />
            <h2 className="section-title">About Me</h2>
          </div>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Learn more about my journey and passion for software development
          </p>

          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm mt-8">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              I'm a skilled Software Engineer with expertise in Python, Django, and cloud technologies. 
              My journey in software development has been driven by a passion for creating efficient, 
              scalable solutions that solve real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              I specialize in building robust backend systems with Django and Django REST Framework, 
              deploying applications on cloud platforms, and implementing efficient database solutions 
              with PostgreSQL, MySQL, and SQLite.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              I'm passionate about backend development, cloud technologies, and DevOps workflows, 
              continuously expanding my knowledge and skills to stay at the forefront of modern 
              software development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 