import { Grid, TextareaAutosize, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { useStore } from '../store';

export default function Root() {
  const darkMode = useStore((state) => state.darkMode);

  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

  return (
    <div id={darkMode ? 'appDark' : 'appLight'}>
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>

        <Grid item id="page-content">
          <Grid container id="notes">
            <Grid item xs={3}>
              <Typography variant="h2">Notes</Typography>
              <TextareaAutosize
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                minRows={40}
                style={{ width: '80%', height: '80%' }}
              />
            </Grid>

            <Grid item xs={9}>
              <Outlet />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
