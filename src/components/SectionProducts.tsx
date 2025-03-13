"use client";
import iconRight from "@/assets/arrow-right.svg";
import iconLeft from "@/assets/arrow-left.svg";
import { PropsSectionProducts } from "@/types/types";
import { CardProduct } from "@/components/CardProduct";
import { useState } from "react";
import { count } from "@/utils/counter_products";
import "@/styles/section-products.css";

export const SectionProducts = ({ products }: PropsSectionProducts) => {
  const [index, setIndex] = useState<number>(count);
  const [pages, setPages] = useState<number>(1);

  const next = () => {
    if (products.length <= count) {
      setIndex(index + products.length - 1);
    } else {
      setIndex(index + count);
    }
    setPages(pages +1);
  };

  const prev = () => {
    setIndex(index - count);
    setPages(pages -1);
  };

  return (
    <section className="container-products">
      <div className="list-products">
        {products.length > 0 &&
          products
            .slice(index - count, index)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
      </div>

      <div className="container-pagination">
        <button
          className={`btn-more ${index === count ? "disabled" : ""}`}
          disabled={index <= count}
          onClick={prev}>
          <img src={iconLeft.src} alt="arrow right" width={20} height={20} />
        </button>
        <p className="title-pagination">
          {pages} - {pages+1}
        </p>
        <button
          className={`btn-more ${
            products.length <= index || products.length <= count
              ? "disabled"
              : ""
          }`}
          disabled={products.length <= index || products.length <= count}
          onClick={next}>
          <img src={iconRight.src} alt="arrow right" width={20} height={20} />
        </button>
      </div>
    </section>
  );
};
