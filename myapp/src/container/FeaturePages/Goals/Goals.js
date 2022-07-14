import React, { useState, useEffect } from "react";
import Styles from "../Goals/Goals.module.css";
import Button from "../../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { goalActions } from "../../../store/goals-slice";
import API from "../../../services/utils/API";
import Accordion from "react-bootstrap/Accordion";

const Goals = () => {
  //const dispatch = useDispatch();

  //const getAddGoalsData = useSelector((state) => state.goals.savedGoalArray);

  const [goalArray, setGoalArray] = useState([]);
  useEffect(() => {
    API.savedGoal().then((response) => {
      //console.log(response, "Getting saved goal");
      setGoalArray(response.data);
      //dispatch(goalActions.goalList(response.data));
    });
  }, []);

  const editbtnHandler = (event) => {
    alert("edit btn cliked");
    event.stopPropagation();
  };

  // console.log(goalArray, "goal save data in goals.js");

  // const [goalHeading, setGoalHeading] = useState();
  // const [goalDescription, setGoalDescription] = useState();

  // const goalHeadingHandler = (event) => {
  //   setGoalHeading(event.target.value);
  // };
  // const goalDescriptionhandler = (event) => {
  //   setGoalDescription(event.target.value);
  // };
  let savedGoalList = goalArray.map((data) => {
    return (
      <div key={data.id} className={Styles.accordionMainDiv}>
        <Accordion defaultActiveKey="0" className={Styles.accodian}>
          <Accordion.Item eventKey="0" className={Styles["accordion-item"]}>
            <div className={Styles.accordionBtnDiv_One}>
              <Accordion.Button className={Styles["accordion-button"]}>
                <div className={Styles.accordionContents}>
                  <div className={Styles.goalImage}>
                    <img
                      style={{
                        width: "150px",
                        height: "100px",
                        borderRadius: "20px",
                      }}
                      key={data.id}
                      id={data.id}
                      src={data.url}
                      alt={"goalImage"}
                    ></img>
                  </div>

                  <div className={Styles.heading}>{data.heading}</div>

                  <div className={Styles.accordionBtnDiv_Two}>
                    <div>
                      <Button
                        className={Styles.addGoalEditBtn}
                        onClick={editbtnHandler}
                      >
                        Edit
                      </Button>
                    </div>
                    <div>
                      <Button
                        className={Styles.addGoalDelBtn}
                        // onClick={alert("Edit delete clicked")}
                      >
                        X
                      </Button>
                    </div>
                    <div>
                      <Button
                        className={Styles.addGoalCompBtn}
                        // onClick={alert("Edit complete clicked")}
                      >
                        Complete
                      </Button>
                    </div>
                  </div>
                </div>
              </Accordion.Button>
            </div>

            <Accordion.Body>
              {data.description}
              <p>---------------------</p>
              {data.createdAt}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  });
  return (
    <div className={Styles.container}>
      <div className={Styles.sectionOne}>
        <h1 className={Styles.sectionOneTitle}>Goals!</h1>
        <NavLink to="/addGoal">
          <Button className={Styles.addGoalBtn}>+</Button>
        </NavLink>
        <p>
          Use your visionboard
          <br />
          to guide your goal creation
        </p>
      </div>

      <div className={Styles.sectionTwo}>{savedGoalList}</div>
    </div>
  );
};
export default Goals;
