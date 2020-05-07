import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect
          to={{
            pathname: '/about',
          }}
        />
      )}
    />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/dashboard" component={DashboardPage} />
    <Route exact path="/sign-up" component={SignUpPage} />
    <Route exact path="/error/:errorCode" component={ErrorPage} />
    <Route
      render={() => (
        <Redirect
          to={{
            pathname: '/error/404',
          }}
        />
      )}
    />
  </Switch>
);

export default Routes;
