import { Grid, Typography } from '@mui/material';

import PageLayout from '../components/PageLayout';
import VILLAGERS from '../data/villagers';

export default function GiftsPage() {
  return (
    <PageLayout title="Gifts">
      <Grid container direction="column" alignItems="flex-start">
        {Object.keys(VILLAGERS).map((name) => {
          const gifts = VILLAGERS[name].gifts;

          return (
            <Grid item>
              <Grid container>
                <Grid item width={60} sx={{ textAlign: 'right', mr: 1 }}>
                  <Typography color="primary">{name}:</Typography>
                </Grid>
                <Grid item>{gifts.join(', ')}</Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </PageLayout>
  );
}
