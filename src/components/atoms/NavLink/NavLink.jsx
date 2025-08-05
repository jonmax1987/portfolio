import { NavLinkStyled } from './NavLink.styled';

const NavLink = ({ 
    sectionId, 
    label, 
    isActive = false,
    onClick 
}) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick(sectionId);
        }
    };

    return (
        <NavLinkStyled 
            href={`#${sectionId}`}
            onClick={handleClick}
            className={isActive ? 'active' : ''}
            aria-label={`Navigate to ${label} section`}
        >
            {label}
        </NavLinkStyled>
    );
};

export default NavLink;