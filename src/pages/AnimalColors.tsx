import { Grid } from '@mui/material';

import Animal from '../components/Animal';
import ANIMALS from '../data/animals';
import PageLayout from '../components/PageLayout';

export default function AnimalColors() {
  return (
    <PageLayout title="Animals">
      <Grid container direction="column">
        {ANIMALS.map((animal) => {
          return (
            <Grid item key={animal.name}>
              <Animal animal={animal} />
            </Grid>
          );
        })}
      </Grid>
    </PageLayout>
  );
}
