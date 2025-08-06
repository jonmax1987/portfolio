import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from '../../atoms/SocialIcon';
import { SocialLinksContainer } from './SocialLinks.styled';

/**
 * Social Links Component
 * Renders a collection of social media icons
 */
const SocialLinks = ({
  socialLinks = [],
  $isMobile = false,
  className
}) => {
  if (!socialLinks || socialLinks.length === 0) {
    return null;
  }

  return (
    <SocialLinksContainer $isMobile={$isMobile} className={className}>
      {socialLinks.map((social, index) => (
        <SocialIcon
          key={index}
          icon={social.icon}
          href={social.href}
          label={social.label}
          $isMobile={$isMobile}
        />
      ))}
    </SocialLinksContainer>
  );
};

SocialLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  $isMobile: PropTypes.bool,
  className: PropTypes.string
};

export default React.memo(SocialLinks);
