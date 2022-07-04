import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const LoginError = (props) => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      {...props}
      size="md"
      backdrop="false"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login Error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Couldn't find your email or password incorrect!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default LoginError;
