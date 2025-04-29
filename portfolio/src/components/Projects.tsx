import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../utils/shadcn';
import { CodeBracketIcon,  CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

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
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard with dark mode, analytics charts, and product management features built with React and Shadcn UI.",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&q=80&w=2901&ixlib=rb-4.0.3",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    demoLink: "#",
    codeLink: "#",
    category: "web"
  },
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
    id: 4,
    title: "Weather Forecast App",
    description: "A sleek weather application showing current conditions and 5-day forecasts with interactive maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    tags: ["React", "Weather API", "ChartJS", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
    category: "mobile"
  },
  {
    id: 5,
    title: "Task Management System",
    description: "A Kanban-style project management tool with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    tags: ["React", "DnD Kit", "Redux", "Firebase"],
    demoLink: "#",
    codeLink: "#",
    category: "web"
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description: "A cryptocurrency portfolio tracker with real-time price updates, historical charts, and market analytics.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
    tags: ["React", "CoinGecko API", "Recharts", "TypeScript"],
    demoLink: "#",
    codeLink: "#",
    category: "finance"
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI Projects" },
  { id: "finance", label: "Finance Tools" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Purple accent gradients */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center text-white">
            <CodeBracketIcon className="w-7 h-7 mr-2 text-primary" />
            My <span className="text-primary ml-2">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-300 mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full transition-all",
                  activeCategory === category.id ? "shadow-md shadow-primary/20" : ""
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/60 border-purple-900/30 hover:border-primary/50 transition-all overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs py-1 px-2 rounded-full bg-primary/10 text-primary/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <CommandLineIcon className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <RocketLaunchIcon className="w-4 h-4 mr-1" />
                      Demo
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