import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { CContainer, CSidebar, CFooter } from "@coreui/react";
import { isMobile } from "react-device-detect";
import "./style.scss";

const Layout = ({ children }) => {
  const [isMinimize, setIsMinimize] = useState(true);
  const [isOvelaid, setIsOvelaid] = useState(false);
  const [isShow, setIsShow] = useState(!isMobile);
  const toggleEnter = () => {
    setIsMinimize(!isMinimize);
    setIsOvelaid(true);
  };
  const toggleLeave = () => {
    setIsMinimize(!isMinimize);
    setIsOvelaid(false);
  };
  const toggleMobile = () => {
    setIsMinimize(!isMinimize);
    setIsShow(!isShow);
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
        show={isShow}
      >
        <Sidebar />
      </CSidebar>
      <div className="c-wrapper">
        <Header opneSidebar={() => toggleMobile()} />
        <div className="c-body">
          <main className="c-main">
            <CContainer fluid>{children}</CContainer>
          </main>
        </div>
        <CContainer fluid className="container-footer">
          <CFooter>
            <Footer />
          </CFooter>
        </CContainer>
      </div>
    </div>
  );
};

export default Layout;
