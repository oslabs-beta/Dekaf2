import Link from 'next/link';
import React from 'react';
import VerticalNavBar from './VerticalNavBar';
import CounterComponent from './CounterComponent';
const NavBar = () => {

    return (
        // <div> 
        //     <ul className=" flex-row flex text-black rounded border-2 border-solid border-black">
        //       <li className="basis-1/3">
        //         <Link href="/">
        //           <p>Dekaf</p>
        //         </Link>
        //       </li>
              
        //       <li className="basis-1/3">
        //         <Link href="/users">
        //           <p>Another Link</p>
        //         </Link>
        //       </li>

        //       <li className="basis-1/3">
        //         <Link href="/services">
        //           <p>Settings</p>
        //         </Link>
        //       </li>
        //     </ul>
        //     <div className='flex rounded border-2 border-solid border-teal-500'>
        //         <VerticalNavBar/>
        //     </div>
            
        // </div>


    // <div>
    //     <div> 
    //     <ul className="flex flex-row justify-between items-center text-black rounded-md border-2 border-solid border-black bg-gray-200 p-4 shadow-md">
    //         <li className="flex-1">
    //         <Link href="/">
    //             <p className="text-center block py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white">Dekaf</p>
    //         </Link>
    //         </li>
            
    //         <li className="flex-1">
    //         <Link href="/users">
    //             <p className="text-center block py-2 px-4 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition-colors duration-300">Another Link</p>
    //         </Link>
    //         </li>

    //         <li className="flex-1">
    //         <Link href="/settings">
    //             <p className="text-center block py-2 px-4 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition-colors duration-300">Settings</p>
    //         </Link>
    //         </li>
    //     </ul>
    //     </div>
        
    //     <div className='flex rounded border-2 border-solid border-teal-500'>
    //     <VerticalNavBar/>
    //     </div>
    // </div>


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