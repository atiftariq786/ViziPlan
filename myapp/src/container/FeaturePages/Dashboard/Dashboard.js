import React from "react";
import Styles from "../Dashboard/Dashboard.module.css";
//import API from "../../../services/utils/API";
import Activities from "./Activities/Activities";
//import Inspiration from "./Inspiration/Inspiration";
import UserName from "./UserName/UserName";
import CompleteChart from "./Chart/CompleteChart";
import CategoryChart from "./Chart/CategoryChart";
import MonthlyChart from "./Chart/MonthlyChart";
import TotalChart from "./Chart/TotalChart";
import RecentGoals from "./RecentGoals/RecentGoals";

const Dashboard = () => {
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
        <div className={Styles.reports}>
          <h1 className={Styles.reportTitle}>Goals Analytics</h1>
          <div className={Styles.rowChart}>
            <TotalChart />
            <CompleteChart />
          </div>
          <div className={Styles.rowChart}>
            <CategoryChart />
            <MonthlyChart />
          </div>
        </div>
        <div className={Styles.goalsSection}>
          <RecentGoals />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
