import React from "react";
import Styles from "../Dashboard/Dashboard.module.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={Styles.dashboardMainDiv}>
      <img
        style={{ width: "100%", height: "100vh" }}
        src={require("../../../assets/images/dashboard.jpg")}
        alt="ViziPlaning"
      ></img>
      <h1 className={Styles.title}>
        ViziPlaning dashboard coming soon.........! <br />
        <NavLink to="/home" className={Styles.backButton}>
          back
        </NavLink>
      </h1>
    </div>
  );
};
export default Dashboard;
