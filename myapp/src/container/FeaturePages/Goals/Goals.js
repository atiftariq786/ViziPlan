import React, { useState, useEffect } from "react";
import Styles from "../Goals/Goals.module.css";
import Button from "../../../components/Button/Button";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faPlus,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { goalActions } from "../../../store/goals-slice";
import API from "../../../services/utils/API";
import Accordion from "react-bootstrap/Accordion";

const Goals = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [goalArray, setGoalArray] = useState([]);
  useEffect(() => {
    getUpdatedGoals();
  }, []);
  //================================Handler Functions=====================================
  const tickBtnHandler = (event) => {
    alert("tick mark btn cliked");
    event.stopPropagation();
  };

  const getUpdatedGoals = () => {
    API.savedGoal().then((response) => {
      setGoalArray(response.data);
    });
  };
  const deleteGoalHandler = (event, data) => {
    event.stopPropagation();

    API.deleteGoal(data.id).then((response) => {
      console.log(response, "Goal deleted successfully....!");
      getUpdatedGoals();
    });
  };
  const editGoalHandler = (event, data) => {
    console.log(data, "Edit goal cliked data");
    event.stopPropagation();
    dispatch(goalActions.editGoal(data));
    history.push("/editGoal");
  };
  //===============================Condional Styling========================================
  //defaultActiveKey="0"
  let savedGoalList = goalArray.map((data) => {
    return (
      <div key={data.id} className={Styles.accordionMainDiv}>
        <Accordion className={Styles.accodian}>
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
                      <FontAwesomeIcon
                        icon={faPencil}
                        size="2x"
                        onClick={(event) => editGoalHandler(event, data)}
                        className={Styles.editIconBtns}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        size="2x"
                        className={Styles.deleteIconBtns}
                        onClick={(event) => deleteGoalHandler(event, data)}
                      />
                    </div>

                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="2x"
                        className={Styles.tickIconBtns2}
                        onClick={tickBtnHandler}
                      />
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
        <div className={Styles.titlediv}>
          <h1 className={Styles.sectionOneTitle}>Goals!</h1>
          <p>
            Use your visionboard
            <br />
            to guide your goal creation
          </p>
        </div>

        <div className={Styles.createGoalBtnDiv}>
          <NavLink to="/addGoal">
            <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              className={Styles.createGoalBtn}
            />
          </NavLink>
        </div>
      </div>

      <div className={Styles.sectionTwo}>{savedGoalList}</div>
    </div>
  );
};
export default Goals;
