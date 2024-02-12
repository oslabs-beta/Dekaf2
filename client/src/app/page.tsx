import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import MainContainer from "./components/MainContainer";

export default function Home() {
  return (
    <main>

      <h1>Log In</h1>
      {/* <Link href='/users'> Users </Link>
      <ProductCard /> */}
      <MainContainer />
    </main>
  
  );
}
