import {
  Box,
  CssBaseline,
  Grid,
  Switch,
  ThemeProvider,
  Typography,
} from '@mui/material';

import Animal from './components/Animal';
import ANIMALS from './data/animals';
import { useStore } from './store';
import { lightTheme, darkTheme } from './themes';
import './App.css';

function App() {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ textAlign: 'right' }}>
        <Switch
          inputProps={{ 'aria-label': 'Dark mode' }}
          checked={darkMode}
          onClick={toggleDarkMode}
        />
      </Box>
      <Typography variant="h1">Animals</Typography>
      <Grid container direction="column">
        {ANIMALS.map((animal) => {
          return (
            <Grid item key={animal.name}>
              <Animal animal={animal} />
            </Grid>
          );
        })}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
