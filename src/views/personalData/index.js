import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../container/layout";
import { Row, Col, Container, Button, Table, Alert } from "reactstrap";
import { FontAwesome } from "react-web-vector-icons";
import { fetchPersonalData, deletePersonalData } from "./actions";
import { ConfirmationModal } from "../../components";
import qs from "qs";
import { toast } from "react-toastify";

import "./style.scss";

class PersonalData extends Component {
  async componentDidMount() {
    let params = qs.parse(window.location.search, { ignoreQueryPrefix: true });

    if (params.created) {
      toast.success("Sucesso ao salvar os dados");
    }

    if (params.updated) {
      toast.success("Sucesso ao atualizar os dados");
    }
    await this.props.fetchPersonalData();
  }

  state = {
    showModal: false,
    name: "",
    id: null,
    modalType: "delete",
  };

  handleModal = (id, name, modalType) => {
    this.setState({ showModal: true, name, modalType, id });
  };

  handleActionModal = () => {
    const { id, modalType, showModal } = this.state;
    if (modalType === "delete") {
      this.props.deletePersonalData(id);
    } else {
      window.location.href = `/personal-data/${id}`;
    }
    this.setState({ showModal: !showModal });
  };

  renderRowTable = (users) => {
    if (users.length === 0) {
      return (
        <tr>
          <td colSpan="3">
            {" "}
            <Alert color="warning" className="text-center">
              Nenhum usuário foi encontrado.
            </Alert>
          </td>
        </tr>
      );
    }
    return users.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.rg}</td>

        <td>
          <Button
            title="editar"
            color="primary"
            className="mr-3 primary-color"
            onClick={() => this.handleModal(item.id, item.name, "update")}
          >
            <FontAwesome name="edit" color="#fff" size={14} />
          </Button>
          <Button
            title="apagar"
            color="danger"
            onClick={() => this.handleModal(item.id, item.name, "delete")}
            className="mt-xs-1 "
          >
            <FontAwesome name="trash" color="#fff" size={14} />
          </Button>
        </td>
      </tr>
    ));
  };

  render() {
    const { users } = this.props;
    const { showModal, name, modalType } = this.state;
    return (
      <Layout>
        <Container>
          <Row className="mt-5 section-list">
            <Col md={10} className="text-xs-center">
              <h3>Dados Pessoais ({users.length})</h3>
            </Col>
            <Col md={2} className="mt-xs-1">
              <Link to="/" className="link-new">
                <Button color="primary" block renderAs="button">
                  <FontAwesome name="plus" color="#fff" size={16} />
                  Novo
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th width="50%">Nome</th>
                    <th width="30%">RG</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>{this.renderRowTable(users)}</tbody>
              </Table>
            </Col>
          </Row>
          <ConfirmationModal
            type={modalType}
            modal={showModal}
            name={name}
            handleModal={() => this.setState({ showModal: !showModal })}
            handleActionModal={this.handleActionModal}
          />
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { personalData } = state;

  return {
    ...personalData,
  };
};

const mapDispatchToProps = {
  fetchPersonalData,
  deletePersonalData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);
