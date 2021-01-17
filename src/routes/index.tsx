import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import Import from '../pages/Import';
import Create from '../pages/Create';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/import" component={Import} />
    <Route path="/create" component={Create} />
  </Switch>
);

export default Routes;
