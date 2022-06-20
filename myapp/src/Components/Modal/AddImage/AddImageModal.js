import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Styles from "./AddImage.module.css";

const AddImageModal = (props) => {
  //console.log(props.showAddImageModal, "Child Model File Result");
  return (
    <Modal
      size="lg"
      show={props.showAddImageModal}
      onHide={props.showModalHandler}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Image</Modal.Title>
      </Modal.Header>
      <Form className={Styles.InputElement}>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://example.png"
            onChange={props.inputUrlHandler}
            value={props.imageLink}
          />
        </Form.Group>
      </Form>
      <Button
        className={Styles.modalButton}
        variant="success"
        type="button"
        onClick={props.AddImageSubmitHandler}
        size="sm"
      >
        Add Image
      </Button>
      <Button
        className={Styles.modalButton}
        variant="danger"
        type="button"
        onClick={props.showModalHandler}
        size="sm"
      >
        Cancel
      </Button>
    </Modal>
  );
};
export default AddImageModal;
