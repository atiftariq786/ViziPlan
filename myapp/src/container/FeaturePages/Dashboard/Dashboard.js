import React from "react";
import Styles from "../Dashboard/Dashboard.module.css";
import Button from "../../../../src/components/Button/Button";
//import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={Styles.dashboardMainDiv}>
      <div className={Styles.sectionOne}>
        <h1 className={Styles.sectionOneTitle}>Sample Goals!</h1>

        <div className={Styles.sectionOne_subContent}>
          <div className={Styles.sampleGoalDiv}>
            <h1>g-1</h1>
          </div>
          <div className={Styles.sampleGoalDiv}>
            <h1>g-2</h1>
          </div>
          <div className={Styles.sampleGoalDiv}>
            <h1>g-3</h1>
          </div>
          <div className={Styles.sampleGoalDiv}>
            <h1>g-4</h1>
          </div>
        </div>
      </div>
      <div className={Styles.sectionTwo}>
        <div className={Styles.sectionTwo_subContent}>
          <div className={Styles.inspirationDiv}>
            <img
              style={{ width: "130px", height: "130px" }}
              src={require("../../../assets/images/vision.jpg")}
              alt="image_icon"
            ></img>
            <p>Inspiration</p>
          </div>
          <div className={Styles.userPicDiv}>
            <img
              style={{ width: "130px", height: "130px" }}
              src={require("../../../assets/images/panda.png")}
              alt="image_icon"
            ></img>
            <p className={Styles.userName}>Hello! Tomy</p>
          </div>
        </div>
        <div className={Styles.reports}>
          <h1>Reports</h1>
          <p>
            You have no goals yet! <br />
            Let set some!
          </p>

          <Button className={Styles.continueBtn}>Create Goals</Button>
        </div>
      </div>
      {/* <h1 className={Styles.title}>
        ViziPlaning dashboard coming soon.........! <br />
        <NavLink to="/home" className={Styles.backButton}>
          back
        </NavLink>
      </h1> */}
    </div>
  );
};
export default Dashboard;
