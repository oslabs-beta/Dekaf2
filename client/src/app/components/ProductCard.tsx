'use client'; //nextjs compiler automatically places this component into javascript bundle
import React from 'react';

//import styles from './ProductCard.module.css';


const ProductCard = () => {

    return (

        <div className='p-5 my-5 bg-sky-400 text-white'> 

            <button onClick={ () => console.log('Clicked')}>ProductCard</button>
        </div>
    )

}

export default ProductCard