import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Lista } from "./views";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/lista" component={Lista} exact />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
