'use client'
import React from 'react';
import { BarChart } from './ClusterErrorsChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './SmallCharts.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const donutData = {
  labels: [ 'Success','Fail', 'Pending'],
  datasets: [
    {
      label: '# of Messages',
      data: [55,12, 3],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

const barData = {
       
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Messages',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }


const SmallCharts = () => {
    
    return (

        <div className={styles.smallCharts}>
            <div className={styles.leftChart}>
                Environment Errors
                <Doughnut data={donutData} />
            </div>
            <div className={styles.rightChart}>
                Cluster Errors
                <BarChart chartData={barData}/>
            </div>
        </div>
       
    )

}

export default SmallCharts