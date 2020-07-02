import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { CContainer, CSidebar } from "@coreui/react";

import "./style.scss";

const Layout = ({ children }) => {
  const [isMinimize, setIsMinimize] = useState(true);
  const [isOvelaid, setIsOvelaid] = useState(false);
  const toggleEnter = () => {
    setIsMinimize(!isMinimize);
    setIsOvelaid(true);
  };
  const toggleLeave = () => {
    setIsMinimize(!isMinimize);
    setIsOvelaid(false);
  };

  return (
    <div className="c-app">
      <CSidebar
        colorScheme="light"
        minimize={isMinimize}
        overlaid={isOvelaid}
        id="sidebar"
        onMouseEnter={() => {
          toggleEnter();
        }}
        onMouseLeave={() => {
          toggleLeave();
        }}
        size="sm"
      >
        <Sidebar />
      </CSidebar>
      <div className="c-wrapper">
        <Header />

        <div className="c-body">
          <main className="c-main">
            <CContainer fluid>{children}</CContainer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
