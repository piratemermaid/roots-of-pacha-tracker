import { Button, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import PageLayout from '../components/PageLayout';
import Fish from '../components/Fish';
import FISH from '../data/fish';
import { useStore } from '../store';

export default function FishPage() {
  const viewFishDetails = useStore((state) => state.viewFishDetails);
  const setViewFishDetails = useStore((state) => state.setViewFishDetails);

  return (
    <PageLayout title="Fish">
      <Button
        variant="contained"
        sx={{
          opacity: viewFishDetails ? 1 : 0.5,
        }}
        onClick={() => setViewFishDetails(!viewFishDetails)}
      >
        {viewFishDetails ? (
          <VisibilityIcon sx={{ mr: 1 }} />
        ) : (
          <VisibilityOffIcon sx={{ mr: 1 }} />
        )}
        View with details
      </Button>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {FISH.map((fish) => {
          return <Fish key={fish.name} fish={fish} />;
        })}
      </Grid>
    </PageLayout>
  );
}
