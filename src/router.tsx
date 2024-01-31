import { createBrowserRouter } from 'react-router-dom';

import AnimalColors from './pages/AnimalColors';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'animal_colors',
        element: <AnimalColors />,
      },
    ],
  },
]);

export default router;
