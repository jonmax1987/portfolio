import React from 'react';
import PropTypes from 'prop-types';
import { SocialIconLink } from './SocialIcon.styled';

/**
 * Social Icon Component
 * Renders a social media icon with proper accessibility
 */
const SocialIcon = ({
  icon: Icon,
  href,
  label,
  $isMobile = false,
  className
}) => {
  return (
    <SocialIconLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      $isMobile={$isMobile}
      className={className}
    >
      <Icon aria-hidden="true" />
    </SocialIconLink>
  );
};

SocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  $isMobile: PropTypes.bool,
  className: PropTypes.string
};

export default React.memo(SocialIcon);
