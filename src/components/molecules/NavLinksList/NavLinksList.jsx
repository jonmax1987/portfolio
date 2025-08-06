import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../../atoms/NavLink';
import { NavLinksListStyled } from './NavLinksList.styled';

const NavLinksList = ({ 
    navigationItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
    ],
    activeSection = '',
    onNavClick,
    $isMobile = false,
    className = ''
}) => {
    return (
        <NavLinksListStyled 
            className={className}
            $isMobile={$isMobile}
        >
            {navigationItems.map((item, index) => (
                <li key={index}>
                    <NavLink
                        href={item.href}
                        label={item.label}
                        isActive={activeSection === item.href.replace('#', '')}
                        onClick={(e) => {
                            e.preventDefault();
                            onNavClick && onNavClick(item.href);
                        }}
                        $isMobile={$isMobile}
                    />
                </li>
            ))}
        </NavLinksListStyled>
    );
};

NavLinksList.propTypes = {
    navigationItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
    ),
    activeSection: PropTypes.string,
    onNavClick: PropTypes.func,
    $isMobile: PropTypes.bool,
    className: PropTypes.string
};

export default NavLinksList;