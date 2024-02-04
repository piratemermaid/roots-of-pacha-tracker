import AnimalsPage from '../pages/AnimalsPage';
import CropsPage from '../pages/CropsPage';
import GiftsPage from '../pages/GiftsPage';

type Route = {
  key: string;
  path: string;
  label: string;
  Component: () => JSX.Element;
};

const ROUTES: Route[] = [
  {
    key: 'animals',
    label: 'Animals',
    path: '/animals',
    Component: AnimalsPage,
  },
  { key: 'crops', label: 'Crops', path: '/crops', Component: CropsPage },
  { key: 'gifts', label: 'Gifts', path: '/gifts', Component: GiftsPage },
];

export default ROUTES;
