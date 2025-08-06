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
  brandSecondary: colorPalette.green[500],
  brandAccent: colorPalette.blue[100],
  brandHover: colorPalette.blue[700],

  // UI colors
  textPrimary: colorPalette.gray[900],
  textSecondary: colorPalette.gray[500],
  textMuted: colorPalette.gray[300],
  backgroundPrimary: colorPalette.white,
  backgroundSecondary: colorPalette.gray[100],
  backgroundAccent: colorPalette.blue[100],
  borderDefault: colorPalette.gray[200],
  borderHover: colorPalette.gray[300],
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
  brandSecondary: colorPalette.green[500],
  brandAccent: colorPalette.blue[700],
  brandHover: colorPalette.blue[700],

  // UI colors
  textPrimary: colorPalette.gray[100],
  textSecondary: colorPalette.gray[300],
  textMuted: colorPalette.gray[500],
  backgroundPrimary: colorPalette.gray[900],
  backgroundSecondary: colorPalette.gray[700],
  backgroundAccent: colorPalette.gray[700],
  borderDefault: colorPalette.gray[500],
  borderHover: colorPalette.gray[300],
  placeholderText: colorPalette.gray[500],

  // Status colors
  statusError: colorPalette.red[500],
  statusWarning: colorPalette.red[700],
  statusSuccess: colorPalette.green[500],
  statusInfo: colorPalette.blue[500],
};

// 3. Spacing, Typography, and Sizing Tokens
const spacing = {
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
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
    tight: 1.2,
    normal: 1.4,
    body: 1.5,
    heading: 1.2,
    relaxed: 1.6,
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    xxl: '2rem', // 32px
    xxxl: '3rem', // 48px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
};

const shadows = {
  sm: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  md: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  lg: '0px 8px 16px rgba(0, 0, 0, 0.15)',
};

const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  circle: '50%',
  full: '9999px',
};

const transitions = {
  fast: '0.15s ease-in-out',
  medium: '0.3s ease-in-out',
  slow: '0.5s ease-in-out',
};

const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1020,
  banner: 1030,
  overlay: 1040,
  modal: 1050,
  popover: 1060,
  skipLink: 1070,
  toast: 1080,
  tooltip: 1090,
  floating: 999,
};

// Layout tokens for professional grid-based layout
const layout = {
  headerHeight: {
    mobile: '60px',
    tablet: '70px',
    desktop: '80px',
  },
  maxWidth: {
    content: '1200px',
    wide: '1400px',
    full: '100%',
  },
  containerPadding: {
    mobile: '16px',
    tablet: '24px', 
    desktop: '32px',
  },
};

// 4. Create theme objects for light and dark modes
export const lightTheme = {
  colors: lightColors,
  spacing,
  breakpoints,
  typography,
  shadows,
  borderRadius,
  transitions,
  zIndex,
  layout,
};

export const darkTheme = {
  colors: darkColors,
  spacing,
  breakpoints,
  typography,
  shadows,
  borderRadius,
  transitions,
  zIndex,
  layout,
};