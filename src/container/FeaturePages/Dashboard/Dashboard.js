import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { goalActions } from "../../../store/goals-slice";
import API from "../../../services/utils/API";
import Styles from "../Dashboard/Dashboard.module.css";
import Activities from "./Activities/Activities";
import UserName from "./UserName/UserName";
import CompleteChart from "./Chart/CompleteChart";
import CategoryChart from "./Chart/CategoryChart";
import MonthlyChart from "./Chart/MonthlyChart";
import AllMonthlyChart from "./Chart/AllMonthlyChart";
import TotalChart from "./Chart/TotalChart";
import RecentGoals from "./RecentGoals/RecentGoals";
import Button from "../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [totalGoals, setTotalGoals] = useState([]);

  useEffect(() => {
    getAllGoals();
  }, []);

  const getAllGoals = () => {
    let goalType = "allGoals";
    API.savedGoal(goalType).then((result) => {
      dispatch(goalActions.totalGoals(result.data));
      setTotalGoals(result.data);
    });
  };

  let goalsAnalytics = (
    <div>
      <div className={Styles.titleDiv}>
        <h1 className={Styles.reportTitle}>Goals Analytics</h1>

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

      <div className={Styles.rowChart}>
        <TotalChart />
        <CompleteChart />
      </div>
      <div className={Styles.rowChart}>
        <AllMonthlyChart />
      </div>
      <div className={Styles.rowChart}>
        <CategoryChart />
        <MonthlyChart />
      </div>
    </div>
  );
  let recentGoals = (
    <div className={Styles.goalsSection}>
      <RecentGoals />
    </div>
  );
  if (totalGoals.length === 0) {
    goalsAnalytics = (
      <div>
        <h1>Reports</h1>
        <p>
          You have no goals yet! <br />
          Let set some!
        </p>
        <NavLink to="/addGoal">
          <Button className={Styles.continueBtn}>Create Goals</Button>
        </NavLink>
      </div>
    );
    recentGoals = "";
  }

  return (
    <div className={Styles.dashboardMainDiv}>
      <div className={Styles.sectionOne}>
        <div className={Styles.sectionOne_subContent}>
          <Activities />
        </div>
      </div>
      <div className={Styles.sectionTwo}>
        <div className={Styles.sectionTwo_subContent}>
          <UserName />
        </div>
        <div className={Styles.reports}>{goalsAnalytics}</div>

        <div>{recentGoals}</div>
      </div>
    </div>
  );
};
export default Dashboard;
