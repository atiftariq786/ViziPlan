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

const MonthlyChart = () => {
  const data = [
    {
      name: "Jan",
      amt: 2400,
    },
    {
      name: "Feb",
      amt: 2210,
    },
    {
      name: "Mar",
      amt: 2290,
    },
    {
      name: "Apr",
      amt: 2000,
    },
    {
      name: "May",
      amt: 2181,
    },
    {
      name: "Jun",
      amt: 2500,
    },
    {
      name: "Jul",
      amt: 2100,
    },
    {
      name: "Aug",
      amt: 2100,
    },
    {
      name: "Sept",
      amt: 2100,
    },
    {
      name: "Oct",
      amt: 2100,
    },
    {
      name: "Nov",
      amt: 2100,
    },
    {
      name: "Dec",
      amt: 2100,
    },
  ];

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
          <Tooltip />
          <Bar dataKey="amt" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default MonthlyChart;
