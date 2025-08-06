import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './MobileMenuOverlay.styled';

/**
 * Mobile Menu Overlay Component
 * Provides backdrop for mobile navigation menu
 */
const MobileMenuOverlay = ({
  isOpen = false,
  onClose,
  className
}) => {
  if (!isOpen) return null;

  return (
    <Overlay
      onClick={onClose}
      aria-hidden="true"
      className={className}
    />
  );
};

MobileMenuOverlay.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default React.memo(MobileMenuOverlay);
