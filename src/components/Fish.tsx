import { Card, Grid, Typography } from '@mui/material';

import { useStore } from '../store';
import type { Fish } from '../types/fish';

type Props = { fish: Fish };

export default function Fish({ fish }: Props) {
  const viewFishDetails = useStore((state) => state.viewFishDetails);
  const userFish = useStore((state) => state.userFish);
  const addUserFish = useStore((state) => state.addUserFish);
  const removeUserFish = useStore((state) => state.removeUserFish);

  const handleSelectFish = (fish: string) => {
    if (userFish.includes(fish)) {
      removeUserFish(fish);
    } else {
      addUserFish(fish);
    }
  };

  const userHasFish = userFish.includes(fish.name);

  let imgClass = 'hover';
  if (!userHasFish) imgClass += ' grayed-out-img';

  if (!viewFishDetails) {
    return (
      <Grid item key={fish.name}>
        <img
          className={imgClass}
          onClick={() => handleSelectFish(fish.name)}
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
    );
  }

  return (
    <Grid item key={fish.name} xs={3} sx={{ opacity: userHasFish ? 1 : 0.7 }}>
      <Card
        sx={{ p: 1 }}
        onClick={() => handleSelectFish(fish.name)}
        className="hover"
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            <img
              className={imgClass}
              src={`/images/fish/${fish.name}.webp`}
              style={{
                position: 'relative',
                height: 40,
                width: 40,
                bottom: 3,
                left: -4,
              }}
            />
          </Grid>

          <Grid item>
            <Typography>{fish.name}</Typography>
          </Grid>

          <Grid item>
            {fish.seasons.map((season) => (
              <img src={`/images/seasons/${season}.webp`} />
            ))}
          </Grid>

          <Grid item>
            <Typography variant="body2">
              {fish.weather === 'Any' ? 'Any Weather' : fish.weather}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2">{fish.time.join(', ')}</Typography>
      </Card>
    </Grid>
  );
}
