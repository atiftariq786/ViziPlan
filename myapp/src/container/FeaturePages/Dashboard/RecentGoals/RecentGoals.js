import React, { useState, useEffect } from "react";
import Styles from "./RecentGoals.module.css";
import API from "../../../../services/utils/API";

const RecentGoals = () => {
  const [recentGoalsArray, setRecentGoalsArray] = useState([]);

  useEffect(() => {
    getRecentdGoals();
  }, []);
  //================================Handler Functions=====================================
  const getRecentdGoals = () => {
    let goalType = "incomplete";
    API.savedGoal(goalType).then((response) => {
      //console.log(response, "get all incomplete goal");
      setRecentGoalsArray(response.data);
    });
  };

  let showRecentGoals = recentGoalsArray.map((data) => {
    const createdAtDate = new Date(data.createdAt);
    return (
      <div className={Styles.communityActivitiesText}>
        <div className={Styles.activitiesTextOnly}>
          <span>{data.heading}</span>
        </div>

        <div className={Styles.dateTime}>
          <p>{createdAtDate.toLocaleString()}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className={Styles.recentGoalsTitle}>Recent Goals</h1>
      <div>{showRecentGoals}</div>
    </div>
  );
};
export default RecentGoals;
