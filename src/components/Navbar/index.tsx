import { Box, FormLabel, Grid, Switch } from '@mui/material';

import NavbarLink from './NavbarLink';
import ROUTES from '../../constants/routes';
import { useStore } from '../../store';

export default function Navbar() {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <>
      <Grid container spacing={2}>
        {ROUTES.map((route) => (
          <NavbarLink key={route.key} path={route.path} label={route.label} />
        ))}
      </Grid>

      <Box sx={{ textAlign: 'right' }} onClick={toggleDarkMode}>
        <Switch inputProps={{ 'aria-label': 'Dark mode' }} checked={darkMode} />
        <FormLabel sx={{ '&:hover': { cursor: 'pointer' } }}>
          Dark Mode
        </FormLabel>
      </Box>
    </>
  );
}
