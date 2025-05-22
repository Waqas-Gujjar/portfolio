import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import SocialIcons from './SocialIcons'

const Hero = () => {
  const [text, setText] = useState("")
  const [fullTextVisible, setFullTextVisible] = useState(false)
  const fullText = "Back-End Developer specializing in creating REST-api and FAST-API, and build application in Django  , interactive web experiences with modern technologies."
  
  // Typing animation effect
  useEffect(() => {
    if (fullTextVisible) return
    
    let currentIndex = 0
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1))
      currentIndex++
      
      if (currentIndex === fullText.length) {
        clearInterval(intervalId)
        setFullTextVisible(true)
      }
    }, 40)

    return () => clearInterval(intervalId)
  }, [fullTextVisible])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple gradient circles */}
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(105,30,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(105,30,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating elements - just a few abstract shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/5 w-2 h-8 bg-gradient-to-t from-primary/50 to-purple-300/30 rounded-full"
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gradient-to-tr from-primary to-purple-300/50 rounded-full"
          animate={{ y: [20, -20, 20], x: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-1/2 right-1/3 w-1 h-10 bg-gradient-to-b from-primary/30 to-purple-300/10 rounded-full"
          animate={{ y: [-30, 30, -30], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile image with glowing border */}
          <motion.div 
            className="relative mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50 p-1 bg-gradient-to-br from-black to-purple-950/50">
              <img 
                src="/images/image.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=W+Y&background=100020&color=8844ff&size=200`;
                }}
              />
            </div>
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary/20 to-purple-300/10 blur-md -z-10"></div>
          </motion.div>
          
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* Greeting */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">Waqas Younas</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-300">
                {text}
                <span className={`inline-block w-1 h-6 bg-primary ml-1 align-middle ${fullTextVisible ? 'animate-pulse' : ''}`}></span>
              </h2>
              
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I create stunning interfaces with modern frameworks, focusing on clean code and exceptional user experiences.
              </p>
              
              {/* Social media icons */}
              <div className="mb-8 flex justify-center">
                <SocialIcons animate iconSize="md" variant="outline" iconClassName="hover:text-primary" />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="gradient" size="lg" className="px-8" asChild>
                  <a href="#contact">
                    <EnvelopeIcon className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <a href="#projects">
                    View Projects
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 