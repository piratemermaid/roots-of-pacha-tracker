import { Box, FormLabel, Grid, Switch } from '@mui/material';

import NavbarLink from './NavbarLink';
import ROUTES from '../../constants/routes';
import { useStore } from '../../store';

export default function Navbar() {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {ROUTES.map((route) => (
          <NavbarLink key={route.key} path={route.path} label={route.label} />
        ))}
      </Grid>

      <Box
        sx={{ textAlign: 'right', position: 'absolute', top: 20, right: 10 }}
      >
        <Switch
          inputProps={{ 'aria-label': 'Dark mode' }}
          checked={darkMode}
          onClick={toggleDarkMode}
        />
        <FormLabel
          sx={{ '&:hover': { cursor: 'pointer' } }}
          onClick={toggleDarkMode}
        >
          Dark Mode
        </FormLabel>
      </Box>
    </>
  );
}
