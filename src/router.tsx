import { createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import ROUTES from './constants/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: ROUTES.map((route) => {
      return {
        path: route.path,
        element: <route.Component />,
      };
    }),
  },
]);

export default router;
