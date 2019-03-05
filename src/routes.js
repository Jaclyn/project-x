import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import Cards from './components/Cards';
import Enrollment from './components/Enrollment';
import Login from './components/Login';
import Customers from './components/Customers';
import ScrollToTop from './components/ScrollTop';

export default props => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/enrollment" component={Enrollment} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/wizard" component={Wizard} />
        <Route exact path="/cards" component={Cards} />
      </Switch>
    </ScrollToTop>
  </HashRouter>
);
