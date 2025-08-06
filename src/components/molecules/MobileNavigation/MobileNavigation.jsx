import React from 'react';
import PropTypes from 'prop-types';
import NavLinksList from '../NavLinksList';
import SocialLinks from '../SocialLinks';
import { MobileNavigationContainer } from './MobileNavigation.styled';

/**
 * Mobile Navigation Component
 * Renders the mobile menu with navigation links and social icons
 */
const MobileNavigation = ({
  navigationItems = [],
  socialLinks = [],
  activeSection = '',
  onNavClick,
  isOpen = false,
  className
}) => {
  if (!isOpen) return null;

  return (
    <MobileNavigationContainer
      id="mobile-menu"
      role="navigation"
      aria-label="Mobile navigation"
      className={className}
    >
      <NavLinksList
        navigationItems={navigationItems}
        activeSection={activeSection}
        onNavClick={onNavClick}
        $isMobile
      />

      <SocialLinks
        socialLinks={socialLinks}
        $isMobile
      />
    </MobileNavigationContainer>
  );
};

MobileNavigation.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  activeSection: PropTypes.string,
  onNavClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  className: PropTypes.string
};

export default React.memo(MobileNavigation);
