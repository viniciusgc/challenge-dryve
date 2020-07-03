import React from "react";
import "./style.scss";

const Footer = (props) => {
  return (
    <div className="d-flex flex-row">
      <span className="dryve-tecnolo">2020 &copy; Dryve Tecnologia Ltda.</span>
      <div className="ml-auto">
        <span className="verso-101">Versão 1.0.1</span>
      </div>
    </div>
  );
};

export default Footer;
