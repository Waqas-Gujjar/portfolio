import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaCogs } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications using modern frameworks and technologies.',
    icon: <FaCode className="text-4xl text-primary group-hover:text-white transition-colors" />,
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Backend Development',
    description: 'Developing robust server-side applications and APIs with Python frameworks like Django and FastAPI.',
    icon: <FaServer className="text-4xl text-primary group-hover:text-white transition-colors" />,
    gradient: 'from-green-500/20 to-blue-500/20'
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures using PostgreSQL, MySQL, and MongoDB.',
    icon: <FaDatabase className="text-4xl text-primary group-hover:text-white transition-colors" />,
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'API Development',
    description: 'Creating RESTful APIs and integrating third-party services for seamless functionality.',
    icon: <FaCogs className="text-4xl text-primary group-hover:text-white transition-colors" />,
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on cloud platforms with scalable infrastructure.',
    icon: <FaCloud className="text-4xl text-primary group-hover:text-white transition-colors" />,
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end application development combining frontend, backend, and database technologies.',
    icon: <FaMobile className="text-4xl text-primary group-hover:text-white transition-colors" />,
    gradient: 'from-primary/20 to-purple-500/20'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Services</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-400 animate-pulse" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to your development needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-xl rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="mb-6 relative"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>

              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 