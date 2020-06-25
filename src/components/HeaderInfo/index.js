import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.scss";

class HeaderInfo extends Component {
  state = {};

  render() {
    return (
      <section className="header-info">
        <Container>
          <Row>
            <Col md="4" xs="12">
              <div class="info">
                <p className="title">Me chamo:</p>
                <span className="subtitle">Paul Irish</span>
                <p className="cpf">
                  <span className="title">CPF:</span> 762.886.176-92
                </p>
              </div>
            </Col>
            <Col md="2" xs="12">
              <div class="info">
                <p className="title">Preciso de:</p>
                <span className="subtitle">R$: 2.000</span>
              </div>
            </Col>
            <Col md="2" xs="12">
              <div class="info">
                <p className="title">Quero pagar em:</p>
                <span className="subtitle">12 vezes</span>
              </div>
            </Col>
            <Col md="4" xs="12">
              <div class="info">
                <p className="title">Para:</p>
                <span className="subtitle">Comprar uma bike</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default HeaderInfo;
