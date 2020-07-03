import React from "react";
import { CSidebarNav, CSidebarNavItem } from "@coreui/react";
import icHome from "../../assets/img/ic-home.svg";
import icClient from "../../assets/img/ic-person.svg";
import icCars from "../../assets/img/ic-directions-car.svg";
import icTriangle from "../../assets/img/ic-vector-triangle.svg";
import icWallet from "../../assets/img/ic-account-balance-wallet.svg";
import icUser from "../../assets/img/profile.png";
import icExit from "../../assets/img/ic-power-settings-new.svg";
import "./style.scss";

const Sidebar = (props) => {
  return (
    <CSidebarNav>
      <CSidebarNavItem>
        <a className="c-sidebar-nav-link nav-profile" href="/">
          <div className="avatar-border c-sidebar-nav-icon">
            <img src={icUser} className="profile " alt="user" />
          </div>
          <div>
            <span className="text-style-3">Vinicius Malara</span>
            <br />
            <img src={icExit} className="ic_power_settings_new" alt="exit" />
            <span className="sair">Sair</span>
          </div>
        </a>
      </CSidebarNavItem>
      <CSidebarNavItem>
        <a className="c-sidebar-nav-link" href="/">
          <img src={icHome} className="ic_home c-sidebar-nav-icon" alt="home" />
          Início
        </a>
      </CSidebarNavItem>
      <CSidebarNavItem>
        <a className="c-sidebar-nav-link" href="/customer">
          <img
            src={icClient}
            className="ic_person c-sidebar-nav-icon"
            alt="client"
          />{" "}
          Clientes
        </a>
      </CSidebarNavItem>
      <CSidebarNavItem>
        <a className="c-sidebar-nav-link" href="/">
          <img
            src={icCars}
            className="ic_directions_car c-sidebar-nav-icon"
            alt="cars"
          />{" "}
          Veículos
        </a>
      </CSidebarNavItem>
      <CSidebarNavItem>
        <a className="c-sidebar-nav-link" href="/">
          <img
            src={icTriangle}
            className="ic_vector_triangle c-sidebar-nav-icon"
            alt="triangulation"
          />{" "}
          Triangulação
        </a>
      </CSidebarNavItem>
      <CSidebarNavItem>
        <a className="c-sidebar-nav-link" href="/">
          <img
            src={icWallet}
            className="ic_account_balance_wallet c-sidebar-nav-icon"
            alt="wallet"
          />{" "}
          Financeiro
        </a>
      </CSidebarNavItem>
    </CSidebarNav>
  );
};

export default Sidebar;
