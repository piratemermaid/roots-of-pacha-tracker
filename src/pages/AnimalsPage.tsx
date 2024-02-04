import { Grid } from '@mui/material';

import Animal from '../components/Animal';
import ANIMALS from '../data/animals';
import PageLayout from '../components/PageLayout';

export default function AnimalsPage() {
  return (
    <PageLayout title="Animals">
      <Grid container>
        {ANIMALS.map((animal) => {
          return (
            <Grid item key={animal.name} lg={4} sm={4} xs={6}>
              <Animal animal={animal} />
            </Grid>
          );
        })}
      </Grid>
    </PageLayout>
  );
}
