import { motion } from 'framer-motion'
import { UserIcon } from '@heroicons/react/24/outline'

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950/20 pointer-events-none" />
      
      {/* Purple accent circle */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-purple-900/20 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/50 to-purple-300/50 rounded-2xl blur-md -z-10"></div>
              <div className="overflow-hidden rounded-xl border-2 border-primary/20">
                <img 
                  src="/images/about-image.jpg" 
                  alt="About Me" 
                  className="w-full h-auto rounded-xl object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/600x800/1a1a2e/ffffff?text=Developer`;
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <UserIcon className="w-6 h-6 text-primary" />
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate front-end developer with expertise in creating responsive, 
                user-friendly web applications. With a strong foundation in modern JavaScript frameworks
                like React, I specialize in building seamless interactive experiences.
              </p>
              <p>
                My journey in web development began over 5 years ago, and since then, 
                I've continuously expanded my skill set to stay current with the latest technologies
                and best practices in the industry.
              </p>
              <p>
                I focus on creating clean, efficient code and intuitive user interfaces that provide
                exceptional user experiences. My approach combines technical expertise with an eye for
                design, ensuring that the applications I build are both functional and visually appealing.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source
                projects, and sharing my knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 