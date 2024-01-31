import { Box, FormLabel, Grid, Switch } from '@mui/material';

import NavbarLink from './NavbarLink';
import { useStore } from '../../store';
import { ROUTES, ROUTE_LABELS } from '../../constants/routes';

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

      <Box sx={{ textAlign: 'right' }} onClick={toggleDarkMode}>
        <Switch inputProps={{ 'aria-label': 'Dark mode' }} checked={darkMode} />
        <FormLabel sx={{ '&:hover': { cursor: 'pointer' } }}>
          Dark Mode
        </FormLabel>
      </Box>
    </>
  );
}
