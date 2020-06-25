import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Header from "./header";

import "./style.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
