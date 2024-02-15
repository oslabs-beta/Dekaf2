import React from "react"

import styles from './TopicCard.module.css'

interface cardData {
    cardData: any;
  }




const TopicCard = ({ cardData }: cardData) => {
    const dummyData = [{cluster: 'cluster_dekaf', display_name: 'processed_orders', region: 'us-east1'}, {cluster: 'cluster_dekaf',display_name: 'shipments', region: 'us-east1'}, {cluster: 'cluster_dekaf',display_name: 'customers', region: 'us-east1'}, {cluster: 'cluster_dekaf',display_name: 'providers', region: 'us-east1'}, {cluster: 'cluster_dekaf', display_name: 'feedback', region: 'us-east1'}, {cluster: 'cluster_dekaf',display_name: 'analytics', region: 'us-east1'}, {cluster: 'cluster_dekaf',display_name: 'inventory', region: 'us-east1'}, {cluster: 'cluster_dekaf',display_name: 'payments', region: 'us-east1'}]

    const elements = [];
    for (let i = 0; i < dummyData.length; i++){
       
       elements.push(
       <li className={styles.listItem}><div className={styles.displayName}>{dummyData[i].display_name} </div><div className={styles.lastUpdated}>Cluster: {dummyData[i].cluster} | Region: {dummyData[i].region}</div></li>)
    }

    return (
      <ul className={styles.activityList}>

     {elements}

      </ul>
    )

}

export default TopicCard;