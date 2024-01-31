import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  spacing: 8,

  palette: {
    mode: 'dark',
    primary: {
      main: '#7dc599',
    },
    secondary: {
      main: '#b98a61',
    },
    action: {
      disabled: '#a8a8a7',
    },
  },

  typography: {
    h1: { fontSize: '30px', color: '#7dc599' },
    h2: {
      fontSize: '20px',
      fontWeight: 500,
      textTransform: 'uppercase',
      fontFamily: 'Garamond',
      color: '#b98a61',
    },
    body1: { color: '#383838' },
  },
});

export default darkTheme;
