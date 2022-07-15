import React, { useState } from "react";
import Styles from "./AddGoal.module.css";
import Button from "../../../../components/Button/Button";
import Form from "react-bootstrap/Form";
import API from "../../../../services/utils/API";
import { selectedImageActions } from "../../../../store/selectedImage-slice";
import { goalActions } from "../../../../store/goals-slice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

const AddGoal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let isValid = "false";

  console.log(isValid, "validation status");
  const getSelectedImageData = useSelector(
    (state) => state.selectedImages.selectedImageArray
  );
  const updateGoal = useSelector((state) => state.goals.goalEdit);

  let heading = "";
  let description = "";
  let url = "";
  let category = "";
  let privacyStatus = false;
  let goalTitle = <h1 className={Styles.sectionOneTitle}>Add Goals!</h1>;

  if (updateGoal) {
    heading = updateGoal.heading;
    description = updateGoal.description;
    url = updateGoal.url;
    privacyStatus = updateGoal.isPrivate;
    category = updateGoal.category;
    goalTitle = <h1 className={Styles.sectionOneTitle}>Edit Goal!</h1>;
  }

  //==============================================================================
  const [goalHeading, setGoalHeading] = useState(heading);
  const [goalDescription, setGoalDescription] = useState(description);
  const [goalUrl, setGoalUrl] = useState(url);
  const [goalPrivacy, setGoalPrivacy] = useState(privacyStatus);
  const [goalCategory, setGoalCategory] = useState(category);
  //const [isValidGoalForm, setIsValidGoalForm] = useState("true");

  //================================Handler Functions=====================================
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
  const editGoalHandler = () => {
    const updateData = {
      id: updateGoal.id,
      heading: goalHeading,
      url: goalUrl,
      category: goalCategory,
      description: goalDescription,
      isPrivate: goalPrivacy,
    };

    API.editUserGoal(updateData).then((response) => {
      console.log(response, " Edit goal response");

      cancelBtnHandler();
      history.push("/goals");
    });
  };
  const cancelBtnHandler = () => {
    setGoalHeading("");
    setGoalUrl("");
    setGoalCategory("");
    setGoalDescription("");
    setGoalPrivacy(false);
    dispatch(goalActions.editGoal(null));
    goalTitle = <h1 className={Styles.sectionOneTitle}>Add Goals!</h1>;
  };

  const addGoalHandler = () => {
    // //let isValid = true;
    // if (goalHeading === "") {
    //   isValid = false;
    //   //setIsValidGoalForm(false);
    // }
    // if (goalUrl === "") {
    //   isValid = false;
    //   //setIsValidGoalForm(false);
    // }
    // if (goalCategory === "") {
    //   isValid = false;
    //   //setIsValidGoalForm(false);
    // }
    // if (goalDescription === "") {
    //   isValid = false;
    //   //setIsValidGoalForm(false);
    // }
    const data = {
      id: null,
      heading: goalHeading,
      url: goalUrl,
      category: goalCategory,
      description: goalDescription,
      isPrivate: goalPrivacy,
    };
    if (isValid === "true") {
      API.userAddGoal(data).then((response) => {
        console.log(response.data, "goals data");

        setGoalPrivacy(false);
        setGoalHeading("");
        setGoalUrl("");
        setGoalDescription("");
        setGoalCategory("");
        isValid = true;
        history.push("/goals");
      });
    } else {
      alert("form is not valid");
    }
  };
  //===============================Condional Styling========================================
  //Showed visionBoard seleted images on AddGoal page
  let newGeneratedImage = getSelectedImageData.map((data) => {
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

  //Form Validation
  let isGoalHeadingValid = /^[A-Z a-z]{3,40}$/.test(goalHeading);
  let isGoalUrlValid = goalUrl.length >= 12;
  let isGoalDescription =
    goalDescription.length >= 6 && goalDescription.length <= 250;

  let goalHeadingValid = false;
  let goalHeadingInvalid = true;
  let goalUrlValid = false;
  let goalUrlInvalid = true;
  let goalCategoryValid = false;
  let goalCategoryInvalid = true;
  let goalDescriptionValid = false;
  let goalDescriptionInvalid = true;

  // isValid={goalDescription !== ""}
  // isInvalid={goalDescriptionStatus}

  if (goalHeading !== "" && isGoalHeadingValid) {
    isValid = "true";
    goalHeadingValid = true;
    goalHeadingInvalid = false;
  }
  if (goalHeading === "" || !isGoalHeadingValid) {
    isValid = "false";
    goalHeadingValid = false;
    goalHeadingInvalid = true;
  }
  //-----------------------------------------------------------------
  if (goalUrl !== "" && goalUrl.length >= 12) {
    isValid = "true";
    goalUrlValid = true;
    goalUrlInvalid = false;
  }
  if (goalUrl === "" || goalUrl.length <= 12) {
    isValid = "false";
    goalUrlValid = false;
    goalUrlInvalid = true;
  }
  //-------------------------------------------------------------------
  if (goalCategory !== "" && goalCategory.length >= 3) {
    isValid = "true";
    goalCategoryValid = true;
    goalCategoryInvalid = false;
  }
  if (goalCategory === "" || goalCategory.length <= 2) {
    isValid = "false";
    goalCategoryValid = false;
    goalCategoryInvalid = true;
  }
  //----------------------------------------------------------------------
  if (goalDescription !== "" && isGoalDescription) {
    isValid = "true";
    goalDescriptionValid = true;
    goalDescriptionInvalid = false;
  }
  if (goalDescription === "" || !isGoalDescription) {
    isValid = "false";
    goalDescriptionValid = false;
    goalDescriptionInvalid = true;
  }
  //Conditional Create Goal and Update button
  let goalButton = (
    <Button className={Styles.continueBtn} onClick={addGoalHandler}>
      Create Goals
    </Button>
  );
  if (updateGoal) {
    goalButton = (
      <Button className={Styles.continueBtn} onClick={editGoalHandler}>
        Update
      </Button>
    );
  }
  //------------------------------------------------------------------------------
  return (
    <div className={Styles.goalsMainDiv}>
      <div className={Styles.sectionOne}>
        {goalTitle}
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
                isValid={goalHeadingValid}
                isInvalid={goalHeadingInvalid}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={Styles.formText}>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.png"
                value={goalUrl}
                onChange={goalUrlHandler}
                isValid={goalUrlValid}
                isInvalid={goalUrlInvalid}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className={Styles.formText}>Category</Form.Label>

              <Form.Select
                as="select"
                value={goalCategory}
                onChange={goalCategoryHandler}
                isValid={goalCategoryValid}
                isInvalid={goalCategoryInvalid}
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
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className={Styles.formText}>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write goal description (min 250)"
                rows="3"
                value={goalDescription}
                onChange={goalDescriptionhandler}
                isValid={goalDescriptionValid}
                isInvalid={goalDescriptionInvalid}
                //=====================================================
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
          <NavLink to={"/goals"}>
            <Button className={Styles.continueBtn} onClick={cancelBtnHandler}>
              Cancel
            </Button>
          </NavLink>

          {goalButton}
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
