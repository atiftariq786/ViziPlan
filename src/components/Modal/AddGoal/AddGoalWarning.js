import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddGoalWarning = (props) => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.showModal}
    >
      <Modal.Header onClick={props.hideModal} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Warning!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please provide all valid input!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.hideModal}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddGoalWarning;
