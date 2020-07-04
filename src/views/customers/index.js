import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { CRow, CCol, CButton, CInput } from "@coreui/react";
import { CardListCustomer } from "../../components";
import "./style.scss";

class Customers extends Component {
  render() {
    const { customers } = this.props;
    return (
      <Layout>
        <CRow>
          <CCol xl="1" md="12" xs="12">
            <CButton color="primary" className="btn-filter">
              <i class="cil-list-filter icon-filter mr-2"></i>
              <span className="label">Filtrar</span>
            </CButton>
          </CCol>
          <CCol xl="4" md="12" xs="12">
            <CInput
              className="mr-sm-2 input-text ml-md-2"
              placeholder="Buscar por nome..."
            />
          </CCol>
          <CCol xl="7" md="12" xs="12">
            <CButton
              color="primary"
              className="btn-add float-right"
              onClick={() => (window.location = "/customer")}
            >
              <i class="cil-plus mr-2 icon-plus"></i>
              <span className="label">Adicionar</span>
            </CButton>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol>
            <CardListCustomer customers={customers} />
          </CCol>
        </CRow>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { customer } = state;

  return {
    ...customer,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
