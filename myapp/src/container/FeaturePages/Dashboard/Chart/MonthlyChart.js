import React from "react";
//import Button from "../../../../components/Button/Button";
import Styles from "./charts.module.css";
//import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const MonthlyChart = () => {
  const allGoals = useSelector((state) => state.goals.totalGoalsArray);
  //console.log(completedGoals, "Completed goals monthly chart");

  const d = new Date();
  d.setFullYear(d.getFullYear());
  d.setMonth(0);
  d.setDate(1);

  let filteredGoalsDateForCompletedAt = allGoals.filter(
    (goal) => new Date(goal.completedAt) >= d
  );
  let filteredGoalsDateForCreatedAt = allGoals.filter(
    (goal) => new Date(goal.createdAt) >= d
  );
  console.log(filteredGoalsDateForCompletedAt, "Result filtered array");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let counter = {};
  for (let i = 0; i < months.length; i++) {
    counter[months[i]] = { completed: 0, created: 0 };
  }

  for (let i = 0; i < filteredGoalsDateForCompletedAt.length; i++) {
    let date = new Date(filteredGoalsDateForCompletedAt[i].completedAt);
    let monthNum = date.getMonth();
    let month = months[monthNum];

    console.log(month, "Result for month");
    if (counter[month]) {
      counter[month].completed += 1;
    } else {
      counter[month].completed = 1;
    }
  }

  for (let i = 0; i < filteredGoalsDateForCreatedAt.length; i++) {
    let date = new Date(filteredGoalsDateForCreatedAt[i].createdAt);
    let monthNum = date.getMonth();
    let month = months[monthNum];

    console.log(month, "Result for month");
    if (counter[month]) {
      counter[month].created += 1;
    } else {
      counter[month].created = 1;
    }
  }
  console.log(counter, "Result of counter in month chart");

  const data = [];

  Object.entries(counter).forEach(([key, value]) => {
    data.push({
      name: key,
      completed: value.completed,
      created: value.created,
    });
  });

  return (
    <div className={Styles.chartBox}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={520}
          height={250}
          data={data}
          margin={{
            top: 15,
            right: 10,
            left: -15,
            bottom: 5,
          }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" stackId="a" fill="#204B57" />
          <Bar dataKey="created" stackId="a" fill="#ECC30B" />
        </BarChart>
      </ResponsiveContainer>
      <div className={Styles.pieChartLabel}>Your Goals by Month</div>
    </div>
  );
};
export default MonthlyChart;
