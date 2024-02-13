"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchEnvironments,
  selectAllEnvironments,
} from "./slices/environmentsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const environments = useSelector(selectAllEnvironments);
  useEffect(() => {
    if (environments.status === "idle") {
      dispatch(fetchEnvironments());
    }
    if (environments.status === "succeeded") {
      console.log(`environments `, environments);
    }
    // let envs = useSelector(selectAllEnvironments);
    // console.lo
  }, [environments.status]);
  return (
    <main>
      {/* <h1>Log In</h1> */}
      {/* <Link href='/users'> Users </Link>
      <ProductCard /> */}
      <Header />
      <MainContainer />
    </main>
  );
}
