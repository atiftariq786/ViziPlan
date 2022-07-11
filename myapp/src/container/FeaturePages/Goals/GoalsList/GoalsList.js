import React, { useState } from "react";
import Styles from "./GoalsList.module.css";

const GoalsList = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <div className={Styles.sectionOne}>
        <h1 className={Styles.sectionOneTitle}>Add Goals!</h1>
        <p>
          Use your visionboard
          <br />
          to guide your goal creation
        </p>

        <div className={Styles.sectionOne_subContent}></div>
      </div>
    </div>
  );
};
export default GoalsList;
