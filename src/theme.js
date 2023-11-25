import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b', 
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#000',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#fff',
      secondary: '#f23', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 20,
    color:"whtie",
    h1: {
      fontSize: '11rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '1.4rem',
    },
    h4: {
      fontSize: '1.2rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
