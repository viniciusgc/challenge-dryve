import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CRow,
  CCol,
} from "@coreui/react";
import "./style.scss";
import icArrowDown from "../../assets/img/ic-arrow-drop-down_2.svg";

const CardLatestReviews = ({ cars }) => {
  console.log("cars", cars);
  return (
    <CCard className="card-reviews">
      <CCardHeader>
        <CRow className="align-items-center">
          <CCol md="10" xs="8">
            <span className="ltimas-avaliaes">Últimas avaliações</span>
          </CCol>
          <CCol md="2" xs="4">
            <CDropdown inNav className="drop-period">
              <CDropdownToggle className="hoje">Hoje</CDropdownToggle>
              <CDropdownMenu></CDropdownMenu>
            </CDropdown>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <div className="table-responsive">
              <table className="table">
                <thead className="text-style">
                  <tr>
                    <th scope="col" width="50%">
                      Dados do veículo
                    </th>
                    <th scope="col">Valor</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car) => (
                    <tr>
                      <td>
                        <CRow className="info-car">
                          <CCol md="3" className="pr-0  mb-xs-1">
                            <img
                              src={car.image}
                              className="rectangle"
                              alt="car"
                            />
                          </CCol>
                          <CCol className="pl-md-0 car-info">
                            <span className="car-name ">{`${car.brand_name} ${car.model_name}`}</span>
                            <br />
                            <span className="car-code">GDL8019</span>
                            <br />
                            <span className="car-code">{`${car.manufacturing_year} ${car.fuel_type}`}</span>
                            <br />
                            <span className="car-code">{`${
                              car.transmission_type
                            } ${car.mileage
                              .toString()
                              .replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                "."
                              )} Km`}</span>
                          </CCol>
                        </CRow>
                      </td>
                      <td>
                        <CRow>
                          <CCol className="car-info-two">
                            <div className="section">
                              <span className="anuncio">anúncio</span>
                              <br />
                              <span className="r-115560">{`R$ ${car.ad_selling_price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
                            </div>
                            <br />
                            <div className="section">
                              <span className="anuncio">minímo aceito</span>
                              <br />
                              <span className="r-115561">{`R$ ${car.ad_selling_price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
                            </div>
                          </CCol>
                        </CRow>
                      </td>
                      <td>
                        <CRow>
                          <CCol className="car-info-three">
                            <div className="rectangle-info">
                              <span className="aguardando-precifica">
                                Agurardando precificação
                              </span>
                            </div>
                            <br />
                            <div className="date-info">
                              <span className="s-1435">
                                18/05/2020 às 14:35
                              </span>
                            </div>
                          </CCol>
                        </CRow>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CRow>
          <CCol>
            <a href="/" className="ver-tudo">
              Ver tudo
              <img
                src={icArrowDown}
                className="ic_arrow_drop_down"
                alt="arrow"
              />
            </a>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  );
};

export default CardLatestReviews;
