import React from 'react';
import PropTypes from 'prop-types';
import { HeroSubtitleStyled } from './HeroSubtitle.styled';

/**
 * HeroSubtitle - Supporting text component for hero sections
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.subtitle] - The subtitle text to display
 * @param {React.ReactNode} [props.children] - Alternative content to display
 * @param {string} [props.as] - HTML element to render (p, h2, h3, etc.)
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.delay] - Animation delay in milliseconds
 * @param {Object} [props...rest] - Additional props passed to styled component
 * 
 * @example
 * <HeroSubtitle subtitle="Welcome to my digital portfolio" />
 * <HeroSubtitle as="h2" delay={400}>Custom subtitle</HeroSubtitle>
 */
const HeroSubtitle = React.memo(({ 
  subtitle, 
  children, 
  as = "p",
  className,
  delay = 0,
  ...props 
}) => {
  const content = subtitle || children;
  
  if (!content) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('HeroSubtitle: No content provided (subtitle or children)');
    }
    return null;
  }

  return (
    <HeroSubtitleStyled 
      as={as}
      className={className}
      $delay={delay}
      role={as === 'p' ? undefined : 'heading'}
      aria-level={as === 'h2' ? '2' : as === 'h3' ? '3' : undefined}
      {...props}
    >
      {content}
    </HeroSubtitleStyled>
  );
});

HeroSubtitle.displayName = 'HeroSubtitle';

HeroSubtitle.propTypes = {
  subtitle: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.oneOf(['p', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span']),
  className: PropTypes.string,
  delay: PropTypes.number,
};

HeroSubtitle.defaultProps = {
  as: 'p',
  delay: 0,
};

export default HeroSubtitle;
