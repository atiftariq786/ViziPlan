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
  const completedGoals = useSelector(
    (state) => state.goals.completedGoalsArray
  );
  //console.log(completedGoals, "Completed goals monthly chart");

  const d = new Date();
  d.setFullYear(d.getFullYear());
  d.setMonth(0);
  d.setDate(1);

  let filteredGoalsDate = completedGoals.filter(
    (goal) => new Date(goal.completedAt) >= d
  );
  console.log(filteredGoalsDate, "Result filtered array");

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
    counter[months[i]] = 0;
  }

  for (let i = 0; i < filteredGoalsDate.length; i++) {
    let date = new Date(filteredGoalsDate[i].completedAt);
    let monthNum = date.getMonth();
    let month = months[monthNum];

    console.log(month, "Result for month");
    if (counter[month]) {
      counter[month] += 1;
    } else {
      counter[month] = 1;
    }
  }
  console.log(counter, "Result of counter in month chart");

  const data = [];

  Object.entries(counter).forEach(([key, value]) => {
    data.push({ name: key, amt: value });
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
            bottom: 0,
          }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(amt, name) => [amt]} />
          <Bar dataKey="amt" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className={Styles.pieChartLabel}>Goals by Month()</div>
    </div>
  );
};
export default MonthlyChart;
