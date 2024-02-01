'use client'; //nextjs compiler automatically places this component into javascript bundle
import Link from 'next/link';
import React from 'react';
//import styles from './ProductCard.module.css';

const Login = () => {

    return (
        <div className='p-5 my-5 bg-sky-400 text-white'> 
            <button onClick={ () => console.log('Clicked')}>LoginPage</button>
            <Link href='/users' className='text-black'> Users </Link>
        </div>
    )

}

export default Login