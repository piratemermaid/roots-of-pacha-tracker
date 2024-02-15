import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import PageLayout from '../components/PageLayout';
import Fish from '../components/Fish';
import SeasonFilter from '../components/SortableCropsTable/SeasonFilter';
import FISH from '../data/fish';
import { useStore } from '../store';
import { SEASONS } from '../data/misc';
import type { Season } from '../types/data';

// TODO: fix weird looking SeasonFilters
// TODO: extend card content to bottom

export default function FishPage() {
  const [seasonFilter, setSeasonFilter] = React.useState<Season | null>(null);

  const viewFishDetails = useStore((state) => state.viewFishDetails);
  const setViewFishDetails = useStore((state) => state.setViewFishDetails);

  const handleSeasonFilterClick = (season: Season) => {
    if (seasonFilter !== season) {
      setSeasonFilter(season);
    } else {
      setSeasonFilter(null);
    }
  };

  const fishToDisplay = seasonFilter
    ? FISH.filter(
        (fish) => fish.seasons.includes(seasonFilter) && fish.seasons.length < 4
      )
    : FISH;

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

      {viewFishDetails ? (
        <Box sx={{ mt: 2 }}>
          {SEASONS.map((season) => (
            <Box sx={{ display: 'inline-block' }}>
              <SeasonFilter
                season={season}
                filterBy={seasonFilter}
                // @ts-expect-error - TODO: fix type in season filter
                // and SortableCropsTable
                handleClick={() => handleSeasonFilterClick(season)}
              />
            </Box>
          ))}
        </Box>
      ) : null}

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {fishToDisplay.map((fish) => {
          return <Fish key={fish.name} fish={fish} />;
        })}
      </Grid>
    </PageLayout>
  );
}
