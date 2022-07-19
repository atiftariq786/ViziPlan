import React from "react";
//import Button from "../../../../components/Button/Button";
import Styles from "./charts.module.css";
import { NavLink } from "react-router-dom";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const CompleteChart = () => {
  const data = [
    {
      name: "Completed",
      amt: 2400,
    },
    {
      name: "Incomplete",
      amt: 2210,
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
          barSize={25}
          layout="vertical"
        >
          <XAxis type="number" dataKey="amt" />
          <YAxis
            type="category"
            dataKey="name"
            scale="point"
            padding={{ top: 55, bottom: 30 }}
            angle={45}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="amt" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CompleteChart;
