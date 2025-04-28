// Random circle animations that follow the cursor
export const initRandomCircles = (): void => {
  let mouseX = 0;
  let mouseY = 0;
  const circleContainer = document.createElement('div');
  circleContainer.className = 'random-circles-container';
  document.body.appendChild(circleContainer);
  
  // Colors array for random selection
  const colors: string[] = [
    '#0a9396', // Primary teal
    '#94d2bd', // Light teal
    '#e9d8a6', // Sand
    '#ee9b00', // Orange
    '#ca6702', // Dark orange
    '#bb3e03', // Rust
    '#005f73', // Dark teal
    '#9b2226', // Dark red
    '#ae2012', // Red
    '#001219', // Dark blue
  ];
  
  // Track mouse position
  document.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Occasionally create a new circle
    if (Math.random() < 0.15) {
      createCircle();
    }
    
    // Occasionally create an extra large circle
    if (Math.random() < 0.01) {
      createExtraLargeCircle();
    }
  });
  
  function createCircle(): void {
    // Create new circle element
    const circle = document.createElement('div');
    circle.className = 'random-circle';
    
    // Random size between 5 and 50 pixels, with occasional large circle
    const isLarge = Math.random() < 0.1;
    const size = isLarge ? 
      Math.floor(Math.random() * 80) + 50 : // Large circle (50-130px)
      Math.floor(Math.random() * 45) + 5;   // Regular circle (5-50px)
    
    // Random color from our palette
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random transparency
    const opacity = Math.random() * 0.5 + 0.1;
    
    // Random offset from cursor
    const xOffset = (Math.random() - 0.5) * 100;
    const yOffset = (Math.random() - 0.5) * 100;
    
    // Apply styles
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = color;
    circle.style.opacity = opacity.toString();
    circle.style.left = `${mouseX + xOffset}px`;
    circle.style.top = `${mouseY + yOffset}px`;
    
    // Random border
    if (Math.random() < 0.3) {
      circle.style.border = `2px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
      circle.style.backgroundColor = 'transparent';
    }
    
    // Random blur effect
    if (Math.random() < 0.2) {
      const blurAmount = Math.random() * 10 + 2;
      circle.style.filter = `blur(${blurAmount}px)`;
    }
    
    // Add to DOM
    circleContainer.appendChild(circle);
    
    // Random animation duration
    const duration = Math.random() * 3 + 1;
    
    // Random movement direction
    const xMovement = (Math.random() - 0.5) * 150;
    const yMovement = (Math.random() - 0.5) * 150;
    
    // Random rotation
    const rotation = Math.random() * 360;
    
    // Animate the circle
    setTimeout(() => {
      circle.style.transform = `translate(${xMovement}px, ${yMovement}px) rotate(${rotation}deg)`;
      circle.style.opacity = '0';
    }, 10);
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      circle.remove();
    }, duration * 1000);
  }
  
  function createExtraLargeCircle(): void {
    const circle = document.createElement('div');
    circle.className = 'random-circle extra-large';
    
    // Extra large size
    const size = Math.floor(Math.random() * 200) + 150; // 150-350px
    
    // Random color from our palette
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Very low opacity for subtle effect
    const opacity = Math.random() * 0.2 + 0.05;
    
    // Apply styles
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = color;
    circle.style.opacity = opacity.toString();
    circle.style.left = `${mouseX}px`;
    circle.style.top = `${mouseY}px`;
    
    // Add gradient effect
    if (Math.random() < 0.5) {
      const secondColor = colors[Math.floor(Math.random() * colors.length)];
      circle.style.background = `radial-gradient(circle, ${color} 0%, ${secondColor} 100%)`;
    }
    
    // Add blur effect
    const blurAmount = Math.random() * 30 + 10;
    circle.style.filter = `blur(${blurAmount}px)`;
    
    // Add to DOM
    circleContainer.appendChild(circle);
    
    // Longer duration for the extra large circles
    const duration = Math.random() * 5 + 3;
    
    // Slower, more dramatic movement
    const xMovement = (Math.random() - 0.5) * 100;
    const yMovement = (Math.random() - 0.5) * 100;
    const scale = Math.random() * 0.5 + 1.5; // Grow between 1.5x and 2x
    
    setTimeout(() => {
      circle.style.transform = `translate(${xMovement}px, ${yMovement}px) scale(${scale})`;
      circle.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
      circle.remove();
    }, duration * 1000);
  }
}; 