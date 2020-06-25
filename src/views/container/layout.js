import React from "react";
import {
  AppHeader,
  AppSidebar,
  AppSidebarHeader,
  AppSidebarNav,
  AppSidebarFooter,
} from "@coreui/react";
import { Container, NavLink } from "reactstrap";
import Header from "./header";
import Sidebar from "./sidebar";

import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="app sidebar-show sidebar-fixed">
      <AppHeader fixed>
        <Header />
      </AppHeader>
      <div className="app-body">
        <AppSidebar>
          <Sidebar />
        </AppSidebar>
        <main className="main">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default Layout;
