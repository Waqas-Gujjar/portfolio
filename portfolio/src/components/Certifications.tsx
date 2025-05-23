import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "Web Development Certificate",
    image: "/images/certi1.jpg",
    organization: "Web Development Course",
    date: "2024"
  },
  {
    id: 2,
    title: "Programming Certificate",
    image: "/images/certf2.png",
    organization: "Programming Course",
    date: "2024"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 w-full"
            >
              <div className="relative h-[180px] md:h-[220px] w-full overflow-hidden bg-black/40">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.02 }}
                />
              </div>
              
              <div className="p-3">
                <h3 className="text-lg md:text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{cert.organization}</p>
                <p className="text-primary text-sm">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;