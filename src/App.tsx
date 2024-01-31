import { Grid, ThemeProvider, Typography } from '@mui/material';

import Animal from './components/Animal';
import ANIMALS from './data/animals';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
