import { createBrowserRouter } from 'react-router-dom';

import AnimalColors from './pages/AnimalColors';
import Crops from './pages/Crops';
import Root from './pages/Root';
import { ROUTES } from './constants/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: ROUTES.animalColors,
        element: <AnimalColors />,
      },
      {
        path: ROUTES.crops,
        element: <Crops />,
      },
    ],
  },
]);

export default router;
