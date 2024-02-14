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
import { fetchClusters, selectAllClusters } from "./slices/clustersSlice";
import { fetchTopics, selectAllTopics } from "./slices/topicsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function Home() {
  const dispatch = useAppDispatch();

  //Environments datafetching
  const environments = useAppSelector(selectAllEnvironments);
  const clusters = useAppSelector(selectAllClusters);
  const topics = useAppSelector(selectAllTopics);

  useEffect(() => {
    if (environments.status === "idle") {
      dispatch(fetchEnvironments());
    }
  }, []);
  useEffect(() => {
    if (environments.status === "succeeded") {
      console.log(`environments `, environments);
      dispatch(fetchClusters());
    }
  }, [environments.status]);

  useEffect(() => {
    if (clusters.status === "succeeded") {
      dispatch(fetchTopics());
    }
  }, [clusters.status]);

  // //Clusters & topics datafetching
  // const clusters = useSelector(selectAllClusters);
  // useEffect(() => {
  //   if (clusters.status === "idle") {
  //     dispatch(fetchClusters());
  //   }
  //   if (clusters.status === "succeeded") {
  //     console.log(`clusters `, clusters);
  //   }
  // }, [clusters.status]);

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
