import React from 'react';

import styles from './ActivityOverviews.module.css'


const ActivityOverviews = () => {

    return (

        <div className={styles.activityOverviews}>

            <div className={styles.overview}>
                Environments
            </div>
            <div className={styles.overview}>
                Clusters
            </div>
            <div className={styles.overview}>
                Topics
            </div>
            
        </div>
       
    )

}

export default ActivityOverviews