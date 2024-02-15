// components/BarChart.js
import React from "react";
import styles from './Charts.module.css'
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
      <h2 style={{ textAlign: "center" }}></h2>
      <Bar
        className={styles.barChart}
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              // text: "Wow you have so many!"
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