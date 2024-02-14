import React from 'react';

import styles from './Sidebar.module.css';
import Image from 'next/image';



const Sidebar = () => {

    return (

        <div className={styles.sidebar}> 
        
            <div className={styles.navigationBox}>

            <h2 className={styles.home}>Home</h2>
                <div className={styles.link}>
                    <div>
                    <Image alt='Dashboard' src="/Category.svg" height={24} width={24} />
                    </div>
                    <div className={styles.linkText}>
                        Dashboard
                    </div>
                    <div>
                    <Image alt='Dashboard Arrow' src="/ic_Chevron.svg" height={24} width={24} />
                    </div>
                </div>
                <div className={styles.link}>
                    <div>
                        <Image alt='Settings' src="/Filter.svg" height={24} width={24} />
                    </div>
                    <div className={styles.linkText}>
                        Settings
                    </div>
                    <div>
                    <Image alt='Settings Arrow' src="/ic_Chevron.svg" height={24} width={24} />
                    </div>
                </div>
                <div className={styles.link}>
                    <div>
                        <Image alt='Errors' src="/Info Circle.svg" height={24} width={24} />
                    </div>
                    <div className={styles.linkText}>
                        Errors
                    </div>
                    <div>
                        <Image alt='Errors Arrow' src="/ic_Chevron.svg" height={24} width={24} />
                    </div>
                </div>
                <div className={styles.link}>
                    <div>
                        <Image alt='Actions' src="/Ticket Star.svg" height={24} width={24} />
                    </div>
                    <div className={styles.linkText}>
                        Actions
                    </div>
                    <div>
                        <Image alt='Actions Arrow' src="/ic_Chevron.svg" height={24} width={24} />
                    </div>
                </div>


            </div>
        </div>
    )

}

export default Sidebar