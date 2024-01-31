import { Grid, Typography } from '@mui/material';

import { useStore } from '../store';
import type { Animal } from '../types/animal';

type Props = { animal: Animal };

export default function Animal({ animal }: Props) {
  const userAnimalColors = useStore(
    (state) => state.userAnimalColors[animal.name]
  );
  const addUserAnimalColor = useStore((state) => state.addUserAnimalColor);
  const removeUserAnimalColor = useStore(
    (state) => state.removeUserAnimalColor
  );

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
              <Typography
                variant="body1"
                onClick={() =>
                  !userHasColor
                    ? addUserAnimalColor(animal.name, color)
                    : removeUserAnimalColor(animal.name, color)
                }
                sx={{
                  cursor: 'pointer',
                  color: !userHasColor ? '#a8a8a7' : '#383838',
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
