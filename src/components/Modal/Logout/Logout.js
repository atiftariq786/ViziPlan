import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const LogoutWarning = (props) => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.showModal}
    >
      <Modal.Header onClick={props.hideModal} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to logout?</p>
      </Modal.Body>
      <Modal.Footer>
        <NavLink to="/">
          <Button onClick={props.logout} variant="danger">
            Logout
          </Button>
        </NavLink>
        <Button onClick={props.hideModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default LogoutWarning;
