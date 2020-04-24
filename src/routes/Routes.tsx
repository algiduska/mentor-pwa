import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
  </Switch>
);

export default Routes;
