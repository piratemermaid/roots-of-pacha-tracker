import { Grid } from '@mui/material';

import { useStore } from '../store';
import type { Fish } from '../types/fish';

type Props = { fish: Fish };

export default function Fish({ fish }: Props) {
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
