import { HiMenuAlt3 } from 'react-icons/hi';
import { HamburgerButtonStyled } from './HamburgerButton.styled';

const HamburgerButton = ({ onClick, isOpen }) => {
    return (
        <HamburgerButtonStyled onClick={onClick} $isOpen={isOpen}>
            <HiMenuAlt3 />
        </HamburgerButtonStyled>
    );
};

export default HamburgerButton;