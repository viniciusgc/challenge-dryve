import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, Customer } from "./views";

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/customer" component={Customer} exact />
  </BrowserRouter>
);

export default AppRouter;
