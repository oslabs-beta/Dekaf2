'use client'; //nextjs compiler automatically places this component into javascript bundle
import React from 'react';

const ProductCard = () => {

    return (
        <div>
            <button onClick={ () => console.log('Clicked')}>ProductCard</button>
        </div>
    )

}

export default ProductCard