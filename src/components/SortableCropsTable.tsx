import SortableTable from './SortableTable';
import CROPS from '../data/crops';
import type { Crop } from '../types/data';

export default function SortableCropsTable() {
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

  const rows = CROPS.map((crop) => createRow(crop));

  return <SortableTable headCells={headCells} rows={rows} />;
}
