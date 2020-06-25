import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { Row, Col, Container, Button, Form } from "reactstrap";
import {
  HeaderInfo,
  Input,
  Select,
  Checkbox,
  Steps,
} from "../../components/index";
import { FontAwesome } from "react-web-vector-icons";

import "./style.scss";

class Home extends Component {
  state = {};

  render() {
    const handleSubmit = (data) => {
      console.log("data", data);
    };

    return (
      <Layout>
        <HeaderInfo />
        <Steps />
        <Container>
          <Row className="mt-5 text-center section-form">
            <Col>
              <h2>Dados Pessoais</h2>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Form onSubmit={handleSubmit}>
                <Row className="px-12">
                  <Col md={4}>
                    <Input name="rg" label="Número do rg" />
                  </Col>

                  <Col md={4}>
                    <Input name="data" label="Data de emissão" />
                  </Col>

                  <Col md={4}>
                    <Select name="rg" label="Orgão expedidor" />
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={{ size: 1, offset: 3 }}
                    className="mt-2 label-gender"
                  >
                    <span>Sexo</span>
                  </Col>
                  <Col md={5} className="mt-2">
                    <Checkbox name="sexo" label="Sexo" />
                  </Col>
                </Row>

                <Row className="mt-3 text-center mb-5">
                  <Col>
                    <Button color="primary" type="submit">
                      Continuar{" "}
                      <FontAwesome name="caret-right" color="#fff" size={16} />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
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
