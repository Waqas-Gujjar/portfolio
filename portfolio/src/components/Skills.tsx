import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaLinux, FaGithub } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiPostgresql, SiMysql, SiSqlite, SiVercel, SiDigitalocean, SiHtmx, SiFastapi, SiInvoiceninja, SiMongodb, SiClarifai, SiRailway, SiGitlab, SiGithubactions, SiBitbucket, SiCodefresh, SiReact } from 'react-icons/si';
import { motion } from 'framer-motion';

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

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.2, duration: 0.8 }
  }
};

// Floating particles (simple animated divs)
const Particles = () => (
  <>
    <div className="absolute top-10 left-10 w-6 h-6 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" />
    <div className="absolute bottom-20 right-20 w-8 h-8 bg-purple-400/10 rounded-full blur-2xl animate-pulse-slow2" />
    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary/10 rounded-full blur-2xl animate-pulse-slow3" />
  </>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950/30 pointer-events-none" />
      {/* Purple accent circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-purple-900/20 blur-3xl pointer-events-none" />
      {/* Floating particles */}
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white relative inline-block">
            My <span className="text-primary">Skills</span>
            {/* Glowing animated underline */}
            <span className="block h-1 w-24 mx-auto mt-2 rounded-full bg-gradient-to-r from-primary to-purple-400 animate-glow" />
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/60 group glass-card"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4 relative">
                {group.category}
                {/* Faded category icon in background */}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-10 text-5xl pointer-events-none select-none">
                  {group.items[0].icon}
                </span>
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-gray-200 text-lg"
                  >
                    <span className="text-2xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.7)] group-hover:scale-125 group-hover:animate-spin-slow">
                      {item.icon}
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Custom CSS for animation */}
      <style>{`
        .animate-glow {
          box-shadow: 0 0 16px 4px #8a2be2, 0 0 32px 8px #6d28d9;
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 16px 4px #8a2be2, 0 0 32px 8px #6d28d9; }
          100% { box-shadow: 0 0 32px 8px #8a2be2, 0 0 48px 16px #6d28d9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite alternate;
        }
        .animate-pulse-slow2 {
          animation: pulse-slow2 6s infinite alternate;
        }
        .animate-pulse-slow3 {
          animation: pulse-slow3 5s infinite alternate;
        }
        @keyframes pulse-slow {
          0% { transform: scale(1) translateY(0); opacity: 0.7; }
          100% { transform: scale(1.2) translateY(-20px); opacity: 1; }
        }
        @keyframes pulse-slow2 {
          0% { transform: scale(1) translateX(0); opacity: 0.5; }
          100% { transform: scale(1.3) translateX(30px); opacity: 1; }
        }
        @keyframes pulse-slow3 {
          0% { transform: scale(1) translateY(0); opacity: 0.6; }
          100% { transform: scale(1.1) translateY(20px); opacity: 1; }
        }
        .group:hover .group-hover\:animate-spin-slow {
          animation: spin 1.5s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;