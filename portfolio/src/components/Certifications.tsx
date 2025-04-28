import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

interface CertificationProps {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

const certifications: CertificationProps[] = [
  {
    id: 1,
    title: "React.js Developer Certification",
    issuer: "Meta",
    date: "Jan 2023",
    credentialLink: "https://example.com/credential1"
  },
  {
    id: 2,
    title: "Frontend Web Development",
    issuer: "Udacity",
    date: "Aug 2022",
    credentialLink: "https://example.com/credential2"
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Apr 2022",
    credentialLink: "https://example.com/credential3"
  },
  {
    id: 4,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Jan 2022",
    credentialLink: "https://example.com/credential4"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(105,30,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(105,30,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 overflow-hidden rounded-xl shadow-xl"
        >
          <img 
            src="/images/certifications-hero.jpg" 
            alt="Professional Certifications" 
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/1200x400/1a1a2e/ffffff?text=Professional+Certifications`;
            }}
          />
        </motion.div>
        
        {/* Section heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
            Certifications
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Professional certifications and courses I've completed to expand my knowledge and skills.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: cert.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <AcademicCapIcon className="h-6 w-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              
              {cert.credentialLink && (
                <div className="mt-4 ml-16">
                  <a 
                    href={cert.credentialLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-purple-300 text-sm inline-flex items-center transition-colors"
                  >
                    View Credential
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 