import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Wizard from './views/Wizard';
import Cards from './views/Cards';
import Enrollment from './views/Enrollment';
import Login from './views/Login';
import Customers from './views/Customers';
import ScrollToTop from './views/ScrollTop';

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
