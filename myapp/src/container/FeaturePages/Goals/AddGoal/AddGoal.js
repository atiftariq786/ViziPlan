import React, { useState } from "react";
import Styles from "./AddGoal.module.css";
import Button from "../../../../components/Button/Button";
import Form from "react-bootstrap/Form";
import API from "../../../../services/utils/API";
import { selectedImageActions } from "../../../../store/selectedImage-slice";
import { goalActions } from "../../../../store/goals-slice";
import { useSelector } from "react-redux";
//import { NavLink } from "react-router-dom";

const AddGoal = (props) => {
  const getSelectedImageData = useSelector(
    (state) => state.selectedImages.selectedImageArray
  );
  const [goalHeading, setGoalHeading] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [goalUrl, setGoalUrl] = useState("");
  const [goalPrivacy, setGoalPrivacy] = useState(false);
  const [goalCategory, setGoalCategory] = useState("");

  let isValidGoalForm = true;

  const goalHeadingHandler = (event) => {
    setGoalHeading(event.target.value);
  };
  const goalUrlHandler = (event) => {
    setGoalUrl(event.target.value);
  };
  const goalDescriptionhandler = (event) => {
    setGoalDescription(event.target.value);
  };
  const goalPrivacyHandler = () => {
    setGoalPrivacy(!goalPrivacy);
  };
  const goalCategoryHandler = (event) => {
    let goalCat = event.target.value;
    setGoalCategory(goalCat);
  };
  //console.log(goalCategory, "Form selection output");

  const addGoalHandler = () => {
    let isValid = true;
    if (goalHeading === "") {
      isValid = false;
    }
    if (goalUrl === "") {
      isValid = false;
    }
    if (goalCategory === "") {
      isValid = false;
    }
    if (goalDescription === "") {
      isValid = false;
    }
    //goalHeading && goalUrl && goalCategory && goalDescription
    if (isValid) {
      const data = {
        id: null,
        heading: goalHeading,
        url: goalUrl,
        category: goalCategory,
        description: goalDescription,
        isPrivate: goalPrivacy,
      };
      API.userAddGoal(data).then((response) => {
        //console.log(response, "addGoal response");
        console.log(response.data, "goals data");
        //props.history.push("/goals");
        // dispatch(goalActions.goalList(response.data));

        setGoalPrivacy(false);
        setGoalHeading("");
        setGoalUrl("");
        setGoalDescription("");
        setGoalCategory("");
      });
    } else {
      alert("form is not valid");
    }
  };
  let newGeneratedImage = getSelectedImageData.map((data) => {
    //console.log(data.id, "inside map selected image id");
    // console.log(data, "inside map selected image data");
    return (
      <div className={Styles.imageWrapper}>
        <img
          className={Styles.visionImages}
          key={data.id}
          id={data.id}
          src={data.url}
          alt={data.alt}
        ></img>
      </div>
    );
  });
  let privacy = "Private";
  if (goalPrivacy) {
    privacy = "Public";
  }

  //console.log({ goalPrivacy });
  let goalHeadingValid = /^[A-Z a-z]{3,40}$/.test(goalHeading);
  let goalUrlValid = goalUrl.length >= 12;
  let goalDescriptionValid =
    goalDescription.length >= 6 && goalDescription.length <= 250; // /^[A-Z0-9 /a-z]{4,250}$/.test(goalDescription);

  let goalHeadingStatus = true;
  let goalUrlStatus = true;
  let goalDescriptionStatus = true;

  if (goalHeading !== "" && !goalHeadingValid) {
    isValidGoalForm = false;
    goalHeadingStatus = false;
  }
  if (goalUrl !== "" && goalUrlValid) {
    isValidGoalForm = false;
    goalUrlStatus = false;
  }
  if (goalDescription !== "" && goalDescriptionValid) {
    isValidGoalForm = false;
    goalDescriptionStatus = false;
  }

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
              <Form.Control
                type="text"
                placeholder="Title"
                value={goalHeading}
                onChange={goalHeadingHandler}
                isValid={goalHeading !== ""}
                isInvalid={goalHeadingStatus}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={Styles.formText}>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.png"
                value={goalUrl}
                onChange={goalUrlHandler}
                isValid={goalUrl !== ""}
                isInvalid={goalUrlStatus}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className={Styles.formText}>Category</Form.Label>

              <Form.Select
                as="select"
                value={goalCategory}
                onChange={goalCategoryHandler}
                isValid={goalCategory !== ""}
                isInvalid={goalCategory === ""}
              >
                <option value={null}></option>
                <option>Travel</option>
                <option>Hiking</option>
                <option>Adventure</option>
                <option>Running</option>
                <option>Cooking</option>
                <option>Driving</option>
                <option>Studying</option>
                <option>Learning</option>
                <option>DIY</option>
                <option>other</option>
              </Form.Select>

              {/* <Form.Select>
                <option>no select</option>
                <option>Travel</option>
                <option>Hiking</option>
                <option>Adventure</option>
                <option>Running</option>
                <option>Cooking</option>
                <option>Driving</option>
                <option>Studying</option>
                <option>Learning</option>
                <option>DIY</option>
                <option>other</option>
              </Form.Select> */}
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className={Styles.formText}>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write goal description (min 250)"
                rows="3"
                value={goalDescription}
                onChange={goalDescriptionhandler}
                isValid={goalDescription !== ""}
                isInvalid={goalDescriptionStatus}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className={Styles.formText}></Form.Label>
              <Form.Check
                className={Styles.formCheckBtn}
                type="switch"
                id="custom-switch"
                label={privacy}
                //disabled={true}
                //isInvalid={true}
                defaultValue={goalPrivacy}
                checked={goalPrivacy}
                onClick={goalPrivacyHandler}
              />
            </Form.Group>
          </Form>

          <Button className={Styles.continueBtn} onClick={addGoalHandler}>
            Create Goals
          </Button>
        </div>
      </div>
      <div className={Styles.sectionTwo}>
        <div className={Styles.sectionTwo_subContent}>
          <h1>Visionboard</h1>
          <p>Your amazing quotes with amazing images!</p>
          <div className={Styles.reports}>{newGeneratedImage}</div>
        </div>
      </div>
    </div>
  );
};
export default AddGoal;
