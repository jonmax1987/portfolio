import React from 'react';
import PropTypes from 'prop-types';
import { HeroTitleStyled } from './HeroTitle.styled';

/**
 * HeroTitle - Main heading component for hero sections
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.title] - The title text to display
 * @param {React.ReactNode} [props.children] - Alternative content to display
 * @param {string} [props.as] - HTML element to render (h1, h2, etc.)
 * @param {number} [props.delay] - Animation delay in milliseconds
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props...rest] - Additional props passed to styled component
 * 
 * @example
 * <HeroTitle title="Welcome to My Portfolio" />
 * <HeroTitle as="h2" delay={300}>Custom Heading</HeroTitle>
 */
const HeroTitle = React.memo(({ 
  title, 
  children, 
  as = "h1",
  delay = 0,
  className,
  ...props 
}) => {
  const content = title || children;

  
  if (!content) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('HeroTitle: No content provided (title or children)');
    }
    return null;
  }

  return (
    <HeroTitleStyled 
      as={as}
      className={className}
      $delay={delay}
      role="heading"
      aria-level={as === 'h1' ? '1' : '2'}
      {...props}
    >
      {content}
    </HeroTitleStyled>
  );
});

HeroTitle.displayName = 'HeroTitle';

HeroTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  delay: PropTypes.number,
  className: PropTypes.string,
};

HeroTitle.defaultProps = {
  as: 'h1',
  delay: 0,
};

export default HeroTitle;