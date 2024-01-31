import React from 'react';
import { Grid, Typography } from '@mui/material';

import SortableTable from '../SortableTable';
import SeasonFilter from './SeasonFilter';
import CROPS from '../../data/crops';
import { SEASONS } from '../../data/misc';
import type { Crop } from '../../types/data';

type TableFilters = Record<string, string | null>;

const defaultFilters = { season: null };

export default function SortableCropsTable() {
  const [filterBy, setFilterBy] = React.useState<TableFilters>(defaultFilters);

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
    if (filterBy.season) {
      // @ts-expect-error - I simply do not care
      return crop.seasons.includes(filterBy.season);
    }

    return crop;
  });

  const rows = filteredCrops.map((crop) => createRow(crop));

  const handleSelectFilter = (name: string, value: string) => {
    const currentValue = filterBy[name];
    const newValue = currentValue === value ? null : value;
    setFilterBy({ ...filterBy, [name]: newValue });
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
                filterBy={filterBy.season}
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
