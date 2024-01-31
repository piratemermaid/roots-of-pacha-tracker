import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

type Props = { name: string; label: string };

export default function NavbarLink({ name, label }: Props) {
  return (
    <Grid item>
      <Link to={name}>{label}</Link>
    </Grid>
  );
}
