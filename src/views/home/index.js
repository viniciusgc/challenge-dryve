import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { Row, Col, Container, Button, Form, Label } from "reactstrap";
import { FontAwesome } from "react-web-vector-icons";

import "./style.scss";

class Home extends Component {
  componentDidMount() {}

  state = {};

  render() {
    return (
      <Layout>
        <h1>Test</h1>
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
