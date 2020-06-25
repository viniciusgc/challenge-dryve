import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { Row, Col } from "reactstrap";
import { MainCard } from "../../components";
import "./style.scss";

class Home extends Component {
  state = {
    cards: [
      {
        date: "16 Jun 2020",
        name: "Clarise Lispector",
        status: "Em análise",
        result: "Texto de exemplo  Covid 01",
        color: "yellow",
      },
      {
        date: "20 Agos 2020",
        name: "Jorge Amado",
        status: "Negativo",
        result: "Texto de exemplo  Covid 02",
        color: "green",
      },
      {
        date: "25 Set 2020",
        name: "Guimarães Rosa",
        status: "Positivo",
        result: "Texto de exemplo  Covid 03",
        color: "red",
      },
      {
        date: "25 Set 2020",
        name: "Guimarães Rosa",
        status: "Positivo",
        result: "Texto de exemplo  Covid 03",
        color: "red",
      },
    ],
  };

  render() {
    const { cards } = this.state;
    return (
      <Layout>
        <Row className="mainTitle mt-5">
          <Col md={3}>
            <span>Data</span>
          </Col>
          <Col md={3}>
            <span>Nome</span>
          </Col>
          <Col md={3}>
            <span>Status</span>
          </Col>
          <Col md={3}>
            <span>Resultado probabilístico</span>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            {cards.map((card) => (
              <MainCard card={card} />
            ))}
          </Col>
        </Row>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
