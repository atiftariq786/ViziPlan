import React, { useState } from "react";
import Styles from "../Goals/Goals.module.css";
import Button from "../../../components/Button/Button";
import Form from "react-bootstrap/Form";
//import { NavLink } from "react-router-dom";

const Goals = () => {
  const [goalHeading, setGoalHeading] = useState();
  const [goalDescription, setGoalDescription] = useState();

  const goalHeadingHandler = (event) => {
    setGoalHeading(event.target.value);
  };
  const goalDescriptionhandler = (event) => {
    setGoalDescription(event.target.value);
  };
  return (
    <div className={Styles.goalsMainDiv}>
      <div className={Styles.sectionOne}>
        <h1 className={Styles.sectionOneTitle}>Add Goals!</h1>
        <p>
          Use your visionboard
          <br />
          to guide your goal creation
        </p>

        <div className={Styles.sectionOne_subContent}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={Styles.formText}>Heading</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={Styles.formText}>Image URL</Form.Label>
              <Form.Control type="text" placeholder="https://example.png" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={Styles.formText}>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="hiking/travel/biking/running etc"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className={Styles.formText}>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write goal description (min 250)"
                rows="3"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className={Styles.formText}>Private</Form.Label>
              <Form.Check
                className={Styles.formCheckBtn}
                type="switch"
                id="custom-switch"
                // label="Private"
              />
            </Form.Group>
          </Form>

          <Button className={Styles.continueBtn}>Create Goals</Button>
        </div>
      </div>
      <div className={Styles.sectionTwo}>
        <div className={Styles.sectionTwo_subContent}>
          <div className={Styles.reports}>
            <h1>Visionboard</h1>
            <p>
              Your amazing quotes! <br />
              with <br /> amazing images!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Goals;
