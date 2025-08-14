"use client";
import iconRight from "@/assets/arrow-right.svg";
import iconLeft from "@/assets/arrow-left.svg";
import { PropsListProducts } from "@/types/types";
import { CardProduct } from "@/components/CardProduct";
import { useState } from "react";
import "@/styles/list-products.css";

export default function ListProducts({
  products,
  productsFound,
}: PropsListProducts) {
  const itemsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState<number>(1);
  const activeProducts = productsFound.length > 0 ? productsFound : products;
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const totalPages = Math.ceil(activeProducts.length / itemsPerPage);

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  return (
    <section className="container-list-products">
      {products.length > 0 ? (
        <>
          <ul className="list-products">
            {activeProducts.slice(startIndex, endIndex).map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </ul>

          <div className="container-pagination">
            <button
              className={`btn-more ${currentPage === 1 ? "disabled" : ""}`}
              disabled={currentPage === 1}
              onClick={prev}>
              <img
                src={iconLeft.src}
                loading="lazy"
                alt="arrow left"
                width={20}
                height={20}
              />
            </button>
            <p className="title-pagination">
              {currentPage} of {totalPages}
            </p>
            <button
              className={`btn-more ${currentPage === totalPages ? "disabled" : ""}`}
              disabled={currentPage === totalPages}
              onClick={next}>
              <img
                src={iconRight.src}
                loading="lazy"
                alt="arrow right"
                width={20}
                height={20}
              />
            </button>
          </div>
        </>
      ) : (
        <p className="title-without-products">No products found</p>
      )}
    </section>
  );
}
