import { Box, Grid, Switch, TextareaAutosize, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useStore } from '../store';

export default function Root() {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);

  return (
    <div id={darkMode ? 'appDark' : 'appLight'}>
      <Box sx={{ textAlign: 'right' }}>
        <Switch
          inputProps={{ 'aria-label': 'Dark mode' }}
          checked={darkMode}
          onClick={toggleDarkMode}
        />
      </Box>

      <Grid container>
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
    </div>
  );
}
