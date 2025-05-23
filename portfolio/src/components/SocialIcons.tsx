import { motion } from 'framer-motion';

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'colored';
  animate?: boolean;
}

const SocialIcons = ({ 
  className = '', 
  iconClassName = '',
  iconSize = 'md',
  variant = 'default',
  animate = false
}: SocialIconsProps) => {
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/waqasyounas1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      ),
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Waqas-Gujjar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.236-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      color: '#333333'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/923255908332',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M17.6 6.32A8.39 8.39 0 0012.05 4 8.48 8.48 0 003.6 12.45a8.38 8.38 0 001.27 4.41L3.6 21l4.28-1.11a8.41 8.41 0 004.16 1.06 8.48 8.48 0 008.44-8.44 8.39 8.39 0 00-2.88-6.19zM12.05 19.73a7 7 0 01-3.54-1l-.25-.15-2.63.68.7-2.55-.16-.25a6.93 6.93 0 01-1.14-3.81 7 7 0 017-7 7 7 0 014.95 2.05 6.94 6.94 0 012.06 5 7 7 0 01-7 7zm3.85-5.25c-.21-.11-1.25-.62-1.45-.69s-.34-.1-.47.11-.54.69-.67.84-.24.16-.46.06a5.87 5.87 0 01-1.71-1.05 6.49 6.49 0 01-1.18-1.47c-.13-.21 0-.33.09-.43s.21-.25.31-.37a1.35 1.35 0 00.21-.34.38.38 0 000-.37c0-.1-.47-1.13-.64-1.55s-.34-.36-.47-.36-.26 0-.4 0a.78.78 0 00-.56.25 2.36 2.36 0 00-.74 1.75 4 4 0 00.86 2.17 9.21 9.21 0 003.47 3.16 3.93 3.93 0 001.57.49 2.4 2.4 0 001.41-.31 2.04 2.04 0 00.5-1.06c.05-.21 0-.38-.11-.53z" />
        </svg>
      ),
      color: '#25D366'
    }
  ];

  // Determine size classes based on prop
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  // Determine variant classes
  const getVariantClasses = (color: string) => {
    switch (variant) {
      case 'outline':
        return 'bg-transparent border-2 text-white hover:bg-white/10';
      case 'colored':
        return `bg-white text-[${color}] hover:bg-opacity-90`;
      default:
        return 'bg-black/60 text-white hover:bg-primary/20 border border-purple-900/30';
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social, index) => (
        animate ? (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${sizeClasses[iconSize]} rounded-full flex items-center justify-center transition-all duration-300 ${getVariantClasses(social.color)} ${iconClassName}`}
            aria-label={social.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ) : (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizeClasses[iconSize]} rounded-full flex items-center justify-center transition-all duration-300 ${getVariantClasses(social.color)} ${iconClassName}`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        )
      ))}
    </div>
  );
};

export default SocialIcons; 