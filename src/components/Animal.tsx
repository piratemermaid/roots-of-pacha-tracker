import { Grid, Typography } from "@mui/material";

import type { Animal } from "../types/animal";

type Props = { animal: Animal };

export default function Animal({ animal }: Props) {
  return (
    <>
      <Grid item sx={{ m: 2 }}>
        <Typography variant="h2">{animal.name}</Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {animal.colors.map((color) => (
          <Grid item key={color}>
            <Typography variant="body1">{color}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
