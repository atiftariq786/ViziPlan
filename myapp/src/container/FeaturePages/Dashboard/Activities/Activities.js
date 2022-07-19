import React, { useState, useEffect } from "react";
import Styles from "./Activities.module.css";
import API from "../../../../services/utils/API";

const Activities = () => {
  const [activitiesArray, setActivitiesArray] = useState([]);
  useEffect(() => {
    API.getActivities().then((response) => {
      console.log(response, "get all activities");
      setActivitiesArray(response.data);
    });
  }, []);
  console.log(activitiesArray, "activities array state data");
  let showActivities = activitiesArray.map((data) => {
    return (
      <div className={Styles.communityActivitiesText}>
        <div className={Styles.activitiesTextOnly}>
          <span className={Styles.activitiesName}>{data.firstname} </span>{" "}
          {data.action} a new goal{" "}
          <span className={Styles.activitiesGoalHeading}>
            {data.goalHeading}
          </span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        <h1 className={Styles.sectionOneTitle}>Community activities!</h1>
      </div>
      <div>{showActivities}</div>
    </div>
  );
};
export default Activities;
