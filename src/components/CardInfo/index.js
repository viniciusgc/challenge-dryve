import React from "react";
import { CCard, CCardBody, CRow, CCol } from "@coreui/react";
import "./style.scss";
import icArrow from "../../assets/img/ic-arrow-drop-down_3.svg";
import icArrowDown from "../../assets/img/ic-arrow-drop-down_5.svg";

const CardInfo = ({ title, number, icon, percentage, period, up = true }) => {
  return (
    <CCard className="card-info">
      <CCardBody>
        <CRow className="align-items-center">
          <CCol md="9" sm="9" xs="9">
            <h6 className="text-style main-text">{title}</h6>
            <span className="number">{number}</span>
            <br />
            <img
              src={up ? icArrow : icArrowDown}
              className="ic_arrow_drop_down"
              alt="arrow"
            />
            <span className="percentage">{percentage}</span>
            <span className="period">{period}</span>
          </CCol>
          <CCol md="3" sm="3" xs="3">
            <div className="oval">
              <img src={icon} className="ic_directions_car" alt="car" />
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default CardInfo;
