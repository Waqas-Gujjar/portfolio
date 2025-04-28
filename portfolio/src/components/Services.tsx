import { motion } from 'framer-motion';
import { CodeBracketIcon, CubeIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceProps[] = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications using React, Next.js, and modern CSS frameworks.',
    icon: <CodeBracketIcon className="h-8 w-8 text-primary" />
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Creating intuitive, aesthetically pleasing interfaces focused on user experience with tools like Figma and Adobe XD.',
    icon: <PaintBrushIcon className="h-8 w-8 text-primary" />
  },
  {
    id: 3,
    title: 'Web Animation',
    description: 'Implementing smooth, engaging animations using Three.js, Framer Motion, and GSAP to enhance user engagement.',
    icon: <CubeIcon className="h-8 w-8 text-primary" />
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'Analyzing and improving web performance metrics, reducing load times, and optimizing for Core Web Vitals.',
    icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(105,30,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(105,30,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
            Services
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Specialized services I offer to help bring your digital projects to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex flex-col h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mt-auto">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 