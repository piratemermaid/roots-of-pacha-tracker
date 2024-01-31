import { Grid, Typography } from '@mui/material';

import Animal from '../components/Animal';
import ANIMALS from '../data/animals';

export default function AnimalColors() {
  return (
    <>
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
    </>
  );
}
