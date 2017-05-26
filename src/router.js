import React from "react";
import { Switch, Route } from "react-router-dom";

import Store from './components/Store/Store';
import Checkout from './components/Checkout/Checkout';
import Details from './components/Details/Details';

export default (
  <Switch>
    <Route component={ Store } path="/" exact />
    <Route component={ Checkout } path="/checkout" />
    <Route component={ Details } path="/details/:id" />
  </Switch>
)

