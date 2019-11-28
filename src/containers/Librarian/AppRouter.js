import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../LibrarianBooking')),
  },

];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <Switch style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </Switch>
    );
  }
}

export default AppRouter;
