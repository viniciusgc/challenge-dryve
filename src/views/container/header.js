import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./style.scss";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="lg">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto"></Nav>
        <Nav navbar>
          <NavItem>
            <NavLink href="#">Como funciona</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Privacidade</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Ajuda</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
