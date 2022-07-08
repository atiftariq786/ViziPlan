import React from "react";
import Styles from "./AddGoal.module.css";
import { NavLink } from "react-router-dom";

const AddGoal = () => {
  return (
    <div className={Styles.goalsMainDiv}>
      <img
        style={{ width: "100%", height: "100vh" }}
        src={require("../../../assets/images/goals.jpg")}
        alt="ViziPlaning"
      ></img>
      <h1 className={Styles.title}>
        ViziPlaning goals coming soon.........! <br />
        <NavLink to="/home" className={Styles.backButton}>
          back
        </NavLink>
      </h1>
    </div>
  );
};
export default AddGoal;
