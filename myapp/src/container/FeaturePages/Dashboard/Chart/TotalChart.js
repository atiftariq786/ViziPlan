import React, { useState, useEffect } from "react";
//import Button from "../../../../components/Button/Button";
import Styles from "./charts.module.css";
import API from "../../../../services/utils/API";
import { useDispatch, useSelector } from "react-redux";
import { goalActions } from "../../../../store/goals-slice";

const TotalChart = (props) => {
  const dispatch = useDispatch();
  const [totalGoals, setTotalGoals] = useState([]);

  useEffect(() => {
    getAllGoals();
  }, []);

  const getAllGoals = () => {
    let goalType = "allGoals";
    API.savedGoal(goalType).then((result) => {
      //console.log(result, "Total Goal Calculation");
      dispatch(goalActions.totalGoals(result.data));
      setTotalGoals(result.data);
    });
  };
  return (
    <div
      className={Styles.chartBox}
      style={{ fontSize: "11px", display: "flex" }}
    >
      <div className={Styles.totalChart}>
        <div className={Styles.totalChartNumber}>{totalGoals.length}</div>
        <div className={Styles.goalsCreated}>Total Goals</div>
      </div>
    </div>
  );
};
export default TotalChart;
