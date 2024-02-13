import React from 'react';

import styles from './Sidebar.module.css';


const Sidebar = () => {

    return (

        <div className={styles.sidebar}> 
        
            <div className={styles.navigationBox}>

            <h2 className={styles.home}>Home</h2>
                <div className={styles.link}>
                    <div className={styles.linkText}>
                        Dashboard
                    </div>
                </div>
                <div className={styles.link}>
                    <div className={styles.linkText}>
                        Settings
                    </div>
                </div>
                <div className={styles.link}>
                    <div className={styles.linkText}>
                        Errors
                    </div>
                </div>
                <div className={styles.link}>
                    <div className={styles.linkText}>
                        Actions
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Sidebar