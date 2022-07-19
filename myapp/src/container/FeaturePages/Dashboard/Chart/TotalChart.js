import React from "react";
//import Button from "../../../../components/Button/Button";
import Styles from "./charts.module.css";

const TotalChart = (props) => {
  return (
    <div className={Styles.chartBox} style={{ fontSize: "11px" }}>
      <div className={Styles.totalChart}>
        <div className={Styles.totalChartNumber}>8000</div>
        <div className={Styles.goalsCreated}>goals created</div>
      </div>
    </div>
  );
};
export default TotalChart;
