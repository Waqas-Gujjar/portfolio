import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../utils/shadcn';
import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}

const projects: ProjectType[] = [
  {
    id: 2,
    title: "Social Media App",
    description: "A full-featured social platform with real-time messaging, post sharing, and user authentication system.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3",
    tags: ["React", "Firebase", "Redux", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
    category: "web"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An application that uses AI to generate images from text descriptions, featuring various style options.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    tags: ["React", "OpenAI API", "Node.js", "Express"],
    demoLink: "#",
    codeLink: "#",
    category: "ai"
  },
  {
    id: 6,
    title: "Reflex-GPT",
    description: "Built Reflex-GPT in Python using Groq API for high-speed conversational AI with context-aware responses and multi-turn dialogue capabilities.",
    image: "https://picsum.photos/seed/reflexgpt/600/400",
    tags: ["Python", "Groq-API", "Neon-postgres", "Docker"],
    demoLink: "#",
    codeLink: "#",
    category: "ai"
  },
  {
    id: 7,
    title: "Course Platform",
    description: "Full-stack course platform using Django, enabling users to upload, watch, and manage courses with modern UI and seamless video delivery.",
    image: "https://picsum.photos/seed/courseplatform/600/400",
    tags: ["Django", "HTMX", "Tailwind", "Docker"],
    demoLink: "#",
    codeLink: "#",
    category: "web"
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: GlobeAltIcon },
  { id: "web", label: "Web Apps", icon: CodeBracketIcon },
  { id: "ai", label: "AI Projects", icon: RocketLaunchIcon },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-400 mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development and AI applications
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full transition-all duration-300 px-6",
                  activeCategory === category.id 
                    ? "shadow-lg shadow-primary/20" 
                    : "hover:border-primary/50"
                )}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-primary/30 transition-all duration-300 group">
                {/* Image container */}
                <div className="relative h-52 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                
                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                {/* Actions */}
                <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:border-primary/50"
                    asChild
                  >
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn"
                    >
                      <CommandLineIcon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
                      View Code
                    </a>
                  </Button>
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    className="flex-1 shadow-lg shadow-primary/20"
                    asChild
                  >
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn"
                    >
                      <RocketLaunchIcon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;