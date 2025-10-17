import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      overflowX: 'hidden',
    },
    '*': {
      scrollBehavior: 'smooth',
    },
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
    },
    '::-webkit-scrollbar-thumb': {
      background: props.colorMode === 'dark' ? 'gray.600' : 'gray.400',
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#ff0080',
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: 'xl',
      fontWeight: 'semibold',
    },
    variants: {
      glass: (props) => ({
        bg: props.colorMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: props.colorMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.2)' 
          : 'rgba(255, 255, 255, 0.3)',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        _hover: {
          bg: props.colorMode === 'dark' 
            ? 'rgba(255, 255, 255, 0.2)' 
            : 'rgba(255, 255, 255, 0.9)',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        _active: {
          transform: 'translateY(0)',
        },
        transition: 'all 0.3s ease',
      }),
      primary: {
        bg: '#ff0080',
        color: 'white',
        _hover: {
          bg: '#e60073',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(255, 0, 128, 0.3)',
        },
        _active: {
          transform: 'translateY(0)',
        },
        transition: 'all 0.3s ease',
      },
    },
  },
  Card: {
    baseStyle: (props) => ({
      borderRadius: '2xl',
      bg: props.colorMode === 'dark' 
        ? 'rgba(255, 255, 255, 0.05)' 
        : 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(20px)',
      border: '1px solid',
      borderColor: props.colorMode === 'dark' 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(255, 255, 255, 0.2)',
      boxShadow: props.colorMode === 'dark' 
        ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
        : '0 8px 32px rgba(0, 0, 0, 0.1)',
    }),
  },
  Modal: {
    baseStyle: (props) => ({
      dialog: {
        bg: props.colorMode === 'dark' 
          ? 'rgba(26, 32, 44, 0.95)' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid',
        borderColor: props.colorMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(255, 255, 255, 0.2)',
      },
    }),
  },
  Input: {
    variants: {
      glass: (props) => ({
        field: {
          bg: props.colorMode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 255, 255, 0.3)',
          _focus: {
            borderColor: '#ff0080',
            boxShadow: '0 0 0 1px #ff0080',
          },
        },
      }),
    },
  },
  Textarea: {
    variants: {
      glass: (props) => ({
        bg: props.colorMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: props.colorMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(255, 255, 255, 0.3)',
        _focus: {
          borderColor: '#ff0080',
          boxShadow: '0 0 0 1px #ff0080',
        },
      }),
    },
  },
};

const colors = {
  primary: {
    50: '#ffe6f7',
    100: '#ffb3e6',
    200: '#ff80d4',
    300: '#ff4dc2',
    400: '#ff1ab0',
    500: '#ff0080',
    600: '#e60073',
    700: '#cc0066',
    800: '#b30059',
    900: '#99004d',
  },
};

const fonts = {
  heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
