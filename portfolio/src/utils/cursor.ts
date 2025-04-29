export const initCustomCursor = (): (() => void) => {
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  
  if (!cursor || !cursorDot) return () => {};
  
  // Track cursor position with smooth following
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let cursorDotX = 0;
  let cursorDotY = 0;
  let speed = 0.08; // Adjusted speed for more noticeable trailing effect
  
  // Track if cursor is over a form element or no-custom-cursor element
  let isOverFormElement = false;
  
  // Create a map to store "mouseenter" event listeners
  const mouseEnterListeners = new WeakMap();
  const mouseLeaveListeners = new WeakMap();
  
  // Update mouse position on mouse move
  document.addEventListener('mousemove', (e: MouseEvent) => {
    // Get the element under the cursor
    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
    
    // Check if cursor is over an element with no-custom-cursor class or is a form element
    const isFormElement = elementUnderCursor?.tagName.toLowerCase() === 'input' ||
                          elementUnderCursor?.tagName.toLowerCase() === 'textarea' ||
                          elementUnderCursor?.tagName.toLowerCase() === 'select' ||
                          elementUnderCursor?.tagName.toLowerCase() === 'option' ||
                          elementUnderCursor?.tagName.toLowerCase() === 'button';
                          
    const hasNoCustomCursorClass = elementUnderCursor?.closest('.no-custom-cursor') !== null;
    
    // Update tracking variable
    isOverFormElement = isFormElement || hasNoCustomCursorClass;
    
    // Hide custom cursor on form elements
    if (isOverFormElement) {
      if (cursor instanceof HTMLElement) cursor.style.opacity = '0';
      if (cursorDot instanceof HTMLElement) cursorDot.style.opacity = '0';
    } else {
      if (cursor instanceof HTMLElement) cursor.style.opacity = '1';
      if (cursorDot instanceof HTMLElement) cursorDot.style.opacity = '1';
    }
    
    // Update target mouse position
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Add click-through behavior for form elements
  document.addEventListener('click', () => {
    // If over a form element, let the native click happen
    if (!isOverFormElement) {
      // Normal custom cursor behavior
    }
  }, { passive: true });
  
  // Hide cursor when mouse leaves window
  document.addEventListener('mouseout', () => {
    if (cursor instanceof HTMLElement) cursor.style.opacity = '0';
    if (cursorDot instanceof HTMLElement) cursorDot.style.opacity = '0';
  });
  
  // Show cursor when mouse enters window
  document.addEventListener('mouseover', () => {
    if (cursor instanceof HTMLElement && !isOverFormElement) cursor.style.opacity = '1';
    if (cursorDot instanceof HTMLElement && !isOverFormElement) cursorDot.style.opacity = '1';
  });
  
  // Apply special styles when hovering over links, buttons, and text
  const handleHoverEvents = (): void => {
    // For links and buttons (excluding form elements)
    const interactiveElements = document.querySelectorAll('a, button:not(.no-custom-cursor):not(input)');
    
    interactiveElements.forEach(element => {
      const mouseEnterListener = () => {
        if (cursor instanceof HTMLElement) cursor.classList.add('cursor-hover');
      };
      
      const mouseLeaveListener = () => {
        if (cursor instanceof HTMLElement) cursor.classList.remove('cursor-hover');
      };
      
      // Store listeners to allow removal
      mouseEnterListeners.set(element, mouseEnterListener);
      mouseLeaveListeners.set(element, mouseLeaveListener);
      
      element.addEventListener('mouseenter', mouseEnterListener);
      element.addEventListener('mouseleave', mouseLeaveListener);
    });
    
    // For text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li');
    
    textElements.forEach(element => {
      const mouseEnterListener = () => {
        if (cursor instanceof HTMLElement) cursor.classList.add('cursor-text');
      };
      
      const mouseLeaveListener = () => {
        if (cursor instanceof HTMLElement) cursor.classList.remove('cursor-text');
      };
      
      // Store listeners to allow removal
      mouseEnterListeners.set(element, mouseEnterListener);
      mouseLeaveListeners.set(element, mouseLeaveListener);
      
      element.addEventListener('mouseenter', mouseEnterListener);
      element.addEventListener('mouseleave', mouseLeaveListener);
    });
    
    // For form input elements and elements with no-custom-cursor class - hide the custom cursor
    const noCursorElements = document.querySelectorAll('input, textarea, select, option, button.no-custom-cursor, .no-custom-cursor');
    
    noCursorElements.forEach(element => {
      const mouseEnterListener = () => {
        if (cursor instanceof HTMLElement) cursor.style.opacity = '0';
        if (cursorDot instanceof HTMLElement) cursorDot.style.opacity = '0';
        
        // Set form field active flag
        isOverFormElement = true;
      };
      
      const mouseLeaveListener = () => {
        if (cursor instanceof HTMLElement) cursor.style.opacity = '1';
        if (cursorDot instanceof HTMLElement) cursorDot.style.opacity = '1';
        
        // Clear form field active flag
        isOverFormElement = false;
      };
      
      // Store listeners to allow removal
      mouseEnterListeners.set(element, mouseEnterListener);
      mouseLeaveListeners.set(element, mouseLeaveListener);
      
      element.addEventListener('mouseenter', mouseEnterListener);
      element.addEventListener('mouseleave', mouseLeaveListener);
    });
  };
  
  // Animation loop for smooth cursor movement
  const render = (): void => {
    // Smooth follow effect for main cursor - ensure animation uses speed parameter
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    // Faster movement for cursor dot (feels more responsive)
    cursorDotX += (mouseX - cursorDotX) * 0.3;
    cursorDotY += (mouseY - cursorDotY) * 0.3;
    
    // Apply positions with transform for hardware acceleration
    if (cursor instanceof HTMLElement) {
      cursor.style.transform = `translate(${Math.round(cursorX)}px, ${Math.round(cursorY)}px) translate(-50%, -50%)`;
    }
    
    if (cursorDot instanceof HTMLElement) {
      cursorDot.style.transform = `translate(${Math.round(cursorDotX)}px, ${Math.round(cursorDotY)}px) translate(-50%, -50%)`;
    }
    
    // Continue animation loop
    requestAnimationFrame(render);
  };
  
  // Start the animation
  requestAnimationFrame(render);
  
  // Setup hover effects
  handleHoverEvents();
  
  // Apply cursor selectively - not on form elements
  document.body.style.cursor = 'none';
  
  // Restore normal cursor on form elements and elements with no-custom-cursor class
  const formElements = document.querySelectorAll('input, textarea, select, button, .no-custom-cursor');
  formElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.cursor = 'auto';
    }
  });
  
  // Make buttons and links have pointer cursor
  const pointerElements = document.querySelectorAll('a, button:not(.no-custom-cursor)');
  pointerElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.cursor = 'pointer';
    }
  });
  
  // Handle touch devices (disable custom cursor)
  if ('ontouchstart' in window) {
    if (cursor instanceof HTMLElement) cursor.style.display = 'none';
    if (cursorDot instanceof HTMLElement) cursorDot.style.display = 'none';
    document.body.style.cursor = 'auto';
  }
  
  // Clean up function to remove all event listeners
  const cleanup = () => {
    document.querySelectorAll('a, button, p, h1, h2, h3, h4, h5, h6, span, li, input, textarea, select, option').forEach(element => {
      const mouseEnterListener = mouseEnterListeners.get(element);
      const mouseLeaveListener = mouseLeaveListeners.get(element);
      
      if (mouseEnterListener) {
        element.removeEventListener('mouseenter', mouseEnterListener);
      }
      
      if (mouseLeaveListener) {
        element.removeEventListener('mouseleave', mouseLeaveListener);
      }
    });
  };
  
  // Return cleanup function for potential future use
  return cleanup;
}; 