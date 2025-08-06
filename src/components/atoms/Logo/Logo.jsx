import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoStyled = styled.div`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.brandPrimary};
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
    
    .bracket {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    }
    
    .name {
        color: ${({ theme }) => theme.colors.textPrimary};
        margin: 0 ${({ theme }) => theme.spacing.xs};
    }
    
    .slash {
        color: ${({ theme }) => theme.colors.brandSecondary || theme.colors.brandPrimary};
        margin-left: ${({ theme }) => theme.spacing.xs};
    }
    
    &:hover {
        transform: scale(1.05);
        
        .bracket {
            color: ${({ theme }) => theme.colors.brandPrimary};
        }
        
        .name {
            color: ${({ theme }) => theme.colors.brandPrimary};
        }
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
    }
`;

const Logo = ({ onClick }) => {
    return (
        <LogoStyled onClick={onClick}>
            <span className="bracket">&lt;</span>
            <span className="name">Jonathan Max</span>
            <span className="slash">/&gt;</span>
        </LogoStyled>
    );
};

Logo.propTypes = {
    onClick: PropTypes.func,
};

export default Logo;