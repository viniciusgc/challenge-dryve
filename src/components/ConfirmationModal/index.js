import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./style.scss";

const ConfirmationModal = (props) => {
  const {
    type,
    className,
    modal,
    name,
    handleModal,
    handleActionModal,
  } = props;

  return (
    <Modal isOpen={modal} toggle={handleModal} className={className}>
      <ModalHeader toggle={handleModal}>Atenção</ModalHeader>
      <ModalBody>
        {type == "delete"
          ? "Deseja realmente excluir o usuário: "
          : "Deseja realmente alterar o usuário:"}
        <strong>{` ${name}`}</strong> ?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleModal}>
          Cancelar
        </Button>{" "}
        <Button
          color={type == "delete" ? "danger" : "primary"}
          onClick={handleActionModal}
        >
          {type == "delete" ? "Apagar" : "Alterar"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
