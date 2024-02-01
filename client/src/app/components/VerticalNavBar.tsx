import Link from 'next/link';
import React from 'react';

const VerticalNavBar = () => {

    return (
        <div> 
            <ul className=" h-screen flex-col flex text-black rounded border-2 border-solid border-red-600">
              <li className="basis-1/3">
                <Link href="/overview">
                  <p>Overview</p>
                </Link>
              </li>
              
              <li className="basis-1/3">
                <Link href="/">
                  <p>Errors</p>
                </Link>
              </li>   
              <li className="basis-1/3">
                <Link href="/">
                  <p>Actions</p>
                </Link>
              </li>
            </ul>
        </div>

    )

}

export default VerticalNavBar