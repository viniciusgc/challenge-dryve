import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { AppNavbarBrand } from "@coreui/react";
import "./style.scss";
import logo from "../../assets/img/logo.svg";

const Header = (props) => {
  return (
    <a href="/">
      <AppNavbarBrand
        full={{
          src: logo,
          width: 134,
          height: 43,
          alt: "Logo",
        }}
        minimized={{
          src: logo,
          width: 40,
          height: 40,
          alt: "Logo",
        }}
      />
    </a>
  );
};

export default Header;
