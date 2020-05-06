import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Routes = () => (
  <Switch>
    {/*  */}
    {/* have a redirect on '/' to go to correct home page */}
    {/* return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  ); */}
    {/* expose './' as how it works and signUp route if not auth */}
    {/* expose './' as dashboard, how it works, profile and sign out if auth  */}
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/sign-up" component={SignUpPage} />
  </Switch>
);

export default Routes;
