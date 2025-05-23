import { motion } from 'framer-motion';
import { UserIcon, CodeBracketIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';

const highlights = [
  {
    icon: <CodeBracketIcon className="w-6 h-6" />,
    title: "Back-end Development",
    description: "Specializing in Python frameworks like Django, Fast-API, and REST APIs"
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: "2+ Years Experience",
    description: "Continuous learning and staying updated with latest technologies"
  },
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Passionate Coder",
    description: "Love creating efficient, clean code and intuitive interfaces"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/5 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-purple-900/10 blur-3xl"
          animate={{
            y: [0, 50, 0],
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-l from-primary/10 to-purple-900/10 blur-3xl"
          animate={{
            y: [0, -50, 0],
            rotate: [0, -90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-400 animate-glow" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate back-end developer crafting efficient and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-purple-600/20 blur-2xl group-hover:from-primary/30 group-hover:to-purple-600/30 transition-all duration-500" />
              <div className="absolute inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black p-2">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="profile-container">
                  <div className="profile-border-glow"></div>
                  <img 
                    src="/images/IMG-20250202-WA0000.jpg" 
                    alt="About Me" 
                    className="profile-image"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/600x800/1a1a2e/ffffff?text=Developer`;
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <UserIcon className="w-8 h-8 text-primary" />
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Back-end developer with expertise in creating responsive, 
                  user-friendly web applications. With a strong foundation in modern Python frameworks
                  like Django, Fast-Api, Rest-Api I specialize in building seamless interactive experiences.
                </p>
                <p>
                  My journey in web development began over 2 years ago, and since then, 
                  I've continuously expanded my skill set to stay current with the latest technologies
                  and best practices in the industry.
                </p>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-primary mb-2">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced animations */}
      <style>{`
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 20px 5px rgba(138, 43, 226, 0.3); }
          100% { box-shadow: 0 0 40px 10px rgba(138, 43, 226, 0.5); }
        }
      `}</style>
    </section>
  );
};

export default About;