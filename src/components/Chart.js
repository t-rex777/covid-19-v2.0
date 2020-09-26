import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { fetchAPI } from "./../api/index";
import "./chart.css";
import { restrictData } from "./utility";

function Chart() {
  const [dailyData, setDailyData] = useState([]);

  const fetchDailyData = () => {
    fetchAPI().then(({ cases_time_series }) => {
      const restrictedData = restrictData(cases_time_series);
      setDailyData(restrictedData);
    });
  };

  useEffect(() => {
    fetchDailyData();
  }, []);

  return (
    <div className="chart">
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),

          datasets: [
            {
              data: dailyData.map(({ dailyconfirmed }) => dailyconfirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map(({ totaldeceased }) => totaldeceased),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
            {
              data: dailyData.map(({ totalrecovered }) => totalrecovered),
              hidden : true ,
              label: "Recovered",
              borderColor: "green",
              backgroundColor: "rgba(123, 239, 178, 1)",
              fill: true,
            }
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default Chart;
