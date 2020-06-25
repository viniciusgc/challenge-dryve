import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col } from "reactstrap";
import "./style.scss";

class MainCard extends Component {
  state = {};

  render() {
    const { card } = this.props;
    return (
      <Card
        className={`mainCard mb-3 justify-content-center border-${card.color}`}
      >
        <Row>
          <Col md="2" xs="12">
            <span>{card.date}</span>
          </Col>
          <Col md="2" xs="12">
            <span>{card.name}</span>
          </Col>
          <Col md="2" xs="12">
            <span className={`status-${card.color}`}>{card.status}</span>
          </Col>
          <Col md="6" xs="12">
            <span>{card.result}</span>
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainCard);
