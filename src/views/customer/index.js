import React, { Component } from "react";
import Layout from "../container/layout";
import { CRow, CCol } from "@coreui/react";
import "./style.scss";
import { CardNewCustomer } from "../../components";

class Customer extends Component {
  render() {
    return (
      <Layout>
        <CRow>
          <CCol>
            <h6 className="adicionar-cliente">Adicionar cliente</h6>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="12">
            <CardNewCustomer />
          </CCol>
        </CRow>
      </Layout>
    );
  }
}

export default Customer;
