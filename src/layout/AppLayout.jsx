import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

// Theme and Global Styles
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../styles/GlobalStyles';

// Organisms
import Header from '../components/organisms/Header';
import BackToTopButton from '../components/atoms/BackToTopButton';

// Styled Components
import {
  LayoutContainer,
  SkipNavigation,
  MainContent
} from './AppLayout.styled';

/**
 * App Layout Component  
 * Features: Theme provider, global styles, header, skip navigation
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {boolean} [props.showThemeToggle=true] - Whether to show theme toggle button
 * @param {string} [props.skipNavigationHref="#main"] - Skip navigation target
 * @param {string} [props.skipNavigationText="Skip to main content"] - Skip navigation text
 */
const AppLayout = ({ 
  children, 
  showThemeToggle = true,
  skipNavigationHref = "#main",
  skipNavigationText = "Skip to main content"
}) => {
  // Theme state management
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to light mode
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Memoized theme toggle handler
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      // Save preference to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
      }
      return newMode;
    });
  }, []);

  // Keyboard handler for theme toggle
  const handleThemeToggleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  }, [toggleTheme]);

  // Select current theme
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <LayoutContainer>
        {/* Skip Navigation for Accessibility */}
        <SkipNavigation 
          href={skipNavigationHref}
          aria-label={skipNavigationText}
        >
          {skipNavigationText}
        </SkipNavigation>

        {/* App Header */}
        <Header 
          currentTheme={isDarkMode ? 'dark' : 'light'}
          onThemeToggle={toggleTheme}
          showThemeToggle={showThemeToggle}
        />

        {/* Main Content Area */}
        <MainContent id="main" role="main">
          {children}
        </MainContent>

        {/* Back to Top Button */}
        <BackToTopButton />
      </LayoutContainer>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showThemeToggle: PropTypes.bool,
  skipNavigationHref: PropTypes.string,
  skipNavigationText: PropTypes.string
};

export default React.memo(AppLayout);
