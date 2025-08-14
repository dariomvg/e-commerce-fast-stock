"use client";
import { useProducts } from "@/hooks/useProducts";
import { Loader } from "@/components/Loader";
import dynamic from "next/dynamic";
import "@/styles/section-products.css";

const ListProducts = dynamic(() => import("@/components/ListProducts"), {
  loading: () => <Loader />,
  ssr: false,
});

const SectionFilters = dynamic(() => import("@/components/SectionFilters"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function SectionProducts() {
  const {
    findProduct,
    categories,
    refreshProducts,
    filteredProducts,
    filters,
    message,
    changeFilterCategory,
    changeFilterPrice,
    productsFound
  } = useProducts(undefined);
  return (
    <section className="section-products">
      <SectionFilters
        categories={categories}
        findProduct={findProduct}
        quantityProducts={filteredProducts.length}
        refreshProducts={refreshProducts}
        filters={filters}
        changeFilterCategory={changeFilterCategory}
        changeFilterPrice={changeFilterPrice}
        message={message}
      />
      <ListProducts products={filteredProducts} productsFound={productsFound} />
    </section>
  );
}
