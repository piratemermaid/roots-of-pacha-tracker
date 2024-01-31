import {
  Box,
  CssBaseline,
  Grid,
  Switch,
  TextareaAutosize,
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

  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

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

      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h2">Notes</Typography>
          <TextareaAutosize
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            style={{ width: '80%', height: '80%' }}
          />
        </Grid>

        <Grid item xs={9}>
          <Typography variant="h2">Animals</Typography>
          <Grid container direction="column">
            {ANIMALS.map((animal) => {
              return (
                <Grid item key={animal.name}>
                  <Animal animal={animal} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
