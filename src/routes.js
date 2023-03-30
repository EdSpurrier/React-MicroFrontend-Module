import React from 'react';
import hostRoutes, { paths } from 'host/routes';


export const rootRoute = '/boilerplate';
export const routePaths = paths;

/* export const rootRoute = hostRoutes.find(route => {
  return route.name === 'portfolio'
}) */

const Home = React.lazy(() => import('./Pages/Home'));
const Core = React.lazy(() => import('./Core'));

const routes = [
  {
    label: 'Core',
    path: rootRoute,
    component: <Core />,
    exact: true,
  },
  {
    label: 'Home',
    path: rootRoute + '/home',
    component: <Home />,
    exact: true,
  }
];

export const getRouteByLabel = (label) => {
  let route = null
  route = routes.find(route => {
    if (route.label === label) return route;
  });
  return route;
}


export default routes;