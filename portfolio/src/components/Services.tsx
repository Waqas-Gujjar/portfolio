import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaCogs } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications using modern frameworks and technologies.',
    icon: <FaCode className="text-4xl text-primary group-hover:text-white transition-colors" />,
  },
  {
    title: 'Backend Development',
    description: 'Developing robust server-side applications and APIs with Python frameworks like Django and FastAPI.',
    icon: <FaServer className="text-4xl text-primary group-hover:text-white transition-colors" />,
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures using PostgreSQL, MySQL, and MongoDB.',
    icon: <FaDatabase className="text-4xl text-primary group-hover:text-white transition-colors" />,
  },
  {
    title: 'API Development',
    description: 'Creating RESTful APIs and integrating third-party services for seamless functionality.',
    icon: <FaCogs className="text-4xl text-primary group-hover:text-white transition-colors" />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on cloud platforms with scalable infrastructure.',
    icon: <FaCloud className="text-4xl text-primary group-hover:text-white transition-colors" />,
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end application development combining frontend, backend, and database technologies.',
    icon: <FaMobile className="text-4xl text-primary group-hover:text-white transition-colors" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Services</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-400 animate-glow" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your development needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: '0 0 20px rgba(138, 43, 226, 0.15)',
              }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 