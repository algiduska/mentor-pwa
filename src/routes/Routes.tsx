import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/sign-up" component={SignUpPage} />
  </Switch>
);

export default Routes;
