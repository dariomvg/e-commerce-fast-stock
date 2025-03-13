"use client";
import { SectionProducts } from "@/components/SectionProducts";
import { SectionFilters } from "@/components/SectionFilters";
import { useProducts } from "@/hooks/useProducts";
import { Slider } from "@/components/Slider";
import "../styles/index.css";
import { Loader } from "@/components/Loader";

export default function Home() {
  const { findProduct, categories, refreshProducts, filteredProducts, filters, setFilters, message } = useProducts(undefined);

  return (
    <main className="main">
      {filteredProducts.length > 0 && categories.length > 0 ? (
        <>
          <section className="section-main" id="main">
            <h1 className="title-main">Fast-stock</h1>
            <Slider products={filteredProducts.slice(0, 5)} />
          </section>
          <section className="section-products">
            <SectionFilters
              categories={categories}
              findProduct={findProduct}
              products={filteredProducts}
              refreshProducts={refreshProducts}
              filters={filters}
              setFilters={setFilters}
              message={message}
            />
            <SectionProducts
              products={filteredProducts}
              
            />
          </section>
          <footer className="footer">
            <p className="title-footer">Fast-stock</p>
            <p className="copyright-footer">© 2025 Fast-stock</p>
          </footer>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
