/* eslint react/no-array-index-key: 0 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/HelloWorld/HelloWorld';
import Cat from './components/Cat/Cat';
import Dog from './components/Dog/Dog';
import NoMatch from './hoc/NoMatch/NoMatch';

// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     render={props => <route.component {...props} routes={route.routes} />}
//   />
// );

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    label: 'Home',
  },
  {
    path: '/cat',
    component: Cat,
    label: 'Cat',
  },
  {
    path: '/dog',
    component: Dog,
    label: 'Dog',
  },
  {
    path: null,
    component: NoMatch,
  },
];

export default (
  <Switch>
    {routes.map((route, i) => (
      <Route
        key={i}
        exact={route.exact}
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    ))}
    <Route component={NoMatch} />
  </Switch>
);
