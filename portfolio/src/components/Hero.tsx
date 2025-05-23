import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import SocialIcons from './SocialIcons'
import ParticleEffect from './ParticleEffect'

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
    <section id="home" className="min-h-screen flex items-start md:items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-black to-purple-950/20 py-10 md:py-20">
      {/* Particle Effect Background */}
      <ParticleEffect containerId="particles-js" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced gradient circles */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-l from-primary/15 to-purple-400/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(105,30,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(105,30,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
        
        {/* Floating elements with enhanced animations */}
        <motion.div 
          className="absolute top-1/4 left-1/5 w-3 h-12 bg-gradient-to-t from-primary/50 to-purple-300/30 rounded-full"
          animate={{ 
            y: [-30, 30, -30], 
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-gradient-to-tr from-primary to-purple-300/50 rounded-full"
          animate={{ 
            y: [20, -20, 20], 
            x: [10, -10, 10], 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-1/2 right-1/3 w-2 h-14 bg-gradient-to-b from-primary/30 to-purple-300/10 rounded-full"
          animate={{ 
            y: [-40, 40, -40], 
            rotate: [0, 90, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main flex container */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-left mt-8 md:mt-0"
          >
            {/* Enhanced greeting with gradient animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Hi, I'm{" "}
              <span className="inline-block animate-gradient bg-gradient-to-r from-primary via-purple-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                Waqas Younas
              </span>
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
              
              <p className="text-gray-400 mb-6 max-w-xl">
                I create stunning interfaces with modern frameworks, focusing on clean code and exceptional user experiences.
              </p>
              
              {/* Enhanced social media icons */}
              <div className="mb-8 flex">
                <SocialIcons animate iconSize="md" variant="outline" iconClassName="hover:text-primary transition-colors duration-300" />
              </div>
              
              {/* Enhanced buttons with hover effects */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="px-8 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/20" 
                  asChild
                >
                  <a href="#contact" className="group">
                    <EnvelopeIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 hover:scale-105 transition-transform duration-300 hover:border-primary hover:text-primary" 
                  asChild
                >
                  <a href="#projects">
                    View Projects
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side image - ab mobile per top per ayegi */}
          <motion.div 
            className="flex-1 relative w-full flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="max-w-[280px] mx-auto md:max-w-none"> {/* Control image size */}
              <motion.div 
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [2, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 p-1 bg-gradient-to-br from-black to-purple-950/50 shadow-2xl shadow-primary/20 transition-all duration-300 transform hover:border-primary">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden"
                    whileHover={{
                      scale: 1.15,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <motion.img 
                      src="/images/IMG-20250202-WA0000.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full transition-all duration-300 hover:brightness-110 hover:contrast-110"
                      initial={{ scale: 1.1 }}
                      animate={{
                        scale: [1.1, 1.15, 1.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=W+Y&background=100020&color=8844ff&size=200`;
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Enhanced glowing effect */}
                <motion.div 
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-purple-300/20 blur-2xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Enhanced floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-primary to-purple-400 rounded-full opacity-90"
                  animate={{ 
                    y: [-15, 15, -15],
                    x: [15, -15, 15],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-purple-400 to-primary rounded-full opacity-90"
                  animate={{ 
                    y: [15, -15, 15],
                    x: [-15, 15, -15],
                    rotate: [360, 180, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Additional floating elements */}
                <motion.div
                  className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-primary/80 to-purple-300/80 rounded-full opacity-80"
                  animate={{ 
                    x: [10, -10, 10],
                    scale: [1, 1.4, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-purple-300/80 to-primary/80 rounded-full opacity-80"
                  animate={{ 
                    x: [-10, 10, -10],
                    scale: [1, 1.4, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 