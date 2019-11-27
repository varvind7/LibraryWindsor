import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import App from "./containers/App/App";
import Librarian from "./containers/Librarian";
import asyncComponent from "./helpers/AsyncFunc";

const RestrictedRoute = ({
  component: Component,
  isLoggedIn,
  allowed,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn && allowed ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn, user }) => {
  const userType = user.user_type;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path={"/"}
          component={asyncComponent(() => import("./containers/Signin"))}
        />
        <Route
          exact
          path={"/signin"}
          component={asyncComponent(() => import("./containers/Signin"))}
        />
        <Route
          exact
          path={"/register"}
          component={asyncComponent(() => import("./containers/Register"))}
        />
        <Route
          exact
          path={"/invalid"}
          component={asyncComponent(() => import("./containers/Invalid"))}
        />
        <RestrictedRoute
          path="/user"
          component={App}
          isLoggedIn={isLoggedIn}
          allowed={userType == 1}
        />
        <RestrictedRoute
          path="/librarian"
          component={Librarian}
          isLoggedIn={isLoggedIn}
          allowed={userType == 2}
        />
        <Route
          component={asyncComponent(() => import("./containers/Invalid"))}
        />
      </Switch>
    </ConnectedRouter>
  );
};
export default connect(state => ({
  isLoggedIn: state.Auth.token !== null,
  user: state.Auth.user
}))(PublicRoutes);
