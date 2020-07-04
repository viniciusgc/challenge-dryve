import React from "react";
import { CCard, CCardBody, CRow, CCol } from "@coreui/react";
import "./style.scss";
import hyundai from "../../assets/img/hyundai/rectangle.png";
import hyundai2 from "../../assets/img/hyundai/rectangle@2x.png";
import hyundai3 from "../../assets/img/hyundai/rectangle@3x.png";
import chevrolet from "../../assets/img/chevrolet/rectangle.png";
import chevrolet2 from "../../assets/img/chevrolet/rectangle@2x.png";
import chevrolet3 from "../../assets/img/chevrolet/rectangle@3x.png";
import jeep from "../../assets/img/jeep/rectangle.png";
import jeep2 from "../../assets/img/jeep/rectangle@2x.png";
import jeep3 from "../../assets/img/jeep/rectangle@3x.png";
import volks from "../../assets/img/volks/rectangle.png";
import volks2 from "../../assets/img/volks/rectangle@2x.png";
import volks3 from "../../assets/img/volks/rectangle@3x.png";
import nissan from "../../assets/img/nissan/rectangle.png";
import nissan2 from "../../assets/img/nissan/rectangle@2x.png";
import nissan3 from "../../assets/img/nissan/rectangle@3x.png";

const CardBrand = () => {
  return (
    <CCard className="card-brand">
      <CCardBody>
        <CRow>
          <CCol>
            <span className="top-intenes-de-com">Top intenções de compra</span>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <CRow>
                      <CCol>
                        <img
                          src={hyundai}
                          srcset={`${hyundai2} 2x, ${hyundai3} 3x`}
                          alt="band"
                        />
                      </CCol>
                      <CCol className="col-number">
                        <span className="number">197</span>
                      </CCol>
                    </CRow>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CRow>
                      <CCol>
                        <img
                          src={chevrolet}
                          srcset={`${chevrolet2} 2x, ${chevrolet3} 3x`}
                          alt="band"
                        />
                      </CCol>
                      <CCol className="col-number">
                        <span className="number">183</span>
                      </CCol>
                    </CRow>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CRow>
                      <CCol>
                        <img
                          src={jeep}
                          srcset={`${jeep2} 2x, ${jeep3} 3x`}
                          alt="band"
                        />
                      </CCol>
                      <CCol className="col-number">
                        <span className="number">125</span>
                      </CCol>
                    </CRow>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CRow>
                      <CCol>
                        <img
                          src={volks}
                          srcset={`${volks2} 2x, ${volks3} 3x`}
                          alt="band"
                        />
                      </CCol>
                      <CCol className="col-number">
                        <span className="number">109</span>
                      </CCol>
                    </CRow>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CRow>
                      <CCol>
                        <img
                          src={nissan}
                          srcset={`${nissan2} 2x, ${nissan3} 3x`}
                          alt="band"
                        />
                      </CCol>
                      <CCol className="col-number">
                        <span className="number">86</span>
                      </CCol>
                    </CRow>
                  </td>
                </tr>
              </tbody>
            </table>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default CardBrand;
