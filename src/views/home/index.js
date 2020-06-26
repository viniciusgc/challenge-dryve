import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { Row, Col, Container, Button, Form, Label } from "reactstrap";
import {
  HeaderInfo,
  Input,
  Select,
  Radio,
  Steps,
} from "../../components/index";
import { FontAwesome } from "react-web-vector-icons";
import {
  fetchEmitting,
  createPersonalData,
  fetchPersonalData,
  updatePersonalData,
} from "./actions";
import Moment from "moment";

import "./style.scss";

class Home extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      await this.props.fetchPersonalData(id);
      this.setState({ ...this.props.personalData });
      console.log(id);
    }
    this.props.fetchEmitting();
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props.match.params;
    if (id) {
      this.setState({ ...nextProps.personalData });
    }
  }

  state = {
    rg: "",
    date: "",
    emitting: "",
    gender: "",
    invalid: {
      rg: false,
      date: false,
      emitting: false,
      gender: false,
      button: false,
    },
  };
  validateAndGetData = async () => {
    let data = {};

    if (this.state.rg) {
      data = await { ...data, rg: this.state.rg };
      await this.setState({ invalid: { ...this.state.invalid, rg: false } });
    } else {
      await this.setState({
        invalid: { ...this.state.invalid, rg: true, button: true },
      });
    }

    if (
      this.state.date &&
      Moment(this.state.date, "DD/MM/YYYY", true).isValid()
    ) {
      data = await { ...data, date: this.state.date };
      await this.setState({ invalid: { ...this.state.invalid, date: false } });
    } else {
      await this.setState({
        invalid: { ...this.state.invalid, date: true, button: true },
      });
    }

    if (this.state.emitting) {
      data = await { ...data, emitting: this.state.emitting };
      await this.setState({
        invalid: { ...this.state.invalid, emitting: false },
      });
    } else {
      await this.setState({
        invalid: { ...this.state.invalid, emitting: true, button: true },
      });
    }

    if (this.state.gender) {
      data = await { ...data, gender: this.state.gender };
      await this.setState({
        invalid: { ...this.state.invalid, gender: false },
      });
    } else {
      await this.setState({
        invalid: { ...this.state.invalid, gender: true, button: true },
      });
    }

    return data;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let data = await this.validateAndGetData();

    if (
      !this.state.invalid.rg &&
      !this.state.invalid.date &&
      !this.state.invalid.emitting &&
      !this.state.invalid.gender
    ) {
      if (this.props.match.params.id) {
        this.props.updatePersonalData(this.props.match.params.id, data);
      } else {
        this.props.createPersonalData(data);
      }
    }
  };

  handleChangeInput = (state, value) => {
    this.setState(
      {
        [state]: value,
        invalid: { ...this.state.invalid, [state]: false },
      },
      () => {
        if (
          !this.state.invalid.rg &&
          !this.state.invalid.date &&
          !this.state.invalid.emitting &&
          !this.state.invalid.gender
        ) {
          this.setState({
            invalid: { ...this.state.invalid, button: false },
          });
        }
      }
    );
  };

  render() {
    const { emittings } = this.props;
    const {} = this.state.invalid;

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
              <Form onSubmit={this.handleSubmit} className="main-form">
                <Row className="px-12">
                  <Col md={4}>
                    <Input
                      name="rg"
                      mask="99.999.999-9"
                      label="Número do rg"
                      invalid={this.state.invalid.rg}
                      onChange={(value) =>
                        this.handleChangeInput("rg", value.target.value)
                      }
                      value={this.state.rg}
                    />
                  </Col>

                  <Col md={4}>
                    <Input
                      name="date"
                      label="Data de emissão"
                      mask="99/99/9999"
                      invalid={this.state.invalid.date}
                      onChange={(value) =>
                        this.handleChangeInput("date", value.target.value)
                      }
                      value={this.state.date}
                    />
                  </Col>

                  <Col md={4}>
                    <Select
                      name="orgao"
                      label="Orgão expedidor"
                      data={emittings}
                      invalid={this.state.invalid.emitting}
                      onChange={(value) =>
                        this.handleChangeInput("emitting", value.target.value)
                      }
                      value={this.state.emitting}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={{ size: 1, offset: 3 }}
                    className="mt-2 label-gender"
                  >
                    <Label
                      for="gender"
                      className={this.state.invalid.gender ? "invalid" : ""}
                    >
                      Sexo
                    </Label>
                  </Col>
                  <Col md={5} className="mt-2">
                    <Radio
                      name="sexo"
                      label="Sexo"
                      invalid={this.state.invalid.gender}
                      onChange={(value) =>
                        this.handleChangeInput("gender", value.target.id)
                      }
                      value={this.state.gender}
                    />
                  </Col>
                </Row>

                <Row className="mt-3 text-center mb-5">
                  <Col>
                    <Button
                      color="primary"
                      type="submit"
                      disabled={this.state.invalid.button}
                    >
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

const mapDispatchToProps = {
  fetchEmitting,
  fetchPersonalData,
  createPersonalData,
  updatePersonalData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
