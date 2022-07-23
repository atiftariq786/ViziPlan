import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  Label,
  ResponsiveContainer,
} from "recharts";
import Styles from "./charts.module.css";

const CategoryChart = () => {
  const totalGoals = useSelector((state) => state.goals.totalGoalsArray);
  let counter = {};

  for (let i = 0; i < totalGoals.length; i++) {
    let groupCategory = totalGoals[i].category;
    if (counter[groupCategory]) {
      counter[groupCategory] += 1;
    } else {
      counter[groupCategory] = 1;
    }
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    { name: "Adventure", value: counter.Adventure },
    { name: "Hiking", value: counter.Hiking },
    { name: "Famliy", value: counter.Family },
    { name: "Traveling", value: counter.Traveling },
    { name: "Cooking", value: counter.Cooking },
    { name: "Self-Improvement", value: counter.SelfImprovement },
    { name: "Health", value: counter.Health },
    { name: "Learning", value: counter.Learning },
    { name: "DIY", value: counter.DIY },
    { name: "Other", value: counter.other },
  ];
  const COLORS = [
    "#0088FE",
    "#FFBB28",
    "#00C49F",
    "#ff7711",
    "#55cc66",
    "#FF8042",
    "#72b4eb",
    "#8464a0",
    "#0a417a",
    "#14d2ff",
  ];

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
    } = props;

    return (
      <g>
        <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill={fill}>
          {Math.floor(percent * 100)}%
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        ></Sector>
      </g>
    );
  };

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className={Styles.chartBox} style={{ fontSize: "14px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          width={200}
          height={200}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            labelLine={false}
            label={false}
            innerRadius={55}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Label></Label>
        </PieChart>
      </ResponsiveContainer>
      <div className={Styles.pieChartLabel}>Goals by Category</div>
    </div>
  );
};
export default CategoryChart;
