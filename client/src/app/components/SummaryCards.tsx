import React from 'react';


import styles from './SummaryCards.module.css'
import Image from 'next/image';

const SummaryCards = () => {

    return (

        <div className={styles.summaryCards}>
            
            
            <div className={styles.card}>
                <div>
                    <Image alt='Topics' src="/Group 386.svg" height={68} width={68} />
                </div>
                <div className={styles.insideCard}>
                    <div className={styles.cardText}>
                        Total Topics
                    </div>
                    <div className={styles.cardValue}>
                        56
                    </div>
                </div>
            </div>
            

            <div className={styles.card}>
                <div>
                    <Image alt='Events' src="/Group 386 (1).svg" height={68} width={68} />
                </div>
                <div className={styles.insideCard}>
                    <div className={styles.cardText}>
                        Total Events
                    </div>
                    <div className={styles.cardValue}>
                        170
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div>
                    <Image alt='Errors' src="/Group 386 (2).svg" height={68} width={68} />
                </div>
                <div className={styles.insideCard}>
                    <div className={styles.cardText}>
                        Total Errors
                    </div>
                    <div className={styles.cardValue}>
                        35
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div>
                    <Image alt='Non-Treated' src="/Group 386 (3).svg" height={68} width={68} />
                </div>
                <div className={styles.insideCard}>
                    <div className={styles.cardText}>
                        Non-Treated
                    </div>
                    <div className={styles.cardValue}>
                        18
                    </div>
                </div>
            </div>
            
        </div>
       
    )

}

export default SummaryCards