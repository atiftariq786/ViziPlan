import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TechDiagram = (props) => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.showModal}
      onHide={props.hideModal}
    >
      <Modal.Header
        onClick={props.hideModal}
        closeButton
        style={{ background: "#f9f9f9" }}
      >
        <img
          style={{ width: "80px", height: "50px" }}
          src={require("../../../assets/images/aboutModal.gif")}
          alt="Icon"
        ></img>{" "}
        <span style={{ color: "black", fontWeight: "800", fontSize: "24px" }}>
          ViziPlan
        </span>
      </Modal.Header>
      <Modal.Body style={{ color: "gray", background: "#f3f8ff" }}>
        <img
          style={{ width: "700px", height: "560px" }}
          src={require("../../../assets/images/ViziPlan_FullStructureDiagram.png")}
          alt="Architecture Diagram"
        ></img>
      </Modal.Body>
      <Button
        style={{ fontSize: "22px", margin: "10px" }}
        onClick={props.hideModal}
      >
        Close
      </Button>
    </Modal>
  );
};
export default TechDiagram;
