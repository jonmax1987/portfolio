import React from 'react';
import PropTypes from 'prop-types';
import ThemeToggle from '../../atoms/ThemeToggle';
import HamburgerButton from '../../atoms/HamburgerButton';
import SocialLinks from '../SocialLinks';
import { ActionsContainer } from './HeaderActions.styled';

/**
 * Header Actions Component
 * Contains theme toggle, social links, and mobile menu button
 */
const HeaderActions = ({
  currentTheme = 'light',
  onThemeToggle,
  showThemeToggle = true,
  socialLinks = [],
  isMenuOpen = false,
  onMenuToggle,
  className
}) => {
  return (
    <ActionsContainer className={className}>
      {/* Theme Toggle */}
      {showThemeToggle && onThemeToggle && (
        <ThemeToggle
          currentTheme={currentTheme}
          onThemeToggle={onThemeToggle}
        />
      )}

      {/* Social Links */}
      <SocialLinks socialLinks={socialLinks} />

      {/* Mobile Menu Toggle */}
      <HamburgerButton 
        onClick={onMenuToggle}
        isOpen={isMenuOpen}
      />
    </ActionsContainer>
  );
};

HeaderActions.propTypes = {
  currentTheme: PropTypes.oneOf(['light', 'dark']),
  onThemeToggle: PropTypes.func,
  showThemeToggle: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  isMenuOpen: PropTypes.bool,
  onMenuToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default React.memo(HeaderActions);
