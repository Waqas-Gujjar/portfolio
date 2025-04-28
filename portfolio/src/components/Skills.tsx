import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiServer, FiCloud, FiTool } from 'react-icons/fi'
import { 
  SiPython, SiJavascript, SiHtml5, SiCss3, 
  SiDjango, SiReact, SiTailwindcss, 
  SiAmazonaws, SiCloudinary, SiVercel, SiRender,
  SiMysql, SiSqlite, SiPostgresql,
  SiDocker, SiGithub
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      icon: <FiCode />,
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
      ]
    },
    {
      category: "Frameworks",
      icon: <FiServer />,
      items: [
        { name: "Django", icon: <SiDjango /> },
        { name: "Django REST", icon: <SiDjango /> },
        { name: "React", icon: <SiReact /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
      ]
    },
    {
      category: "Cloud",
      icon: <FiCloud />,
      items: [
        { name: "AWS", icon: <SiAmazonaws /> },
        { name: "Cloudinary", icon: <SiCloudinary /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Vercel", icon: <SiVercel /> },
      ]
    },
    {
      category: "Databases",
      icon: <FiDatabase />,
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ]
    },
    {
      category: "Tools",
      icon: <FiTool />,
      items: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "GitHub", icon: <SiGithub /> },
      ]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FiCode className="text-primary text-xl" />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Here are the technologies and tools I work with
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                variants={item}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-primary text-xl">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{skillGroup.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="text-gray-700 text-xl">
                        {skill.icon}
                      </div>
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 