import { Button, Grid, ThemeProvider, Typography } from '@mui/material';

import Animal from './components/Animal';
import ANIMALS from './data/animals';
import theme from './theme';
import { useStore } from './store';
import './App.css';

function App() {
  const count = useStore((state) => state.count);
  const incrementCount = useStore((state) => state.incrementCount);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3">Count: {count}</Typography>
      <Button variant="contained" onClick={incrementCount}>
        Add
      </Button>

      <br />
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
