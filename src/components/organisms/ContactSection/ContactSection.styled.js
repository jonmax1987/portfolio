import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const scaleIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const ContactSectionStyled = styled.section`
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.xl} 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    display: flex;
    align-items: center;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        pointer-events: none;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.xxl} 0;
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    position: relative;
    z-index: 1;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 ${({ theme }) => theme.spacing.lg};
    }
`;

export const Content = styled.div`
    text-align: center;
    animation: ${fadeIn} 1s ease-out;
`;

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.typography.fontSize.xxxl || '3rem'};
        margin-bottom: ${({ theme }) => theme.spacing.lg};
    }
`;

export const Subtitle = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    opacity: 0.9;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed || '1.6'};
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.typography.fontSize.xl};
        margin-bottom: ${({ theme }) => theme.spacing.xxl};
    }
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(3, 1fr);
        gap: ${({ theme }) => theme.spacing.xl};
        margin-bottom: ${({ theme }) => theme.spacing.xxl};
    }
`;

export const ContactCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.lg};
    text-align: center;
    transition: all 0.3s ease;
    animation: ${scaleIn} 0.6s ease-out ${({ $delay }) => $delay || 0}s both;
    cursor: ${({ href }) => href ? 'pointer' : 'default'};
    text-decoration: none;
    color: inherit;

    &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.xl};
    }
`;

export const ContactIcon = styled.div`
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    transition: all 0.3s ease;

    ${ContactCard}:hover & {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
`;

export const ContactInfo = styled.div`
    text-align: center;
`;

export const ContactTitle = styled.h3`
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ContactDetail = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    opacity: 0.9;
    margin: 0;
`;

export const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto ${({ theme }) => theme.spacing.xl};
    animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`;

export const Form = styled.form`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.xl};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.xxl};
    }
`;

export const FormGroup = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-align: left;
`;

export const Label = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Input = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-family: inherit;
    resize: vertical;
    min-height: 120px;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.white || '#ffffff'};
    color: ${({ theme }) => theme.colors.brandPrimary || '#667eea'};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.lg};
    animation: ${fadeInUp} 0.8s ease-out 0.8s both;
`;

export const SocialLink = styled.a`
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white || '#ffffff'};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    text-decoration: none;
    transition: all 0.3s ease;
    animation: ${scaleIn} 0.6s ease-out ${({ $delay }) => $delay + 0.8 || 0.8}s both;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-3px) scale(1.1);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    }
`;
