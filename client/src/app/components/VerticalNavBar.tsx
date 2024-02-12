import Link from "next/link";
import React from "react";

const VerticalNavBar = () => {
  return (
    <div className="h-screen flex justify-start ">
      <ul className="flex flex-col gap-4 text-black rounded border-2 border-solid border-red-600 p-4 bg-gray-200">
        <li>
          <Link href="/overview">
            <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white">
              Overview
            </p>
          </Link>
        </li>
        <li>
          <Link href="/errors">
            <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white">
              Errors
            </p>
          </Link>
        </li>
        <li>
          <Link href="/actions">
            <p className="block py-2 px-4 rounded hover:bg-red-600 hover:text-white">
              Actions
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNavBar;
