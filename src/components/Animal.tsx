import { Checkbox, Grid, Typography } from '@mui/material';

import { useStore } from '../store';
import type { Animal, AnimalName } from '../types/data';

type Props = { animal: Animal };

export default function Animal({ animal }: Props) {
  const userAnimalColors = useStore(
    (state) => state.userAnimalColors[animal.name]
  );
  const addUserAnimalColor = useStore((state) => state.addUserAnimalColor);
  const removeUserAnimalColor = useStore(
    (state) => state.removeUserAnimalColor
  );

  const handleToggleColor = (
    name: AnimalName,
    color: string,
    userHasColor: boolean
  ) => {
    !userHasColor
      ? addUserAnimalColor(name, color)
      : removeUserAnimalColor(name, color);
  };

  return (
    <>
      <Grid item sx={{ m: 2 }}>
        <Typography variant="h3">{animal.name}</Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {animal.colors.map((color) => {
          const userHasColor = userAnimalColors.includes(color);

          return (
            <Grid item key={color}>
              <Checkbox
                checked={userHasColor}
                onClick={() =>
                  handleToggleColor(animal.name, color, userHasColor)
                }
              />
              <Typography
                variant="body1"
                onClick={() =>
                  handleToggleColor(animal.name, color, userHasColor)
                }
                sx={{
                  cursor: 'pointer',
                  color: !userHasColor
                    ? 'var(--color-text-disabled)'
                    : 'var(--color-text-enabled)',
                }}
              >
                {color}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
