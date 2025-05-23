import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "Deploma in Information Technology",
    image: "/images/certi1.jpg",
    organization: "Computer Science Department,Nice Institute of Technology and Management",
    date: "2022"
  },
  {
    id: 2,
    title: "Python Programming Certificate",
    image: "/images/certf2.png",
    organization: "Cisco Networking Academy",
    date: "2024"
  },
  {
    id: 3,
    title: "Certified Python Developer",
    image: "/images/certifi3.jpeg",
    organization: "AzadChai Wala institute of technology and management",
    date: "2024"
  },
  {
    id: 4,
    title: "Python Programming Internship",
    image: "/images/certifi4.jpeg",
    organization: "Code Alpha ",
    date: "2024"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-[280px] md:h-[400px] overflow-hidden bg-black/40">
                <motion.div
                  className="w-full h-full flex items-center justify-center p-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain hover:brightness-110"
                    style={{ objectFit: 'contain', maxHeight: '100%' }}
                  />
                </motion.div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-2 border-t border-primary/10">
                <h3 className="text-xl font-semibold text-white bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm">{cert.organization}</p>
                <p className="text-primary/80 text-sm">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;