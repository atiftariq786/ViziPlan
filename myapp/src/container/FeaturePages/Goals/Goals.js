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
  const [isCompletedGoal, setIsCompletedGoal] = useState(false);
  const [completedGoalList, setCompletedGoalList] = useState([]);
  useEffect(() => {
    getUpdatedGoals();
    getCompleteGoalList();
  }, []);
  //================================Handler Functions=====================================
  const getUpdatedGoals = () => {
    let goalType = "incomplete";
    API.savedGoal(goalType).then((response) => {
      setGoalArray(response.data);
    });
  };
  const getCompleteGoalList = () => {
    let completedGoalType = "completed";
    API.savedGoal(completedGoalType).then((response) => {
      console.log(response, "completed goals list from backend");
      setCompletedGoalList(response.data);
    });
  };

  const completeBtnHandler = (event, data) => {
    event.stopPropagation();
    console.log(data, "TickBtn goal id");

    API.completeGoal(data).then((response) => {
      getUpdatedGoals();
      console.log(response, "complete goal updated");
      getCompleteGoalList();
    });
  };

  const deleteGoalHandler = (event, data) => {
    event.stopPropagation();

    API.deleteGoal(data.id).then((response) => {
      console.log(response, "Goal deleted successfully....!");
      getUpdatedGoals();
      getCompleteGoalList();
    });
  };
  const editGoalHandler = (event, data) => {
    console.log(data, "Edit goal cliked data");
    event.stopPropagation();
    dispatch(goalActions.editGoal(data));
    history.push("/editGoal");
  };
  const completedGoalHandler = () => {
    setIsCompletedGoal(!isCompletedGoal);
  };

  const fixDate = (date) => {
    const dateObj = new Date(date);

    return dateObj.toLocaleString();
  };
  //===============================Condional Styling========================================
  //defaultActiveKey="0"

  const goalsToShow = isCompletedGoal ? completedGoalList : goalArray;

  let goalsList = goalsToShow.map((data) => {
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
                      onError={(e) => {
                        e.currentTarget.src = require("../../../assets/images/goals.png");
                      }}
                    ></img>
                  </div>

                  <div className={Styles.heading}>{data.heading}</div>

                  <div className={Styles.accordionBtnDiv_Two}>
                    {!isCompletedGoal && (
                      <div>
                        <FontAwesomeIcon
                          icon={faPencil}
                          size="2x"
                          onClick={(event) => editGoalHandler(event, data)}
                          className={Styles.editIconBtns}
                        />
                      </div>
                    )}
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
                        className={
                          isCompletedGoal
                            ? Styles.tickIconBtns_completed
                            : Styles.tickIconBtns
                        }
                        onClick={(event) => completeBtnHandler(event, data)}
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Button>
            </div>

            <Accordion.Body>
              {data.description}
              <div className={Styles.createdAtDate}>
                <b>Created At:</b> {fixDate(data.createdAt)}
              </div>
              <div className={Styles.completedAtDate}>
                <b>Completed At:</b>{" "}
                {data.completedAt ? fixDate(data.completedAt) : "Uncompleted"}
              </div>
              <div className={Styles.privacy}>
                <b>Is Private:</b>{" "}
                {data.isPrivate ? "Goal is private" : "Goal is public"}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  });

  let goalsBtn = (
    <Button className={Styles.completeBtn} onClick={completedGoalHandler}>
      Completed Goals
    </Button>
  );
  let goalsListBtn = (
    <Button className={Styles.completeBtn} onClick={completedGoalHandler}>
      Goals List
    </Button>
  );
  let goalTitleText = (
    <div className={Styles.titlediv}>
      <p className={Styles.sectionOneTitle}>Goals</p>
      <p className={Styles.sectionOneTitleText}>
        A goal without a plan is only a dream!
      </p>
    </div>
  );
  let completedGoalTitle = (
    <div className={Styles.titlediv}>
      <p className={Styles.sectionOneTitle}>Completed Goals</p>
      {completedGoalList.length && (
        <p className={Styles.sectionOneTitleText}>
          Congratulations on your well-deserved success!
        </p>
      )}
    </div>
  );
  if (isCompletedGoal) {
    goalsBtn = goalsListBtn;
    goalTitleText = completedGoalTitle;
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.sectionOne}>
        {goalTitleText}

        <div className={Styles.createGoalBtnDiv}>
          {goalsBtn}

          <NavLink to="/addGoal">
            <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              className={Styles.createGoalBtn}
            />
          </NavLink>
        </div>
      </div>

      <div className={Styles.sectionTwo}>{goalsList}</div>
    </div>
  );
};
export default Goals;
