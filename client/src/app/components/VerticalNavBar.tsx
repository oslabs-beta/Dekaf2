import Link from 'next/link';
import React from 'react';

const VerticalNavBar = () => {

    return (
        // <div className='h-screen '> 
        //     <ul className=" flex-col flex text-black rounded border-2 border-solid border-red-600">
        //       <li className="basis-1/3">
        //         <Link href="/overview">
        //           <p>Overview</p>
        //         </Link>
        //       </li>
              
        //       <li className="basis-1/3">
        //         <Link href="/">
        //           <p>Errors</p>
        //         </Link>
        //       </li>   
        //       <li className="basis-1/3">
        //         <Link href="/">
        //           <p>Actions</p>
        //         </Link>
        //       </li>
        //     </ul>
        // </div>

        <div className='h-screen flex justify-start '>
    <ul className="flex flex-col gap-4 text-black rounded border-2 border-solid border-red-600 p-4 bg-gray-200">
      <li>
        <Link href="/overview">
          <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white">Overview</p>
        </Link>
      </li>
      <li>
        <Link href="/errors">
          <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white">Errors</p>
        </Link>
      </li>
      <li>
        <Link href="/actions">
          <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white">Actions</p>
        </Link>
      </li>
    </ul>
  </div>


// {/* <div className='h-screen flex justify-center items-center bg-gray-100'>
//     <ul className="flex flex-col gap-4 text-black rounded-lg border-2 border-solid border-red-600 p-4 shadow-md bg-white">
//       <li>
//         <Link href="/overview">
//           <p className="cursor-pointer py-3 px-6 rounded-lg bg-red-600 text-white font-semibold text-center hover:bg-red-700 transition-colors duration-300">Overview</p>
//         </Link>
//       </li>
//       <li>
//         <Link href="/errors">
//           <p className="cursor-pointer py-3 px-6 rounded-lg bg-red-600 text-white font-semibold text-center hover:bg-red-700 transition-colors duration-300">Errors</p>
//         </Link>
//       </li>
//       <li>
//         <Link href="/actions">
//           <p className="cursor-pointer py-3 px-6 rounded-lg bg-red-600 text-white font-semibold text-center hover:bg-red-700 transition-colors duration-300">Actions</p>
//         </Link>
//       </li>
//     </ul>
//   </div> */}

    )

}

export default VerticalNavBar