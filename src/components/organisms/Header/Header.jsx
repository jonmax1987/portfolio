import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

// Import reusable components
import Logo from '../../atoms/Logo';
import HamburgerButton from '../../atoms/HamburgerButton';

// Styled Components
import {
  HeaderContainer,
  HeaderContent,
  Navigation,
  NavList,
  NavItem,
  NavLink,
  ActionsContainer,
  ThemeToggleButton,
  SocialLinks,
  SocialLink
} from './Header.styled';

/**
 * Professional Header Component
 * Features: Sticky navigation, mobile menu, social links, scroll effects
 */
const Header = ({
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

    // Always listen to scroll since header is now in grid layout
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

  // Close menu when clicking on overlay background
  const handleOverlayClick = useCallback((e) => {
    // Only close if clicking on the overlay itself, not its children
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
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
          <Navigation 
            role="navigation"
            aria-label="Main navigation"
          >
            <NavList>
              {navigationItems.map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    href={item.href}
                    $isActive={activeSection === item.href.replace('#', '')}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    aria-current={
                      activeSection === item.href.replace('#', '') ? 'page' : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </Navigation>

          {/* Actions Container */}
          <ActionsContainer>
            {/* Theme Toggle */}
            {showThemeToggle && onThemeToggle && (
              <ThemeToggleButton
                onClick={onThemeToggle}
                aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
                title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
                type="button"
              >
                {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
              </ThemeToggleButton>
            )}

            {/* Social Links */}
            <SocialLinks>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <SocialLink
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <IconComponent />
                  </SocialLink>
                );
              })}
            </SocialLinks>

            {/* Mobile Menu Toggle */}
            <HamburgerButton 
              onClick={toggleMenu}
              isOpen={isMenuOpen}
            />
          </ActionsContainer>
        </HeaderContent>
      </HeaderContainer>

      {/* Mobile Navigation Menu - Modern dropdown style */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(2px)',
              zIndex: 999
            }}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          
          <Navigation 
            id="mobile-menu"
            $isMobile
            role="navigation"
            aria-label="Mobile navigation"
          >
            <NavList $isMobile>
              {navigationItems.map((item, index) => (
                <NavItem key={index} $isMobile>
                  <NavLink
                    href={item.href}
                    $isActive={activeSection === item.href.replace('#', '')}
                    $isMobile
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    aria-current={
                      activeSection === item.href.replace('#', '') ? 'page' : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>

            {/* Mobile Social Links */}
            <SocialLinks $isMobile>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <SocialLink
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    $isMobile
                  >
                    <IconComponent />
                  </SocialLink>
                );
              })}
            </SocialLinks>
          </Navigation>
        </>
      )}
    </>
  );
};

Header.propTypes = {
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

export default React.memo(Header);
