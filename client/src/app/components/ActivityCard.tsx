import React from "react"

import styles from './ActivityCard.module.css'

interface cardData {
    cardData: any;
  }

const ActivityCard = ({ cardData }: cardData) => {
    const elements = [];
    for (let i = 0; i < cardData.length; i++){
       elements.push(<li className={styles.listItem}>{cardData[i].display_name} </li>)
    }

    return (
      <ul className={styles.activityList}>

     {elements}

      </ul>
    )

}

export default ActivityCard;