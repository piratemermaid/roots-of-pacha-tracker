import { Grid } from '@mui/material';

type Props = {
  season: string;
  filterBy: string | null;
  handleClick: (name: string, value: string) => void;
};

export default function SeasonFilter({ season, filterBy, handleClick }: Props) {
  const isSelected = filterBy === season;

  return (
    <Grid
      item
      onClick={() => handleClick('season', season)}
      sx={{
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: `var(--color-season-${season.toLowerCase()})`,
        mr: 1,
        '&:hover': { cursor: 'pointer' },
        opacity: isSelected || !filterBy ? 1 : 0.4,
      }}
    />
  );
}
