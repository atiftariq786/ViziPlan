import React, { useEffect, useState } from "react";
import Styles from "./charts.module.css";
import API from "../../../../services/utils/API";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AllMonthlyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.allGoalsCreatedAnalytics().then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className={Styles.chartBox} style={{ width: "100%" }}>
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
          <Bar dataKey="completed" stackId="a" fill="#9BC53D" />
          <Bar dataKey="created" stackId="a" fill="#CB48B7" />
        </BarChart>
      </ResponsiveContainer>
      <div className={Styles.pieChartLabel}>Goals by Month For All Users</div>
    </div>
  );
};
export default AllMonthlyChart;
