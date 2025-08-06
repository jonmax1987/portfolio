import React from 'react';
import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeToggleButton } from './ThemeToggle.styled';

/**
 * Theme Toggle Button Component
 * Allows users to switch between light and dark themes
 */
const ThemeToggle = ({
  currentTheme = 'light',
  onThemeToggle,
  className
}) => {
  return (
    <ThemeToggleButton
      onClick={onThemeToggle}
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
      type="button"
      className={className}
    >
      {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
    </ThemeToggleButton>
  );
};

ThemeToggle.propTypes = {
  currentTheme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onThemeToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default React.memo(ThemeToggle);
