import React from "react"

import styles from './ClusterCard.module.css'

interface cardData {
    cardData: any;
  }

const ClusterCard = ({ cardData }: cardData) => {
    const elements = [];
    for (let i = 0; i < cardData.length; i++){
      let date = new Date(cardData[i].metadata.updated_at);
      let readableTimestamp = date.toLocaleString('en-US', { timeZone: 'UTC' });
       
       elements.push(
       <li className={styles.listItem}>
        
     <div className={styles.displayName}>{cardData[i].spec.display_name} </div><div className={styles.lastUpdated}>Region: {cardData[i].spec.region} | Last Updated: {readableTimestamp}</div></li>)
    }

    return (
      <ul className={styles.activityList}>

     {elements}

      </ul>
    )

}

export default ClusterCard;