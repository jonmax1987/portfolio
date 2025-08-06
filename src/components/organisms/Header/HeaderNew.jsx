import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Import reusable components
import Logo from '../../atoms/Logo';
import NavLinksList from '../../molecules/NavLinksList';
import HeaderActions from '../../molecules/HeaderActions';
import MobileNavigation from '../../molecules/MobileNavigation';
import MobileMenuOverlay from '../../atoms/MobileMenuOverlay';

// Styled Components
import {
  HeaderContainer,
  HeaderContent
} from './Header.styled';

/**
 * Modern Professional Header Component
 * Features: Responsive design, Atomic Design principles, mobile menu
 */
const HeaderNew = ({
  navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  socialLinks = [
    { icon: FaGithub, href: "https://github.com/jonmax1987", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/jonmax1987", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:jonathan.max@email.com", label: "Email" }
  ],
  currentTheme = 'light',
  onThemeToggle,
  showThemeToggle = true
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => 
        item.href.replace('#', '')
      );

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Close menu when clicking on link
  const handleNavClick = useCallback((href) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <HeaderContainer 
        $isScrolled={isScrolled}
        role="banner"
      >
        <HeaderContent>
          {/* Logo */}
          <Logo 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          />

          {/* Desktop Navigation */}
          <NavLinksList
            navigationItems={navigationItems}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          {/* Actions Container */}
          <HeaderActions
            currentTheme={currentTheme}
            onThemeToggle={onThemeToggle}
            showThemeToggle={showThemeToggle}
            socialLinks={socialLinks}
            isMenuOpen={isMenuOpen}
            onMenuToggle={toggleMenu}
          />
        </HeaderContent>
      </HeaderContainer>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay
        isOpen={isMenuOpen}
        onClose={closeMobileMenu}
      />

      {/* Mobile Navigation Menu */}
      <MobileNavigation
        navigationItems={navigationItems}
        socialLinks={socialLinks}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        isOpen={isMenuOpen}
      />
    </>
  );
};

HeaderNew.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  currentTheme: PropTypes.string,
  onThemeToggle: PropTypes.func,
  showThemeToggle: PropTypes.bool
};

export default React.memo(HeaderNew);
