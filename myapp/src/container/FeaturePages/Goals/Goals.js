import React from "react";
import Styles from "../Goals/Goals.module.css";
import { NavLink } from "react-router-dom";

const Goals = () => {
  return (
    <div className={Styles.mainDiv}>
      <img
        style={{ width: "100%", height: "100vh" }}
        src={require("../../../assets/images/goals.jpg")}
        alt="ViziPlaning"
      ></img>
      <h1 className={Styles.title}>
        ViziPlaning goals coming soon.........! <br />
        <NavLink to="/" className={Styles.backButton}>
          back
        </NavLink>
      </h1>
    </div>
  );
};
export default Goals;
