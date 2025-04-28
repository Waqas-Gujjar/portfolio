import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

interface ParticleEffectProps {
  containerId: string;
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
}

const ParticleEffect = ({
  containerId,
  count = 20,
  colors = ['#8A2BE2', '#9370DB', '#BA55D3', '#9932CC', '#4B0082'],
  minSize = 3,
  maxSize = 8,
  minSpeed = 1,
  maxSpeed = 3
}: ParticleEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const newParticles: Particle[] = [];

    // Create particles
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * containerRect.width,
        y: Math.random() * containerRect.height,
        size: minSize + Math.random() * (maxSize - minSize),
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: minSpeed + Math.random() * (maxSpeed - minSpeed)
      });
    }

    setParticles(newParticles);

    // Create actual DOM elements
    newParticles.forEach(particle => {
      const element = document.createElement('div');
      element.classList.add('particle');
      element.id = `particle-${particle.id}`;
      element.style.position = 'absolute';
      element.style.left = `${particle.x}px`;
      element.style.top = `${particle.y}px`;
      element.style.width = `${particle.size}px`;
      element.style.height = `${particle.size}px`;
      element.style.backgroundColor = particle.color;
      element.style.opacity = '0.6';
      element.style.borderRadius = '50%';
      element.style.filter = 'blur(1px)';
      
      // Apply random animation
      element.style.animation = `floatParticle ${3 + Math.random() * 7}s ease-in-out infinite`;
      element.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(element);
    });

    // Cleanup function
    return () => {
      newParticles.forEach(particle => {
        const element = document.getElementById(`particle-${particle.id}`);
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [containerId, count, colors, minSize, maxSize, minSpeed, maxSpeed]);

  return null; // This component doesn't render any JSX, it manipulates the DOM directly
};

export default ParticleEffect; 