import React, { useState } from "react";
import {
  CNavbar,
  CToggler,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavLink,
} from "@coreui/react";
import "./style.scss";
import logo from "../../assets/img/logo.svg";
import icSearch from "../../assets/img/ic-search.svg";
import IcNotifications from "../../assets/img/ic-notifications.svg";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <CNavbar expandable="sm" light>
        <CNavbarBrand>
          <img src={logo} className="Primary" />
        </CNavbarBrand>
        <span className="backoffice">backoffice</span>
        <CCollapse show={isOpen} navbar>
          <CNavbarNav className="ml-auto">
            <CNavLink>
              <img src={icSearch} className="ic_search" />
            </CNavLink>
            <CNavLink>
              <img src={IcNotifications} className="ic_notifications" />
            </CNavLink>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </div>
  );
};

export default Header;
