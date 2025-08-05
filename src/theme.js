// A modern and high-quality theme file based on design system principles.
// This approach uses tokens for consistency and scalability.

// 1. Color Palette Tokens: Define a full color palette.
// These are the raw, unsemantic colors.
const colorPalette = {
  blue: {
    100: '#E6F0FF',
    500: '#007AFF',
    700: '#0056B3',
    900: '#002E5C',
  },
  gray: {
    100: '#F5F7FA',
    200: '#E4E7EB',
    300: '#C1C7CD',
    500: '#687076',
    700: '#474D52',
    900: '#1A1C1E',
  },
  red: {
    100: '#FFEBEE',
    500: '#E63946',
    700: '#A32831',
  },
  green: {
    100: '#EAF7ED',
    500: '#2A9D8F',
    700: '#1E6E64',
  },
  white: '#FFFFFF',
  black: '#000000',
};

// 2. Semantic Color Tokens: Map palette colors to functional names.
// These are used directly in styled components.
const lightColors = {
  // Brand colors
  brandPrimary: colorPalette.blue[500],
  brandHover: colorPalette.blue[700],

  // UI colors
  textPrimary: colorPalette.gray[900],
  textSecondary: colorPalette.gray[500],
  backgroundPrimary: colorPalette.white,
  backgroundSecondary: colorPalette.gray[100],
  borderDefault: colorPalette.gray[200],
  placeholderText: colorPalette.gray[300],

  // Status colors
  statusError: colorPalette.red[500],
  statusWarning: colorPalette.red[700],
  statusSuccess: colorPalette.green[500],
  statusInfo: colorPalette.blue[500],
};

const darkColors = {
  // Brand colors
  brandPrimary: colorPalette.blue[500],
  brandHover: colorPalette.blue[700],

  // UI colors
  textPrimary: colorPalette.gray[100],
  textSecondary: colorPalette.gray[300],
  backgroundPrimary: colorPalette.gray[900],
  backgroundSecondary: colorPalette.gray[700],
  borderDefault: colorPalette.gray[500],
  placeholderText: colorPalette.gray[500],

  // Status colors
  statusError: colorPalette.red[500],
  statusWarning: colorPalette.red[700],
  statusSuccess: colorPalette.green[500],
  statusInfo: colorPalette.blue[500],
};

// 3. Spacing, Typography, and Sizing Tokens
const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

const typography = {
  fontFamily: "'Inter', sans-serif", // Using a modern font like Inter
  lineHeight: {
    body: 1.5,
    heading: 1.2,
  },
  fontSize: {
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    xxl: '2rem', // 32px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

const shadows = {
  sm: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  md: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  lg: '0px 8px 16px rgba(0, 0, 0, 0.15)',
};

const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  circle: '50%',
};

// 4. Create theme objects for light and dark modes
export const lightTheme = {
  colors: lightColors,
  spacing,
  breakpoints,
  typography,
  shadows,
  borderRadius,
};

export const darkTheme = {
  colors: darkColors,
  spacing,
  breakpoints,
  typography,
  shadows,
  borderRadius,
};