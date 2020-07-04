import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, Customers } from "./views";

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/customers" component={Customers} exact />
  </BrowserRouter>
);

export default AppRouter;
