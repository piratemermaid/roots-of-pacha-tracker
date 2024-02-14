import AnimalsPage from '../pages/AnimalsPage';
import CalendarPage from '../pages/CalendarPage';
import CropsPage from '../pages/CropsPage';
import FishPage from '../pages/FishPage';
import GiftsPage from '../pages/GiftsPage';
import MyDataPage from '../pages/MyDataPage';

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
  {
    key: 'calendar',
    label: 'Calendar',
    path: '/calendar',
    Component: CalendarPage,
  },
  { key: 'fish', label: 'Fish', path: '/fish', Component: FishPage },
  { key: 'mydata', label: 'My Data', path: '/my_data', Component: MyDataPage },
];

export default ROUTES;
