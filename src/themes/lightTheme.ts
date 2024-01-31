import { createTheme } from '@mui/material';

import mainThemeVars from './mainThemeVars';

const lightTheme = createTheme({
  ...mainThemeVars,

  palette: {
    mode: 'light',
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
    h1: { ...mainThemeVars.typography.h1, color: '#7dc599' },
    // @ts-expect-error - TS does not like textTransform property
    h2: { ...mainThemeVars.typography.h2, color: '#b98a61' },
    body1: { color: '#383838' },
  },
});

export default lightTheme;
