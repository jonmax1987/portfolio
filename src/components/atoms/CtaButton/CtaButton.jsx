import React from 'react';
import PropTypes from 'prop-types';
import { CtaButtonStyled } from './CtaButton.styled';

/**
 * CtaButton - Call-to-action button component
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.variant] - Button style variant
 * @param {string} [props.size] - Button size
 * @param {boolean} [props.disabled] - Whether button is disabled
 * @param {boolean} [props.loading] - Whether button is in loading state
 * @param {string} [props.href] - URL for link button
 * @param {string} [props.target] - Link target attribute
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.type] - Button type (button, submit, reset)
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.delay] - Animation delay in milliseconds
 * @param {Object} [props...rest] - Additional props
 * 
 * @example
 * <CtaButton variant="primary" onClick={handleClick}>
 *   Get Started
 * </CtaButton>
 * <CtaButton variant="secondary" href="/about" target="_blank">
 *   Learn More
 * </CtaButton>
 */
const CtaButton = React.memo(({ 
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  href,
  target,
  onClick,
  type = 'button',
  className,
  delay = 0,
  ...props 
}) => {
  // Use 'a' tag for links, 'button' for actions
  const Component = href ? 'a' : 'button';
  
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  const buttonProps = {
    className,
    $variant: variant,
    $size: size,
    $disabled: disabled,
    $loading: loading,
    $delay: delay,
    onClick: handleClick,
    ...(href ? { href, target } : { type }),
    ...(disabled && { 'aria-disabled': true }),
    ...(loading && { 'aria-busy': true }),
    ...props,
  };

  return (
    <CtaButtonStyled 
      as={Component}
      {...buttonProps}
    >
      {loading ? (
        <>
          <span className="loading-spinner" aria-hidden="true" />
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        children
      )}
    </CtaButtonStyled>
  );
});

CtaButton.displayName = 'CtaButton';

CtaButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  delay: PropTypes.number,
};

CtaButton.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  type: 'button',
  delay: 0,
};

export default CtaButton;