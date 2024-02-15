import React from 'react';
import EnvCard from './EnvCard';
import ClusterCard from './ClusterCard';
import TopicCard from './TopicCard';
import styles from './ActivityOverviews.module.css'
import { useAppSelector } from '@/store/hooks';

const ActivityOverviews = () => {
    
    const environments = useAppSelector((state) => state.environments.data)
    const cluster = useAppSelector((state) => state.clusters.data)
    console.log('this is cluster',cluster)
    
    console.log(environments)
    return (

        <div className={styles.activityOverviews}>

            <div className={styles.overview}>
                Environments
                <EnvCard cardData={environments}/>

            </div>
            <div className={styles.overview}>
                Clusters
                <ClusterCard cardData={cluster}/>
            </div>
            <div className={styles.overview}>
                Topics
                <TopicCard cardData={{this: 'is a placeholder'}}/>
            </div>
            
        </div>
       
    )

}

export default ActivityOverviews