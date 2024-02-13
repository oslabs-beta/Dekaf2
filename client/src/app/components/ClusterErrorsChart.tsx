// components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface BarChartProps {
    chartData: any;
  }
export const BarChart = ({ chartData }: BarChartProps) => {

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Cluster Errors</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Wow you have so many!"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};