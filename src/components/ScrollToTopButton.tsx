'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopButtonProps {
  scrollThreshold?: number;
  scrollDuration?: number;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  scrollThreshold = 300,
  scrollDuration = 500,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1);
      
      // Easing function for smooth animation
      const easeInOutCubic = (t: number) => 
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easedProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="חזרה לראש העמוד"
      className={`
        fixed bottom-6 left-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-primary text-white
        shadow-lg hover:bg-primary-dark
        focus:outline-none focus:ring-2 focus:ring-secondary
        transition-all duration-300 ease-in-out
        transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
      `}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;