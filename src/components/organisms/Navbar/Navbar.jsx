import { useState, useEffect, useRef } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Logo from '../../atoms/Logo';
import HamburgerButton from '../../atoms/HamburgerButton';
import NavLinksList from '../../molecules/NavLinksList';
import { 
    NavbarStyled, 
    NavbarContainer, 
    DesktopNav, 
    MobileNav,
    ThemeToggle 
} from './Navbar.styled';

const Navbar = ({ 
    toggleTheme, 
    currentTheme = 'light',
    onLogoClick,
    className = '' 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileNavRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Handle mobile menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close mobile menu with Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                // Return focus to hamburger button
                if (hamburgerRef.current) {
                    hamburgerRef.current.focus();
                }
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    // Trap focus in mobile menu when open
    useEffect(() => {
        if (isOpen && mobileNavRef.current) {
            const focusableElements = mobileNavRef.current.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }

            const handleTabKey = (e) => {
                if (e.key === 'Tab') {
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            document.addEventListener('keydown', handleTabKey);
            return () => document.removeEventListener('keydown', handleTabKey);
        }
    }, [isOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close mobile menu when clicking outside or on link
    const handleLinkClick = (sectionId) => {
        // Smooth scroll logic here
        const easeOut = (t) => 1 - Math.pow(1 - t, 2);
        const element = document.getElementById(sectionId);
        
        if (element) {
            const targetPosition = element.offsetTop - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 400;
            let start = null;

            const animation = (currentTime) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeOut(progress);
                
                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };

            requestAnimationFrame(animation);
        }
        
        setActiveSection(sectionId);
        setIsOpen(false); // Close mobile menu
    };

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 20);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <NavbarStyled 
            className={`navbar ${isScrolled ? 'scrolled' : ''} ${className}`}
            $isScrolled={isScrolled}
            role="navigation"
            aria-label="Main navigation"
        >
            <NavbarContainer>
                {/* Logo */}
                <Logo onClick={onLogoClick || (() => handleLinkClick('home'))} />

                {/* Desktop Navigation */}
                <DesktopNav role="menubar" aria-label="Desktop navigation">
                    <NavLinksList 
                        onLinkClick={handleLinkClick}
                        activeSection={activeSection}
                        isVertical={false}
                    />
                    
                    {/* Theme Toggle */}
                    <ThemeToggle 
                        onClick={toggleTheme}
                        aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
                        title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
                        role="switch"
                        aria-checked={currentTheme === 'dark'}
                    >
                        <span className="theme-icon" aria-hidden="true">
                            {currentTheme === 'light' ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="sr-only">
                            {currentTheme === 'light' ? 'Dark' : 'Light'} mode
                        </span>
                    </ThemeToggle>
                </DesktopNav>

                {/* Mobile Hamburger */}
                <div ref={hamburgerRef}>
                    <HamburgerButton onClick={toggleMenu} isOpen={isOpen} />
                </div>

                {/* Mobile Navigation */}
                <MobileNav 
                    $isOpen={isOpen}
                    id="mobile-menu"
                    role="menu"
                    aria-label="Mobile navigation"
                    aria-hidden={!isOpen}
                    ref={mobileNavRef}
                >
                    <NavLinksList 
                        onLinkClick={handleLinkClick}
                        activeSection={activeSection}
                        isVertical={true}
                    />
                    
                    <ThemeToggle 
                        onClick={toggleTheme}
                        aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
                        role="switch"
                        aria-checked={currentTheme === 'dark'}
                    >
                        <span className="theme-icon" aria-hidden="true">
                            {currentTheme === 'light' ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="theme-text">Toggle Theme</span>
                    </ThemeToggle>
                </MobileNav>
            </NavbarContainer>
        </NavbarStyled>
    );
};

export default Navbar;