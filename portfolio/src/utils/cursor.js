export const initCustomCursor = (): void => {
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  
  if (!cursor || !cursorDot) return;
  
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let cursorDotX = 0;
  let cursorDotY = 0;
  let speed = 0.1; // Controls how quickly the cursor follows the mouse
  
  // Update mouse position on mouse move
  document.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Hide cursor when mouse leaves window
  document.addEventListener('mouseout', () => {
    if (cursor instanceof HTMLElement) cursor.style.opacity = '0';
    if (cursorDot instanceof HTMLElement) cursorDot.style.opacity = '0';
  });
  
  // Show cursor when mouse enters window
  document.addEventListener('mouseover', () => {
    if (cursor instanceof HTMLElement) cursor.style.opacity = '1';
    if (cursorDot instanceof HTMLElement) cursorDot.style.opacity = '1';
  });
  
  // Apply special styles when hovering over links, buttons, and text
  const handleHoverEvents = (): void => {
    // For links and buttons
    const interactiveElements = document.querySelectorAll('a, button, input[type="submit"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        if (cursor instanceof HTMLElement) cursor.classList.add('cursor-hover');
      });
      
      element.addEventListener('mouseleave', () => {
        if (cursor instanceof HTMLElement) cursor.classList.remove('cursor-hover');
      });
    });
    
    // For text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li');
    
    textElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        if (cursor instanceof HTMLElement) cursor.classList.add('cursor-text');
      });
      
      element.addEventListener('mouseleave', () => {
        if (cursor instanceof HTMLElement) cursor.classList.remove('cursor-text');
      });
    });
  };
  
  // Animation loop
  const render = (): void => {
    // Smooth follow effect for main cursor
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    // Faster movement for cursor dot (feels more responsive)
    cursorDotX += (mouseX - cursorDotX) * 0.3;
    cursorDotY += (mouseY - cursorDotY) * 0.3;
    
    // Apply positions
    if (cursor instanceof HTMLElement) {
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    
    if (cursorDot instanceof HTMLElement) {
      cursorDot.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px)`;
    }
    
    // Continue animation loop
    requestAnimationFrame(render);
  };
  
  // Start the animation
  requestAnimationFrame(render);
  
  // Setup hover effects
  handleHoverEvents();
  
  // Hide default cursor
  document.body.style.cursor = 'none';
  
  // Handle touch devices (disable custom cursor)
  if ('ontouchstart' in window) {
    if (cursor instanceof HTMLElement) cursor.style.display = 'none';
    if (cursorDot instanceof HTMLElement) cursorDot.style.display = 'none';
    document.body.style.cursor = 'auto';
  }
}; 