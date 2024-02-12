import React from 'react';


import styles from './SummaryCards.module.css'

const SummaryCards = () => {

    return (

        <div className={styles.summaryCards}>

            <div className={styles.card}>
                <div className={styles.cardText}>
                    Total Topics
                </div>
                <div className={styles.cardValue}>
                    56
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardText}>
                    Total Events
                </div>
                <div className={styles.cardValue}>
                    170
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardText}>
                    Total Errors
                </div>
                <div className={styles.cardValue}>
                    35
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardText}>
                    Non-Treated
                </div>
                <div className={styles.cardValue}>
                    18
                </div>
            </div>
            
        </div>
       
    )

}

export default SummaryCards