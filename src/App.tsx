import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import router from './router';
import { useStore } from './store';
import { lightTheme, darkTheme } from './themes';
import './App.css';
import './styles/variables.css';

function App() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
