import React from 'react';
import Image from 'next/image'
import LoginContainer from '../components/LoginContainer';
import VideoBackground from '../components/VideoBackground';
import loginBackground from '../public/login-background-static.png'

import styles from './LoginPage.module.css';



const LoginPage = () => {

    return (

        <div className='overflow-hidden'> 
            <Image
              className='absolute'
              src='/login-background-static.png'
            //   width={500}
            //   height={500}
              alt="Picture of the author"
              fill={true}
              sizes='100vw'
            //   style={styles.backgroundImg}
           />
           {/* <VideoBackground/> */}
           <LoginContainer/>

            
        </div>
    )

}

export default LoginPage
