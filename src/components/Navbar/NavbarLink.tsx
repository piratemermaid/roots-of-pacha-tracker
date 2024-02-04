import { Link, useLocation } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

type Props = { path: string; label: string };

export default function NavbarLink({ path, label }: Props) {
  const location = useLocation();
  const isActive = location.pathname.slice(1) === path;

  return (
    <Grid item>
      <Link to={path}>
        <Button
          variant="contained"
          size="small"
          sx={{ px: 1, py: 0.5 }}
          color={isActive ? 'primary' : 'secondary'}
        >
          {label}
        </Button>
      </Link>
    </Grid>
  );
}
