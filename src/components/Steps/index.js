import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.scss";

class Steps extends Component {
  state = {};

  render() {
    return (
      <section className="steps-section">
        <Container>
          <Row className="px-4">
            <Col md="3">
              <div className="d-flex justify-content-center">
                <span className="step disabled">1</span>{" "}
                <span className="my-auto disabled">Simule</span>
              </div>
            </Col>
            <Col md="3">
              <div className="d-flex justify-content-center">
                <span className="step font-primary">2</span>{" "}
                <span className="my-auto ">Preencha o cadástro</span>
              </div>
            </Col>
            <Col md="3">
              <div className="d-flex justify-content-center">
                <span className="step-outline disabled">3</span>{" "}
                <span className="my-auto disabled">Revise seu pedido</span>
              </div>
            </Col>
            <Col md="3">
              <div className="d-flex justify-content-center">
                <span className="step-outline disabled">4</span>{" "}
                <span className="my-auto disabled">Finalize seu pedido</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Steps;
