import { useEffect, useState } from 'react'

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Create particles
    const particleCount = window.innerWidth > 768 ? 25 : 15;
    const purpleShades = [
      '#8e24aa', // Primary purple
      '#b039c3', // Light purple
      '#6a0080', // Dark purple
      '#d500f9', // Bright purple
      '#bb00ff', // Neon purple
    ];
    
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100 + 100, // Start below the viewport
        size: Math.random() * 5 + 2,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        color: purpleShades[Math.floor(Math.random() * purpleShades.length)]
      });
    }
    
    setParticles(newParticles);
    
    // Animation loop
    let animationFrameId: number;
    let lastTime = 0;
    
    const animate = (currentTime: number) => {
      if (lastTime === 0) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Move particle upward
          let y = particle.y - (particle.speed * (deltaTime / 16));
          
          // Reset position if it's out of view
          if (y < -10) {
            y = 110; // Below viewport
            return {
              ...particle,
              y,
              x: Math.random() * 100,
              size: Math.random() * 5 + 2,
              opacity: Math.random() * 0.3 + 0.1
            };
          }
          
          return {
            ...particle,
            y
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  return (
    <div className="animated-bg-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="animated-bg-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            filter: `blur(${particle.size / 2}px)`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground; 