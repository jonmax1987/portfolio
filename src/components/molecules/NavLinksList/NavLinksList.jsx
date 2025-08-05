import React from 'react';
import NavLink from '../../atoms/NavLink';
import { NavLinksListStyled } from './NavLinksList.styled';

const NavLinksList = ({ 
    onLinkClick, 
    activeSection = '',
    isVertical = false,
    className = ''
}) => {
    const navLinks = [
        { sectionId: 'home', label: 'Home' },
        { sectionId: 'about', label: 'About' },
        { sectionId: 'projects', label: 'Projects' },
        { sectionId: 'contact', label: 'Contact' }
    ];

    return (
        <NavLinksListStyled 
            className={`nav-links-list ${isVertical ? 'vertical' : 'horizontal'} ${className}`}
            $isVertical={isVertical}
        >
            {navLinks.map(({ sectionId, label }) => (
                <li key={sectionId}>
                    <NavLink
                        sectionId={sectionId}
                        label={label}
                        isActive={activeSection === sectionId}
                        onClick={onLinkClick}
                    />
                </li>
            ))}
        </NavLinksListStyled>
    );
};

export default NavLinksList;