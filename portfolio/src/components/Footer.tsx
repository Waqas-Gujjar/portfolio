import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me for any questions or opportunities.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="flex items-center border-b border-gray-700 py-2">
                  <FiUser className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="appearance-none bg-transparent border-none w-full text-white placeholder-gray-500 focus:outline-none"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center border-b border-gray-700 py-2">
                  <FiMail className="text-gray-500 mr-3" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="appearance-none bg-transparent border-none w-full text-white placeholder-gray-500 focus:outline-none"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start border-b border-gray-700 py-2">
                  <FiMessageSquare className="text-gray-500 mr-3 mt-2" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className="appearance-none bg-transparent border-none w-full text-white placeholder-gray-500 focus:outline-none resize-none"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className={`btn px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <p className="text-green-400 mt-4">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-8">
              I'd love to hear from you! Reach out through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-xl mb-2">Email</h3>
                <a href="mailto:waqas.younas@example.com" className="text-gray-400 hover:text-primary transition-colors">
                  waqas.younas@example.com
                </a>
              </div>
              
              <div>
                <h3 className="font-medium text-xl mb-2">Social Profiles</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors p-2 text-gray-400"
                  >
                    <FiGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors p-2 text-gray-400"
                  >
                    <FiLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="mailto:waqas.younas@example.com"
                    className="hover:text-primary transition-colors p-2 text-gray-400"
                  >
                    <FiMail className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-medium text-xl mb-4">Looking for a skilled developer?</h3>
              <p className="text-gray-400 mb-4">
                I'm currently open to freelance opportunities and full-time positions.
              </p>
              <a
                href="mailto:waqas.younas@example.com?subject=Job Opportunity"
                className="btn btn-outline inline-block"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Waqas Younas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 