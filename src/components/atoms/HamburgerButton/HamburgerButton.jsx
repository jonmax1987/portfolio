import { HiMenuAlt3 } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { HamburgerButtonStyled } from './HamburgerButton.styled';

const HamburgerButton = ({ onClick, isOpen }) => {
    return (
        <HamburgerButtonStyled 
            onClick={onClick} 
            $isOpen={isOpen}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <HiMenuAlt3 aria-hidden="true" />
        </HamburgerButtonStyled>
    );
};

HamburgerButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default HamburgerButton;