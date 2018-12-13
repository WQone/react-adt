import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import routes from './menu'

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={(props) => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const BasicExample = () => (
  <HashRouter>
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  </HashRouter>
);
export default BasicExample;
