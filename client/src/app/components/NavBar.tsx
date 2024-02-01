import Link from 'next/link';
import React from 'react';
import VerticalNavBar from './VerticalNavBar';

const NavBar = () => {

    return (
        <div> 
            <ul className=" flex-row flex text-black rounded border-2 border-solid border-black">
              <li className="basis-1/3">
                <Link href="/">
                  <p>Dekaf</p>
                </Link>
              </li>
              
              <li className="basis-1/3">
                <Link href="/users">
                  <p>Another Link</p>
                </Link>
              </li>

              <li className="basis-1/3">
                <Link href="/services">
                  <p>Settings</p>
                </Link>
              </li>
            </ul>
            <div className='flex rounded border-2 border-solid border-teal-500'>
                <VerticalNavBar/>
            </div>
            
        </div>
    )

}

export default NavBar