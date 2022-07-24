import React, { useState } from "react";
import Styles from "./AddGoal.module.css";
import Button from "../../../../components/Button/Button";
import Form from "react-bootstrap/Form";
import API from "../../../../services/utils/API";
//import { selectedImageActions } from "../../../../store/selectedImage-slice";
import { goalActions } from "../../../../store/goals-slice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

const AddGoal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const getSelectedImageData = useSelector(
    (state) => state.selectedImages.selectedImageArray
  );
  const updateGoal = useSelector((state) => state.goals.goalEdit);

  let heading = "";
  let description = "";
  let url = "";
  let category = "";
  let privacyStatus = true; //change==============================================
  let goalTitle = <h1 className={Styles.sectionOneTitle}>Add Goals</h1>;

  if (updateGoal) {
    heading = updateGoal.heading;
    description = updateGoal.description;
    url = updateGoal.url;
    privacyStatus = updateGoal.isPrivate;
    category = updateGoal.category;
    goalTitle = <h1 className={Styles.sectionOneTitle}>Edit Goal</h1>;
  }
  //==============================================================================
  const [goalHeading, setGoalHeading] = useState(heading);
  const [goalDescription, setGoalDescription] = useState(description);
  const [goalUrl, setGoalUrl] = useState(url);
  const [goalPrivacy, setGoalPrivacy] = useState(privacyStatus);
  const [goalCategory, setGoalCategory] = useState(category);
  //=============================Handler Functions===============================
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
    setGoalPrivacy(true); //change========================================
    dispatch(goalActions.editGoal(null));
    goalTitle = <h1 className={Styles.sectionOneTitle}>Add Goals!</h1>;
  };
  const addGoalHandler = () => {
    const isValid = formValidationHandler();
    const data = {
      id: null,
      heading: goalHeading,
      url: goalUrl,
      category: goalCategory,
      description: goalDescription,
      isPrivate: goalPrivacy,
    };
    if (isValid) {
      API.userAddGoal(data).then((response) => {
        console.log(response.data, "goals data");

        setGoalPrivacy(true); //======================================
        setGoalHeading("");
        setGoalUrl("");
        setGoalDescription("");
        setGoalCategory("");
        //isValid = true;
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
  if (!goalPrivacy) {
    privacy = "Public";
  }

  //Form Validation
  let isGoalHeadingValid = /^[A-Z a-z]{3,50}$/.test(goalHeading);
  let isGoalUrlValid = goalUrl.length >= 12;
  let isGoalDescription =
    goalDescription.length >= 6 && goalDescription.length <= 250;

  let isGoalCategoryValid = goalCategory !== "" || goalCategory.length >= 2;

  const formValidationHandler = () => {
    let isValid = true;

    if (!isGoalHeadingValid) {
      isValid = false;
    }

    if (!isGoalUrlValid) {
      isValid = false;
    }

    if (!isGoalCategoryValid) {
      isValid = false;
    }

    if (!isGoalDescription) {
      isValid = false;
    }
    return isValid;
  };

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
        <div className={Styles.sectionOne_subContent}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={Styles.formText}>Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={goalHeading}
                onChange={goalHeadingHandler}
                isValid={isGoalHeadingValid}
                isInvalid={!isGoalHeadingValid}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={Styles.formText}>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.png"
                value={goalUrl}
                onChange={goalUrlHandler}
                isValid={isGoalUrlValid}
                isInvalid={!isGoalUrlValid}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className={Styles.formText}>Category</Form.Label>

              <Form.Select
                as="select"
                value={goalCategory}
                onChange={goalCategoryHandler}
                isValid={isGoalCategoryValid}
                isInvalid={!isGoalCategoryValid}
              >
                <option value={null}></option>
                <option>Adventure</option>
                <option>Hiking</option>
                <option>Famliy</option>
                <option>Traveling</option>
                <option>Cooking</option>
                <option>Self-Improvement</option>
                <option>Health</option>
                <option>Learning</option>
                <option>DIY</option>
                <option>Other</option>
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
                isValid={isGoalDescription}
                isInvalid={!isGoalDescription}
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
          <p>
            Use your <b>vision board</b> to guide your goal creation.
          </p>
          <div className={Styles.reports}>{newGeneratedImage}</div>
        </div>
      </div>
    </div>
  );
};
export default AddGoal;
