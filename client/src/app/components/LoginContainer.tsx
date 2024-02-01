'use client'; //nextjs compiler automatically places this component into javascript bundle
import React from 'react';


//import styles from './ProductCard.module.css';


const LoginContainer = () => {

    return(
        <div className='shadow-lg h-full  flex flex-col items-center  w-1/3 z-10 absolute right-0 bg-white '>
           <div className='text-black text-3xl font-bold mt-64 mb-10'>Welcome to DeKaf</div>
           <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Sign in with GitHub</button>
        </div>
       
    );

}

export default LoginContainer;