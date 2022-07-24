import React, { useState, useEffect } from "react";
import Styles from "./RecentGoals.module.css";
import API from "../../../../services/utils/API";

const RecentGoals = () => {
  const [recentGoalsArray, setRecentGoalsArray] = useState([]);

  useEffect(() => {
    getRecentdGoals();
  }, []);

  const getRecentdGoals = () => {
    let goalType = "incomplete";

    API.savedGoal(goalType).then((response) => {
      setRecentGoalsArray(response.data.slice(0, 10));
    });
  };

  let showRecentGoals = recentGoalsArray.map((data) => {
    const createdAtDate = new Date(data.createdAt);
    return (
      <div className={Styles.goal} key={data.id}>
        <div className={Styles.heading}>
          <span>{data.heading.substring(0, 90)}</span>
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
      <div className={Styles.goals}>{showRecentGoals}</div>
    </div>
  );
};
export default RecentGoals;
