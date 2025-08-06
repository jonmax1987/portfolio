import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkStyled } from './NavLink.styled';

const NavLink = ({ 
    href,
    label, 
    isActive = false,
    onClick,
    $isMobile = false
}) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <NavLinkStyled 
            href={href}
            onClick={handleClick}
            $isActive={isActive}
            $isMobile={$isMobile}
            aria-label={`Navigate to ${label} section`}
            aria-current={isActive ? 'page' : undefined}
        >
            {label}
        </NavLinkStyled>
    );
};

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    $isMobile: PropTypes.bool
};

export default NavLink;