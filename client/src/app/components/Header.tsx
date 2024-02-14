import React from 'react';

import styles from './Header.module.css'

const Header = () => {

    return (

        <div className={styles.header}>
            <img className={styles.logo} src="/dekaf-high-resolution-logo-transparent.png" alt="" />

            <div className={styles.userInfo}> User Info</div>
           
            
        </div>
       
    )

}

export default Header