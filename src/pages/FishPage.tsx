import { Grid } from '@mui/material';

import PageLayout from '../components/PageLayout';
import FISH from '../data/fish';

export default function FishPage() {
  return (
    <PageLayout title="Fish">
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {FISH.map((fish) => (
          <Grid item key={fish.name}>
            <img
              className="grayed-out-img"
              src={`/images/fish/${fish.name}.webp`}
              style={{
                position: 'relative',
                height: 50,
                width: 50,
                bottom: 3,
                left: -4,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
}
