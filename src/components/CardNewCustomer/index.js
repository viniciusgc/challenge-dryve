import React from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CRow,
  CCol,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CButton,
} from "@coreui/react";
import "./style.scss";
import FormNewCustomer from "../FormNewCustomer";

const CardNewCustomer = () => {
  return (
    <CCard className="card-new-customer">
      <CCardBody>
        <CRow>
          <CCol>
            <CTabs activeTab="customer">
              <CNav variant="tabs" justified>
                <CNavItem>
                  <CNavLink data-tab="customer">Dados do cliente</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="car">Dados do veículo</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="acquisition">Intenção de compra</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="customer">
                  <FormNewCustomer />
                </CTabPane>
                <CTabPane data-tab="car">Conteúdo Dados do Veículo</CTabPane>
                <CTabPane data-tab="acquisition">
                  Conteúdo Intenção de Compra
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CRow>
          <CCol>
            <CButton color="primary" className="btn-save mr-md-3">
              Salvar
            </CButton>
            <a className="btn-cancel" href="/customers">
              Cancelar
            </a>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  );
};

export default CardNewCustomer;
