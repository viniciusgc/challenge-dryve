import React from "react";
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CCardFooter,
  CDropdownToggle,
  CDropdown,
  CDropdownMenu,
} from "@coreui/react";
import "./style.scss";
import icArrowLeft from "../../assets/img/ic-chevron-left.svg";
import icArrowRight from "../../assets/img/ic-chevron-right.svg";
import icMoreVert from "../../assets/img/ic-more-vert.svg";

const CardListCustomer = ({ customers }) => {
  return (
    <CCard className="card-customer">
      <CCardBody>
        <CRow>
          <CCol>
            <div className="table-responsive">
              <table className="table">
                <thead className="text-style">
                  <tr>
                    <th scope="col">
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        className="checkbox"
                      />
                    </th>
                    <th scope="col">Nome</th>
                    <th scope="col">Status</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          className="checkbox"
                        />
                      </td>
                      <td>{customer.name}</td>
                      <td>
                        <div
                          className={
                            customer.type === "client"
                              ? "rectangle"
                              : "rectangle-lead"
                          }
                        >
                          <span
                            className={
                              customer.type === "client" ? "cliente" : "lead"
                            }
                          >
                            {customer.type === "client" ? "Cliente" : "Lead"}
                          </span>
                        </div>
                      </td>
                      <td>{customer.phone}</td>
                      <td>
                        <div className="d-flex justify-content-between">
                          {customer.email}
                          <img
                            src={icMoreVert}
                            class="ic_more_vert"
                            alt="options"
                          />
                        </div>
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
          <CCol className="d-flex align-items-center">
            <span className="itens-por-pgina text-center">
              Itens por página:
            </span>
            <CDropdown inNav className="drop-page">
              <CDropdownToggle className="page">10</CDropdownToggle>
              <CDropdownMenu></CDropdownMenu>
            </CDropdown>
            <span className="itens-por-pgina">1-10 de 3456</span>
          </CCol>
          <CCol className="d-flex justify-content-end align-items-center">
            <a href="/customer">
              <img
                src={icArrowRight}
                className="ic_chevron_right"
                alt="arrow"
              />
            </a>
            <a href="/customer">
              <img src={icArrowLeft} className="ic_chevron_left" alt="arrow" />
            </a>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  );
};

export default CardListCustomer;
