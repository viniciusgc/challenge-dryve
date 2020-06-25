import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { Row, Col, Card, Container, CardHeader, CardBody } from "reactstrap";
import { MainCard } from "../../components";
import logo from "../../assets/img/logo.svg";

import "./style.scss";

class Lista extends Component {
  state = {
    cards: [
      {
        date: "16 Jun 2020",
        name: "Clarise Lispector",
        status: "Em análise",
        result:
          "Predição negativa para COVID-19, com probabilidade de 35% para COVID019",
        color: "yellow",
      },
      {
        date: "20 Agos 2020",
        name: "Jorge Amado",
        status: "Negativo",
        result:
          "Predição negativa para COVID-19, com probabilidade de 35% para COVID019",
        color: "green",
      },
      {
        date: "25 Set 2020",
        name: "Guimarães Rosa",
        status: "Positivo",
        result:
          "Predição negativa para COVID-19, com probabilidade de 35% para COVID019",
        color: "red",
      },
      {
        date: "25 Set 2020",
        name: "Guimarães Rosa",
        status: "Positivo",
        result:
          "Predição negativa para COVID-19, com probabilidade de 35% para COVID019",
        color: "red",
      },
      {
        date: "20 Agos 2020",
        name: "Jorge Amado",
        status: "Negativo",
        result:
          "Predição negativa para COVID-19, com probabilidade de 35% para COVID019",
        color: "green",
      },
    ],
  };

  render() {
    const { cards } = this.state;
    return (
      <Container fluid>
        <Row className="list align-items-center ">
          <Col md={12} className="">
            <Card className="list-card mx-auto">
              <CardHeader>
                <Row>
                  <Col md={2} className="text-center">
                    <img src={logo}></img>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2"></Col>
                  <Col md="10" className="main">
                    <Row className="header-main align-items-center">
                      <Col md="12" className="">
                        <span>Predição Covid-19</span>
                      </Col>
                    </Row>
                    <Row className="mainTitle mt-3">
                      <Col md={2}>
                        <span>Data</span>
                      </Col>
                      <Col md={2}>
                        <span>Nome</span>
                      </Col>
                      <Col md={2}>
                        <span>Status</span>
                      </Col>
                      <Col md={6}>
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
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lista);
