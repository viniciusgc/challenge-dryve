import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { CRow, CCol } from "@coreui/react";
import {
  CardInfo,
  CardLatestReviews,
  CardBrand,
  CardChart,
} from "../../components";
import { fetchCars } from "./actions";
import icCar from "../../assets/img/ic-directions-car_2.svg";
import icDevices from "../../assets/img/ic-important-devices.svg";
import icMoney from "../../assets/img/ic-attach-money.svg";

import "./style.scss";

class Home extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    const { cars } = this.props;
    return (
      <Layout>
        <CRow>
          <CCol md="4">
            <CardInfo
              title={"Avaliações hoje"}
              number={29}
              icon={icCar}
              percentage={"36%"}
              period={"desde ontem"}
            />
          </CCol>
          <CCol md="4">
            <CardInfo
              title={"carros publicados"}
              number={397}
              icon={icDevices}
              percentage={"4%"}
              period={"este mês"}
            />
          </CCol>
          <CCol md="4">
            <CardInfo
              title={"Ticket médio do estoque"}
              number={"R$: 42.567"}
              icon={icMoney}
              percentage={"6%"}
              period={"este mês"}
              up={false}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol md="8">
            <CardLatestReviews cars={cars} />
          </CCol>
          <CCol md="4">
            <CardBrand />
            <CardChart />
          </CCol>
        </CRow>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { home } = state;

  return {
    ...home,
  };
};

const mapDispatchToProps = {
  fetchCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
