import { useState, useEffect } from 'react'
import { FiDownload, FiMail } from 'react-icons/fi'

const Hero = () => {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Python/Django Developer | Cloud Platforms | DevOps Enthusiast"

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1))
      currentIndex++
      
      if (currentIndex === fullText.length) {
        clearInterval(intervalId)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const cursorIntervalId = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorIntervalId)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-3/5 mt-10 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-[#4F46E5]">Waqas Younas</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 h-8">
            {text}
            <span className={`text-[#4F46E5] ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl">
            Software Engineer experienced in Python, Django, REST APIs, AWS deployment, PostgreSQL.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/resume.pdf" 
              className="btn btn-primary flex items-center justify-center space-x-2"
              download
            >
              <FiDownload className="inline" />
              <span>Download Resume</span>
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline flex items-center justify-center space-x-2"
            >
              <FiMail className="inline" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#10B981] blur-lg opacity-30"></div>
            <img 
              src="/profile.jpg" 
              alt="Waqas Younas" 
              className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 