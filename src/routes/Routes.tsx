import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import { useAuth } from '../context/auth';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const Routes = () => {
  const isAuthenticated = useAuth();
  if (isAuthenticated) {
    return (
      <Switch>
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
        <Route exact path="/error/:errorCode" component={NotFoundPage} />
      </Switch>
    );
  } else {
    return <Route exact path="/sign-up" component={SignUpPage} />;
  }
};

export default Routes;
