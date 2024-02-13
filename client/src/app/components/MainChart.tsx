import React, { useState } from 'react';
import LineChart from "../components/LineChart";
import styles from './MainChart.module.css'

const MainChart = () => {
    const chartData = {
       
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40, 77],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
}
    

    return (

        <div className={styles.mainChart}>
            <LineChart chartData={chartData} />
        </div>
       
    )

}

export default MainChart