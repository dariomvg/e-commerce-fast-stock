import { Loader } from "@/components/Loader";
import "../styles/index.css";
import SectionProducts from "@/components/SectionProducts";
import { getProducts } from "@/libs/requests";
import Slider from "@/components/Slider";
import { Suspense } from "react";
import { Header } from "@/components/Header";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="main">
      <Header />
      <section className="section-main" id="main">
        <h1 className="title-main">Fast-stock</h1>
        <Suspense fallback={<Loader />}>
          <Slider products={products.products.slice(0, 5)} />
        </Suspense>
      </section>
      <SectionProducts />
    </main>
  );
}
