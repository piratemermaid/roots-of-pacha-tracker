import { createTheme } from '@mui/material';

import mainThemeVars from './mainThemeVars';

const darkTheme = createTheme({
  ...mainThemeVars,

  palette: {
    mode: 'dark',
    primary: {
      main: '#7dc599',
    },
    secondary: {
      main: '#dfaf86',
    },
    action: {
      disabled: '#a8a8a7',
    },
  },

  typography: {
    h2: { ...mainThemeVars.typography.h2, color: '#7dc599' },
    // @ts-expect-error - TS does not like textTransform property
    h3: { ...mainThemeVars.typography.h3, color: '#b98a61' },
    body1: { color: '#d3d3d3' },
  },
});

export default darkTheme;
