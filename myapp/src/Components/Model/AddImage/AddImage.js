import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Styles from "./AddImage.module.css";

const AddImageModel = (props) => {
  const [lgShow, setLgShow] = useState(props.addImageModelShow ? true : false);

  const CancelBtnHandler = () => {
    setLgShow(false);
  };

  console.log(props.addImageModelShow, "Child Model File Result");
  return (
    <ButtonToolbar>
      <Modal
        size="lg"
        show={lgShow}
        backdrop="false"
        onHide={() => {
          setLgShow(false);
        }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Image
          </Modal.Title>
        </Modal.Header>
        <Form className={Styles.InputElement}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" defaultValue={""} onChange={""} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://example.png"
              defaultValue={""}
            />
          </Form.Group>
        </Form>
        <Button
          className={Styles.modalButton}
          variant="success"
          type="button"
          // onClick ={()=>{return props.saveUpdateGoal({title, link, description})}}
          size="sm"
        >
          Add Image
        </Button>
        <Button
          className={Styles.modalButton}
          variant="danger"
          type="button"
          onClick={CancelBtnHandler}
          size="sm"
        >
          Cancel
        </Button>
      </Modal>
    </ButtonToolbar>
  );
};
export default AddImageModel;
