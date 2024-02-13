'use client'
// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

interface LineChartProps {
    chartData: any;
  }

function LineChart({ chartData }: LineChartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>880,345</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Events"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;