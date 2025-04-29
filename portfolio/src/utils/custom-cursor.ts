let cursor: HTMLElement | null = null;
let cursorDot: HTMLElement | null = null;
let links: NodeListOf<Element>;
// let buttons: NodeListOf<Element>;
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let animationFrameId: number;

// Initialize the custom cursor
export function initCustomCursor() {
  // Find or create cursor elements
  cursor = document.querySelector('.cursor');
  cursorDot = document.querySelector('.cursor-dot');

  if (!cursor) {
    cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  }

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);
  }

  // Apply styles to cursor elements
  applyStyles();

  // Set up interactive elements
  links = document.querySelectorAll('a, button, [role="button"], .clickable, input[type="submit"], label, input[type="checkbox"], input[type="radio"]');
  // buttons = document.querySelectorAll('button, .button, [role="button"], input[type="submit"]');

  // Initial cursor position
  mouseX = cursorX = window.innerWidth / 2;
  mouseY = cursorY = window.innerHeight / 2;

  // Track cursor position
  document.addEventListener('mousemove', trackMouse);

  // Start animation loop
  animateCursor();

  // Add event listeners for interactive elements
  addInteractiveListeners();

  // Hide default cursor
  document.documentElement.style.cursor = 'none';
  document.body.style.cursor = 'none';
}

// Apply base styles to cursor elements
function applyStyles() {
  if (!cursor || !cursorDot) return;

  // Base cursor styles
  Object.assign(cursor.style, {
    position: 'fixed',
    width: '40px',
    height: '40px',
    border: '2px solid rgba(142, 68, 255, 0.5)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
    zIndex: '9999',
    backgroundColor: 'rgba(142, 68, 255, 0.03)',
    transform: 'translate(-50%, -50%)',
    backdropFilter: 'blur(1px)',
    top: '0',
    left: '0',
  });

  // Base cursor dot styles
  Object.assign(cursorDot.style, {
    position: 'fixed',
    width: '8px',
    height: '8px',
    backgroundColor: 'rgb(142, 68, 255)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
    zIndex: '10000',
    filter: 'drop-shadow(0 0 8px rgba(187, 0, 255, 0.8))',
    top: '0',
    left: '0',
  });
}

// Track mouse movement
function trackMouse(e: MouseEvent) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

// Animate cursor with smooth following effect
function animateCursor() {
  const easing = 0.15; // Lower = smoother/slower
  
  // Calculate cursor position with easing
  cursorX += (mouseX - cursorX) * easing;
  cursorY += (mouseY - cursorY) * easing;
  
  if (cursor && cursorDot) {
    // Apply position to cursor elements
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    // Dot follows more closely
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }
  
  // Continue animation loop
  animationFrameId = requestAnimationFrame(animateCursor);
}

// Add event listeners for interactive elements
function addInteractiveListeners() {
  // Add hover effect to links
  links.forEach(link => {
    if (link.classList.contains('no-custom-cursor')) return;

    link.addEventListener('mouseenter', () => {
      if (!cursor || !cursorDot) return;
      
      cursor.classList.add('cursor-hover');
      cursorDot.classList.add('cursor-dot-hover');
    });

    link.addEventListener('mouseleave', () => {
      if (!cursor || !cursorDot) return;
      
      cursor.classList.remove('cursor-hover');
      cursorDot.classList.remove('cursor-dot-hover');
    });
  });

  // Add click effect
  document.addEventListener('mousedown', () => {
    if (!cursor || !cursorDot) return;
    
    cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(0.9)';
  });

  document.addEventListener('mouseup', () => {
    if (!cursor || !cursorDot) return;
    
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Handle leaving window
  document.addEventListener('mouseleave', () => {
    if (!cursor || !cursorDot) return;
    
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (!cursor || !cursorDot) return;
    
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
  });
  
  // Add special styles for input elements
  const inputElements = document.querySelectorAll('input, textarea, select');
  inputElements.forEach(el => {
    if (el.classList.contains('no-custom-cursor')) return;
    
    el.addEventListener('mouseenter', () => {
      if (!cursor) return;
      cursor.style.width = '2px';
      cursor.style.height = '24px';
      cursor.style.borderRadius = '1px';
      cursor.style.border = 'none';
      cursor.style.backgroundColor = 'rgba(142, 68, 255, 0.8)';
    });
    
    el.addEventListener('mouseleave', () => {
      if (!cursor) return;
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.borderRadius = '50%';
      cursor.style.border = '2px solid rgba(142, 68, 255, 0.5)';
      cursor.style.backgroundColor = 'rgba(142, 68, 255, 0.03)';
    });
  });
}

// Clean up event listeners (can be called when component unmounts)
export function destroyCustomCursor() {
  document.removeEventListener('mousemove', trackMouse);
  cancelAnimationFrame(animationFrameId);
  document.documentElement.style.cursor = '';
  document.body.style.cursor = '';
  
  if (cursor) document.body.removeChild(cursor);
  if (cursorDot) document.body.removeChild(cursorDot);
} 