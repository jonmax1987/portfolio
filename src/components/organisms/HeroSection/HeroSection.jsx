import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HeroContent from '../../molecules/HeroContent';
import { 
  HeroSectionStyled, 
  HeroContainer, 
  HeroBackground,
  HeroOverlay,
  HeroScrollIndicator,
  HeroParticles
} from './HeroSection.styled';

/**
 * HeroSection - Complete hero section organism
 * 
 * A comprehensive hero section that combines content, background effects,
 * scroll indicators, and advanced animations into a cohesive experience.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Main hero title
 * @param {string} props.subtitle - Supporting subtitle text
 * @param {Array} [props.actions] - Array of action button objects
 * @param {string} [props.backgroundImage] - Background image URL
 * @param {string} [props.backgroundVideo] - Background video URL
 * @param {Object} [props.backgroundGradient] - Custom gradient configuration
 * @param {boolean} [props.showParticles] - Whether to show particle effects
 * @param {boolean} [props.showScrollIndicator] - Whether to show scroll indicator
 * @param {boolean} [props.fullHeight] - Whether to use full viewport height
 * @param {boolean} [props.centered] - Whether to center content
 * @param {string} [props.theme] - Theme variant (light, dark, auto)
 * @param {Function} [props.onScrollIndicatorClick] - Scroll indicator click handler
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props...rest] - Additional props
 * 
 * @example
 * <HeroSection
 *   title="Full Stack Developer"
 *   subtitle="Creating amazing digital experiences with modern technologies"
 *   actions={[
 *     { text: "View Portfolio", variant: "primary", href: "#portfolio" },
 *     { text: "Contact Me", variant: "outline", href: "#contact" }
 *   ]}
 *   backgroundGradient={{
 *     from: "135deg",
 *     colors: ["#667eea", "#764ba2"]
 *   }}
 *   showParticles
 *   showScrollIndicator
 *   fullHeight
 *   centered
 * />
 */
const HeroSection = React.memo(({
  title,
  subtitle,
  actions = [],
  backgroundImage,
  backgroundVideo,
  backgroundGradient,
  showParticles = false,
  showScrollIndicator = true,
  fullHeight = true,
  centered = true,
  theme = 'auto',
  onScrollIndicatorClick,
  className,
  children,
  ...props
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (showParticles || backgroundImage || backgroundVideo) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showParticles, backgroundImage, backgroundVideo]);

  // Handle scroll indicator click
  const handleScrollIndicatorClick = () => {
    if (onScrollIndicatorClick) {
      onScrollIndicatorClick();
    } else {
      // Default behavior: scroll to next section
      const nextSection = sectionRef.current?.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Validation
  if (!title && !subtitle && !children && actions.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('HeroSection: No content provided');
    }
    return null;
  }


  return (
    <HeroSectionStyled
      ref={sectionRef}
      className={className}
      $fullHeight={fullHeight}
      $theme={theme}
      $isVisible={isVisible}
      role="banner"
      aria-label="Hero section"
      {...props}
    >
      {/* Background Layer */}
      <HeroBackground
        $backgroundImage={backgroundImage}
        $backgroundGradient={backgroundGradient}
        $scrollY={scrollY}
        aria-hidden="true"
      >
        {/* Background Video */}
        {backgroundVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
            aria-hidden="true"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}

        {/* Particle Effects */}
        {showParticles && (
          <HeroParticles 
            $scrollY={scrollY}
            aria-hidden="true"
          />
        )}
      </HeroBackground>

      {/* Overlay for better text readability */}
      <HeroOverlay 
        $hasBackground={!!(backgroundImage || backgroundVideo || backgroundGradient)}
        aria-hidden="true"
      />

      {/* Main Content */}
      <HeroContainer $centered={centered}>
        {children || (
          <HeroContent
            title={title}
            subtitle={subtitle}
            actions={actions}
            centered={centered}
            animationDelay={isVisible ? 300 : 0}
          />
        )}
      </HeroContainer>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <HeroScrollIndicator
          onClick={handleScrollIndicatorClick}
          role="button"
          tabIndex={0}
          aria-label="Scroll to next section"
          title="Scroll down to see more"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleScrollIndicatorClick();
            }
          }}
        >
          <span className="scroll-arrow" aria-hidden="true">↓</span>
          <span className="scroll-text">Scroll</span>
        </HeroScrollIndicator>
      )}
    </HeroSectionStyled>
  );
});

HeroSection.displayName = 'HeroSection';

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
      href: PropTypes.string,
      onClick: PropTypes.func,
      target: PropTypes.string,
      download: PropTypes.bool,
      disabled: PropTypes.bool,
    })
  ),
  backgroundImage: PropTypes.string,
  backgroundVideo: PropTypes.string,
  backgroundGradient: PropTypes.shape({
    from: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  showParticles: PropTypes.bool,
  showScrollIndicator: PropTypes.bool,
  fullHeight: PropTypes.bool,
  centered: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark', 'auto']),
  onScrollIndicatorClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

HeroSection.defaultProps = {
  actions: [],
  showParticles: false,
  showScrollIndicator: true,
  fullHeight: true,
  centered: true,
  theme: 'auto',
};

export default HeroSection;
