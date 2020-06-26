import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Header from "./header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Layout;
