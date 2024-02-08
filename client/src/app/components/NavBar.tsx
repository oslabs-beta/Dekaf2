import Link from 'next/link';
import React from 'react';
import VerticalNavBar from './VerticalNavBar';
import CounterComponent from './CounterComponent';
const NavBar = () => {

    return (


 <div className="hidden w-full md:block md:w-auto " id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
        
      <li className="flex-1">
            <Link href="/">
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dekaf</p>
            </Link>
      </li>
      <li className="flex-1">
            <Link href="/users">
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Another Link</p>
            </Link>
        </li>

        <li className="flex-1">
            <Link href="/settings">
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Settings</p>
            </Link>
         </li>
        
      </ul>
      <div className='flex rounded border-2 border-solid border-teal-500'>
        <VerticalNavBar/>
        </div>
        <div >
        <CounterComponent/>
        </div>
      </div> 


    )

}

export default NavBar