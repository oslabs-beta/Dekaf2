import React from 'react';

import SummaryCards from './SummaryCards';
import MainChart from './MainChart';

import styles from './Dashboard.module.css';

const Dashboard = () => {

    return (

        <div className={styles.dashboard}>
            <div className={styles.header}>

                <div className={styles.headerBox}>
                    <div className={styles.headerBigText}>
                        Hello Cheney !
                    </div>
                    <div className={styles.headerSmallText}>
                        We are on a mission to help developers like you to maintain resilient Kafka Applications
                    </div>
                </div>
            
            </div>

            <div>
                <SummaryCards />
            </div>

            <div>
                <MainChart />
            </div>
        </div>
       
    )

}

export default Dashboard