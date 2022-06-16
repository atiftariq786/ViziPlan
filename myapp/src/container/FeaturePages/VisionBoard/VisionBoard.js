import React from "react";
import Styles from "../VisionBoard/VisionBoard.module.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={Styles.mainDiv}>
      <img
        style={{ width: "100%", height: "100vh" }}
        src={require("../../../assets/images/vision.jpg")}
        alt="ViziPlaning"
      ></img>
      <h1 className={Styles.title}>
        ViziPlaning vision board coming soon.........! <br />
        <NavLink to="/" className={Styles.backButton}>
          back
        </NavLink>
      </h1>
    </div>
  );
};
export default Dashboard;
