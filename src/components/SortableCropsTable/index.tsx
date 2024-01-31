import { Grid, Typography } from '@mui/material';

import SortableTable from '../SortableTable';
import SeasonFilter from './SeasonFilter';
import CROPS from '../../data/crops';
import { useStore } from '../../store';
import { SEASONS } from '../../data/misc';
import type { Crop } from '../../types/data';

export type TableFilters = Record<string, string | null>;

export default function SortableCropsTable() {
  const filters = useStore((state) => state.cropFilters);
  const setFilters = useStore((state) => state.setCropFilters);

  const headCells = [
    { id: 'name', label: 'Name' },
    { id: 'type', label: 'Type' },
    { id: 'daysGrowth', label: 'Days Growth' },
    { id: 'lastDayToPlant', label: 'Last Day' },
    { id: 'daysRegrowth', label: 'Days Regrowth' },
    { id: 'seasons', label: 'Seasons' },
  ];

  function createRow(crop: Crop) {
    return {
      name: crop.name,
      type: crop.type,
      daysGrowth: crop.daysGrowth,
      lastDayToPlant: 28 - crop.daysGrowth,
      daysRegrowth: crop.daysRegrowth ?? 0,
      seasons: crop.seasons.join(', '),
    };
  }

  const filteredCrops = CROPS.filter((crop) => {
    if (filters.season) {
      // @ts-expect-error - I simply do not care
      return crop.seasons.includes(filters.season);
    }

    return crop;
  });

  const rows = filteredCrops.map((crop) => createRow(crop));

  const handleSelectFilter = (name: string, value: string) => {
    const currentValue = filters[name];
    const newValue = currentValue === value ? null : value;
    setFilters({ ...filters, [name]: newValue });
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item>
          <Typography variant="body2">Filters:</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            {SEASONS.map((season) => (
              <SeasonFilter
                season={season}
                filterBy={filters.season}
                handleClick={handleSelectFilter}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <SortableTable headCells={headCells} rows={rows} />
    </>
  );
}
