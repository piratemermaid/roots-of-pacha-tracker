import { Box, FormLabel, Grid, Switch } from '@mui/material';

import NavbarLink from './NavbarLink';
import { useStore } from '../store';
import { ROUTES, ROUTE_LABELS } from '../constants/routes';

export default function Navbar() {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <>
      <Grid container spacing={2}>
        {Object.keys(ROUTES).map((key) => (
          <NavbarLink key={key} name={ROUTES[key]} label={ROUTE_LABELS[key]} />
        ))}
      </Grid>

      <Box sx={{ textAlign: 'right' }}>
        <Switch
          inputProps={{ 'aria-label': 'Dark mode' }}
          checked={darkMode}
          onClick={toggleDarkMode}
        />
        <FormLabel>Dark Mode</FormLabel>
      </Box>
    </>
  );
}
