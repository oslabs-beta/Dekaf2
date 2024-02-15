"use client"; //nextjs compiler automatically places this component into javascript bundle
import React from "react";
import { loginWithGithub } from "../login/firebase";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from 'next/navigation';

// Inside your component or function
// const { push } = useRouter();

// Redirect to '/users'

//import styles from './ProductCard.module.css';

const LoginContainer = () => {
  const router = useRouter();
  const loginHandler = async () => {
    const user = loginWithGithub();
    console.log("this is user", await user);
    setTimeout(() => {
      router.push('/');
    }, 1000);
    
    
    // redirect('/users')
    // push('/users');
  };

  return (
    <div className="pb-40 shadow-lg h-full  flex flex-col items-center justify-center w-1/3 z-10 absolute right-0 bg-white ">
      <div className="text-black text-4xl font-bold  mb-10">
        Welcome to DeKaf
      </div>
      <button
        onClick={loginHandler}
        className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded"
      >
        Sign in with Github
      </button>
    </div>
  );
};

export default LoginContainer;
