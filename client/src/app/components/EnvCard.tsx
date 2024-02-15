import React from "react";

import styles from "./EnvCard.module.css";

interface cardData {
  cardData: any;
}

const EnvCard = ({ cardData }: cardData) => {
  const elements = [];
  for (let i = 0; i < cardData.length; i++) {
    let date = new Date(cardData[i].metadata.updated_at);
    let readableTimestamp = date.toLocaleString("en-US", { timeZone: "UTC" });

    elements.push(
      <li className={styles.listItem}>
        <div className={styles.displayName}>{cardData[i].display_name} </div>
        <div className={styles.lastUpdated}>
          Last Updated: {readableTimestamp}
        </div>
      </li>
    );
  }

  return <ul className={styles.activityList}>{elements}</ul>;
};

export default EnvCard;
