import { Link, useLocation } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

type Props = { name: string; label: string };

export default function NavbarLink({ name, label }: Props) {
  const location = useLocation();
  const isActive = location.pathname.slice(1) === name;

  return (
    <Grid item>
      <Link to={name}>
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
