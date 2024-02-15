import React, { useState } from 'react';
import LineChart from "../components/LineChart";
import styles from './MainChart.module.css'
import { useAppSelector } from '@/store/hooks';

const MainChart = () => {

    const messages = useAppSelector((state) => state.messages);

    console.log(messages);

    const chartData = {
        
    labels: [ 'July', 'August', 'September','October','November','December','January', 'February'],
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