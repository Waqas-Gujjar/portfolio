import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaLinux, FaGithub } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiPostgresql, SiMysql, SiSqlite, SiVercel, SiDigitalocean, SiHtmx, SiFastapi, SiInvoiceninja, SiMongodb, SiClarifai, SiRailway, SiGitlab, SiGithubactions, SiBitbucket, SiCodefresh, SiReact } from 'react-icons/si';
import { motion, Variants } from 'framer-motion';
import { useState, ReactNode } from 'react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-300" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Django', icon: <SiDjango className="text-green-700" /> },
      { name: 'DRF', icon: <SiDjango className="text-red-400" /> },
      { name: 'Fast-Api', icon: <SiFastapi className="text-green-500" /> },
      { name: 'Django-Ninja', icon: <SiInvoiceninja className="text-gray-300" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'HTMX', icon: <SiHtmx className="text-purple-400" /> },
      { name: 'React', icon: <SiReact className="text-blue-500" /> },
    ],
  },
  {
    category: 'Cloud Platforms',
    items: [
      { name: 'Cloudinary', icon: <SiDigitalocean className="text-blue-500" /> },
      { name: 'CloudFlare', icon: <SiClarifai className="text-blue-500" /> },
      { name: 'Natro', icon: <SiDigitalocean className="text-blue-300" /> },
      { name: 'Vercel', icon: <SiVercel className="text-gray-700" /> },
     
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-orange-400" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-yellow-400" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'Mongodb', icon: <SiMongodb className="text-green-700" /> },

    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Linux', icon: <FaLinux className="text-gray-300" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    ],
  },
  {
    category: 'Deployment',
    items: [
      { name: 'Vercel', icon: <SiVercel className="text-gray-500" /> },
      { name: 'Railway', icon: <SiRailway className="text-orange-400" /> },
      
    ],
  },
  {
    category: 'CI/CD Pipeline',
    items: [
      { name: 'GitLab', icon: <SiGitlab className="text-orange-500" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-blue-500" /> },
      { name: 'Bitbucket', icon: <SiBitbucket className="text-blue-700" /> },
      { name: 'Codefresh', icon: <SiCodefresh className="text-green-500" /> },
    ],
  },
];

const cardVariants: Variants = {
  offscreen: { 
    opacity: 0,
    y: 40,
    scale: 0.8
  },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.2
    }
  })
};

interface SkillItemProps {
  name: string;
  icon: ReactNode;
}

const SkillItem = ({ name, icon }: SkillItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 5 }}
    >
      <motion.span 
        className="text-xl"
        animate={isHovered ? {
          rotate: 360,
          scale: [1, 1.2, 1],
          transition: { duration: 0.5 }
        } : {}}
      >
        {icon}
      </motion.span>
      <span className="text-gray-200 text-sm font-medium">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-400 animate-glow" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive showcase of my technical expertise and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-lg p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={index}
              whileHover={{
                boxShadow: '0 0 20px rgba(138, 43, 226, 0.15)',
                y: -3
              }}
            >
              <div className="relative mb-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {group.category}
                </h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-purple-400" />
                <span className="absolute -top-1 right-0 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {group.items[0].icon}
                </span>
              </div>
              
              <div className="space-y-1">
                {group.items.map((item) => (
                  <SkillItem
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;