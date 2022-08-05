import React, { useState, useEffect } from "react";
import Styles from "./charts.module.css";
import API from "../../../../services/utils/API";
import { useDispatch, useSelector } from "react-redux";
import { goalActions } from "../../../../store/goals-slice";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
} from "recharts";

const CompleteChart = () => {
  const dispatch = useDispatch();
  const totalGoals = useSelector((state) => state.goals.totalGoalsArray);
  const [completedGoals, setCompletedGoals] = useState([]);

  useEffect(() => {
    getCompleteGoals();
  }, []);

  const getCompleteGoals = () => {
    let goalType = "completed";
    API.savedGoal(goalType).then((response) => {
      dispatch(goalActions.completedGoals(response.data));
      setCompletedGoals(response.data);
    });
  };
  let completedGoalLength = completedGoals.length;
  let incompletdGoalLength = totalGoals.length - completedGoalLength;
  let data = [
    {
      name: "Completed",
      amt: completedGoalLength,
    },
    {
      name: "Incomplete",
      amt: incompletdGoalLength,
    },
  ];
  return (
    <div className={Styles.chartBox}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={200}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
          maxBarSize={25}
          layout="vertical"
        >
          <XAxis type="number" dataKey="amt"></XAxis>
          <YAxis
            type="category"
            dataKey="name"
            scale="point"
            padding={{ top: 55, bottom: 30 }}
            angle={45}
          ></YAxis>
          <Tooltip formatter={(amt, name) => [amt]}></Tooltip>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="amt" fill="#8884d8">
            <LabelList dataKey="amt" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className={Styles.pieChartLabel}>Total Completed Goals</div>
    </div>
  );
};
export default CompleteChart;
