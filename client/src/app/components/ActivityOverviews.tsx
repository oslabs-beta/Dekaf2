import React from 'react';
import ActivityCard from './ActivityCard';
import styles from './ActivityOverviews.module.css'
import { useAppSelector } from '@/store/hooks';

const dummyEnv = ['Environment1', 'Environment2', 'Environment3', 'Environment4']

const dummyClusters = ['Cluster1', 'Cluster2', 'Cluster3', 'Cluster4']

const dummyTopics = ['Topic1', 'Topic2', 'Topic3', 'Topic4']

const ActivityOverviews = () => {
    
    const environments = useAppSelector((state) => state.environments.data)
    
    console.log(environments)
    return (

        <div className={styles.activityOverviews}>

            <div className={styles.overview}>
                Environments
                <ActivityCard cardData={environments}/>

            </div>
            <div className={styles.overview}>
                Clusters
                <ActivityCard cardData={dummyClusters}/>
            </div>
            <div className={styles.overview}>
                Topics
                <ActivityCard cardData={dummyTopics}/>
            </div>
            
        </div>
       
    )

}

export default ActivityOverviews