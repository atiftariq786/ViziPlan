import React from "react";
import Styles from "./charts.module.css";
import { useSelector } from "react-redux";

const TotalChart = (props) => {
  const totalGoals = useSelector((state) => state.goals.totalGoalsArray);

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
