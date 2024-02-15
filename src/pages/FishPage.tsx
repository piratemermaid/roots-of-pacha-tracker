import { Grid } from '@mui/material';

import PageLayout from '../components/PageLayout';
import FISH from '../data/fish';
import { useStore } from '../store';

export default function FishPage() {
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

  return (
    <PageLayout title="Fish">
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {FISH.map((fish) => {
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
        })}
      </Grid>
    </PageLayout>
  );
}
