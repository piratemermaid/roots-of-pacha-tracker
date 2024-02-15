import { Grid } from '@mui/material';

import PageLayout from '../components/PageLayout';
import Fish from '../components/Fish';
import FISH from '../data/fish';

export default function FishPage() {
  return (
    <PageLayout title="Fish">
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {FISH.map((fish) => {
          return <Fish key={fish.name} fish={fish} />;
        })}
      </Grid>
    </PageLayout>
  );
}
