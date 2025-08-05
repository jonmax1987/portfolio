import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom';

// ===================================
//  Styled Components
// ===================================

const Nav = styled.nav`
  // ... (הסגנונות נשארים זהים, אין צורך לשנותם)
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

// רכיב הלוגו עכשיו משתמש ב-Link של React Router
const Logo = styled(RouterLink)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.brandPrimary};
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ isOpen, theme }) => (isOpen ? theme.shadows.md : 'none')};
  }
`;

const NavItem = styled.li`
  margin-left: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
`;

// רכיב הקישור משתמש ב-NavLink עבור סגנון מיוחד לקישור פעיל
const NavLink = styled(RouterNavLink)`
  display: block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    z-index: 200;
  }
`;

const HamburgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  margin: 5px 0;
  transition: all 0.3s ease;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-left: ${({ theme }) => theme.spacing.md};
`;

// ===================================
//  React Component
// ===================================

const Navbar = ({ toggleTheme }) => {
  return (
    <>
    hello
    </>
  );
};

export default Navbar;