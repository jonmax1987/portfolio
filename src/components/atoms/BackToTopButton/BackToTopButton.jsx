import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { BackToTopButtonStyled } from './BackToTopButton.styled';

/**
 * BackToTopButton Component
 * 
 * A floating button that appears when user scrolls down
 * and smoothly scrolls back to the top of the page
 */
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <BackToTopButtonStyled
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <FaArrowUp />
    </BackToTopButtonStyled>
  );
};

export default BackToTopButton;
