import React from 'react';
import PropTypes from 'prop-types';
import HeroTitle from '../../atoms/HeroTitle';
import HeroSubtitle from '../../atoms/HeroSubtitle';
import CtaButton from '../../atoms/CtaButton';
import { HeroContentStyled, HeroContentContainer, HeroActions } from './HeroContent.styled';

/**
 * HeroContent - Hero section content molecule
 * 
 * Combines HeroTitle, HeroSubtitle, and CtaButtons into a cohesive content block
 * with orchestrated animations and responsive layout.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Main hero title
 * @param {string} props.subtitle - Supporting subtitle text
 * @param {Array} [props.actions] - Array of action button objects
 * @param {string} [props.titleAs] - HTML element for title (h1, h2, etc.)
 * @param {string} [props.subtitleAs] - HTML element for subtitle
 * @param {boolean} [props.centered] - Whether to center align content
 * @param {number} [props.animationDelay] - Base animation delay in ms
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props...rest] - Additional props
 * 
 * @example
 * <HeroContent
 *   title="Welcome to My Portfolio"
 *   subtitle="I'm a passionate developer creating amazing digital experiences"
 *   actions={[
 *     { text: "View My Work", variant: "primary", href: "#projects" },
 *     { text: "Contact Me", variant: "outline", href: "#contact" }
 *   ]}
 *   centered
 * />
 */
const HeroContent = React.memo(({
  title,
  subtitle,
  actions = [],
  titleAs = 'h1',
  subtitleAs = 'p',
  centered = false,
  animationDelay = 0,
  className,
  children,
  ...props
}) => {
  // Validation
  if (!title && !subtitle && !children && actions.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('HeroContent: No content provided (title, subtitle, children, or actions)');
    }
    return null;
  }

  // Calculate staggered animation delays
  const titleDelay = animationDelay;
  const subtitleDelay = animationDelay + 200;
  const actionsDelay = animationDelay + 400;

  return (
    <HeroContentStyled 
      className={className}
      $centered={centered}
      role="banner"
      aria-label="Hero content section"
      {...props}
    >
      <HeroContentContainer>
        {/* Title */}
        {title && (
          <HeroTitle 
            as={titleAs}
            title={title}
            delay={titleDelay}
          />
        )}

        {/* Subtitle */}
        {subtitle && (
          <HeroSubtitle 
            as={subtitleAs}
            subtitle={subtitle}
            delay={subtitleDelay}
          />
        )}

        {/* Custom children content */}
        {children}

        {/* Action buttons */}
        {actions.length > 0 && (
          <HeroActions 
            role="group"
            aria-label="Hero action buttons"
            $actionsCount={actions.length}
          >
            {actions.map((action, index) => {
              const {
                text,
                children: actionChildren,
                variant = 'primary',
                size = 'medium',
                href,
                onClick,
                disabled = false,
                loading = false,
                ...actionProps
              } = action;

              const buttonDelay = actionsDelay + (index * 100);

              return (
                <CtaButton
                  key={`action-${index}`}
                  variant={variant}
                  size={size}
                  href={href}
                  onClick={onClick}
                  disabled={disabled}
                  loading={loading}
                  delay={buttonDelay}
                  {...actionProps}
                >
                  {actionChildren || text}
                </CtaButton>
              );
            })}
          </HeroActions>
        )}
      </HeroContentContainer>
    </HeroContentStyled>
  );
});

HeroContent.displayName = 'HeroContent';

HeroContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      children: PropTypes.node,
      variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      href: PropTypes.string,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
      loading: PropTypes.bool,
    })
  ),
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  subtitleAs: PropTypes.oneOf(['p', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span']),
  centered: PropTypes.bool,
  animationDelay: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

HeroContent.defaultProps = {
  actions: [],
  titleAs: 'h1',
  subtitleAs: 'p',
  centered: false,
  animationDelay: 0,
};

export default HeroContent;
