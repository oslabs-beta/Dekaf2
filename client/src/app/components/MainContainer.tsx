import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import styles from './MainContainer.module.css'

const MainContainer = () => {

    return (

        <div className={styles.mainContainer}>
            <Sidebar />
            <Dashboard />
        </div>
       
    )

}

export default MainContainer