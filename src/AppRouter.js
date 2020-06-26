import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, PersonalData } from "./views";

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/personal-data/:id" component={Home} exact />
    <Route path="/personal-data" component={PersonalData} exact />
  </BrowserRouter>
);

export default AppRouter;
