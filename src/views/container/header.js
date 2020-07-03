import React, { useState } from "react";
import {
  CNavbar,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavLink,
  CToggler,
} from "@coreui/react";
import "./style.scss";
import logo from "../../assets/img/logo.svg";
import icSearch from "../../assets/img/ic-search.svg";
import IcNotifications from "../../assets/img/ic-notifications.svg";

const Header = ({ opneSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CNavbar expandable="sm" light>
        <CToggler inNavbar onClick={opneSidebar} />

        <CNavbarBrand>
          <img src={logo} className="Primary" alt="logo" />
        </CNavbarBrand>
        <span className="backoffice">backoffice</span>
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        <CCollapse show={isOpen} navbar>
          <CNavbarNav className="ml-auto">
            <CNavLink>
              <img src={icSearch} className="ic_search" alt="search" />
            </CNavLink>
            <CNavLink>
              <img
                src={IcNotifications}
                className="ic_notifications"
                alt="notifications"
              />
            </CNavLink>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </div>
  );
};

export default Header;
