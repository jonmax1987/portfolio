import { useState, useEffect } from 'react';
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

    // Handle mobile menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
        >
            <NavbarContainer>
                {/* Logo */}
                <Logo onClick={onLogoClick || (() => handleLinkClick('home'))} />

                {/* Desktop Navigation */}
                <DesktopNav>
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
                    >
                        {currentTheme === 'light' ? '🌙' : '☀️'}
                    </ThemeToggle>
                </DesktopNav>

                {/* Mobile Hamburger */}
                <HamburgerButton onClick={toggleMenu} isOpen={isOpen} />

                {/* Mobile Navigation */}
                <MobileNav $isOpen={isOpen}>
                    <NavLinksList 
                        onLinkClick={handleLinkClick}
                        activeSection={activeSection}
                        isVertical={true}
                    />
                    
                    <ThemeToggle 
                        onClick={toggleTheme}
                        aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
                    >
                        {currentTheme === 'light' ? '🌙' : '☀️'} 
                        <span>Toggle Theme</span>
                    </ThemeToggle>
                </MobileNav>
            </NavbarContainer>
        </NavbarStyled>
    );
};

export default Navbar;