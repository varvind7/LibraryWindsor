import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <Route exact path={'/'} component={asyncComponent(() => import('./containers/Signin'))} />
      <Route exact path={'/signin'} component={asyncComponent(() => import('./containers/Signin'))} />
      <Route exact path={'/register'} component={asyncComponent(() => import('./containers/Register'))} />
      <Route exact path={'/invalid'} component={asyncComponent(() => import('./containers/Invalid'))} />
      <RestrictedRoute path="/user" component={App} isLoggedIn={isLoggedIn} />
     
    </ConnectedRouter>
  );
};
export default connect(state => ({
  isLoggedIn: state.Auth.token !== null,
}))(PublicRoutes);
