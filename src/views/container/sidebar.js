import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { AppSidebarNav } from "@coreui/react";
import "./style.scss";

import logo from "../../assets/img/logo.svg";

class Sidebar extends Component {
  static getDerivedStateFromError(error) {
    console.log("error", error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  renderTracks = () => {
    return [
      {
        name: "Painel Principal",
        url: "/",
        icon: "icon-graduation",
      },
      {
        name: "Adicionar Hospital",
        url: "/",
        icon: "icon-graduation",
      },
      {
        name: "Adicionar Paciente",
        url: "/",
        icon: "icon-graduation",
      },
    ];
  };
  render() {
    return (
      <AppSidebarNav
        name="Theme"
        navConfig={{
          items: this.renderTracks(),
        }}
        className="mt-5"
      />
    );
  }
}

export default Sidebar;
