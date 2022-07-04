import React from "react";
import Styles from "../Demo/Demo.module.css";
import { NavLink } from "react-router-dom";

const AppDemo = () => {
  return (
    <div className={Styles.demoMainDiv}>
      <img
        style={{ width: "100%", height: "100vh" }}
        src={require("../../../assets/images/skydive.jpg")}
        alt="ViziPlaning"
      ></img>
      <h1 className={Styles.title}>
        ViziPlaning demo coming soon.........! <br />
        <NavLink to="/" className={Styles.backButton}>
          back
        </NavLink>
      </h1>
    </div>
  );
};
export default AppDemo;
