// import React from 'react';
import Image from "next/image";
import LoginContainer from "../components/LoginContainer";
import VideoBackground from "../components/VideoBackground";
import loginBackground from "../public/login-background-static.png";
import { loginWithGithub } from "../login/firebase";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  loginWithGithub;
  return (
    <div className="overflow-hidden">
      <Image
        className="absolute"
        src="/login-background2.jpg"
        //   width={500}
        //   height={500}
        alt="Cannot load Image"
        fill={true}
        sizes="100vw"
        //   style={styles.backgroundImg}
      />
      {/* <VideoBackground/> */}
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
// 'use client'; //nextjs compiler automatically places this component into javascript bundle
// import Link from 'next/link';
// import React from 'react';
// //import styles from './ProductCard.module.css';

// const Login = () => {

//     return (
//         <div className='p-5 my-5 bg-sky-400 text-white'>
//             <button onClick={ () => console.log('Clicked')}>LoginPage</button>
//             <Link href='/users' className='text-black'> Users </Link>
//         </div>
//     )

// }

// export default Login
