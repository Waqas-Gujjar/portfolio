import { useState, useEffect, FormEvent, useRef } from 'react'
// import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Services from './components/Services'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import Footer from './components/Footer'
import { initCustomCursor, destroyCustomCursor } from './utils/custom-cursor'
import { Toaster } from './components/ui/toaster'
import { useToast } from './components/ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import emailjs from '@emailjs/browser'
import SocialIcons from './components/SocialIcons'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const { toast } = useToast()
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formSubject, setFormSubject] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize custom cursor
    initCustomCursor()
    
    // Initialize EmailJS
    emailjs.init({
      publicKey: 'YOUR_PUBLIC_KEY', // Replace with your actual public key
    })
    
    return () => {
      // Clean up cursor when component unmounts
      destroyCustomCursor()
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formName || !formEmail || !formMessage) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    
    setFormSubmitting(true)
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: formName,
          from_email: formEmail,
          subject: formSubject || 'Portfolio Contact Form',
          message: formMessage,
          to_email: 'wg4941792@gmail.com',
        }
      )
      
      setFormSubmitted(true)
      setFormName('')
      setFormEmail('')
      setFormSubject('')
      setFormMessage('')
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      })
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        
        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 relative">
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Touch</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-purple-400 mb-4" />
              <p className="text-gray-400 text-center mb-10">
                Have a project in mind or want to say hello? Feel free to reach out!
              </p>
              
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Contact Information</h3>
                    <p className="text-gray-400 mb-4">
                      I'd love to hear from you! Send me a message or connect with me through the following channels.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Rawalpindi, Pakistan</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:wg4941792@gmail.com" className="text-primary hover:text-purple-300 transition-colors">
                      wg4941792@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Follow Me</h4>
                    <SocialIcons />
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-gray-300">Name *</label>
                        <Input
                          id="name"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="bg-card border-border"
                          disabled={formSubmitting}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-gray-300">Email *</label>
                        <Input
                          id="email"
                          type="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="bg-card border-border"
                          disabled={formSubmitting}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-gray-300">Subject</label>
                      <Input
                        id="subject"
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className="bg-card border-border"
                        disabled={formSubmitting}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-gray-300">Message *</label>
                      <Textarea
                        id="message"
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        className="bg-card border-border min-h-[120px]"
                        disabled={formSubmitting}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="gradient"
                      disabled={formSubmitting || formSubmitted}
                      className="w-full mt-2"
                    >
                      {formSubmitting ? 'Sending...' : formSubmitted ? 'Message Sent!' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Toaster />
    </>
  )
}

export default App
