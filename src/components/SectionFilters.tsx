"use client";
import "@/styles/section-filters.css";
import { PropsSectionFilters } from "@/types/types";
import { FormEvent, useRef, useState } from "react";
import { prices } from "@/utils/prices";
import iconRefresh from "@/assets/refresh.svg";
import iconSearch from "@/assets/search.svg";
import iconRight from "@/assets/arrow-right.svg";

export default function SectionFilters({
  categories,
  findProduct,
  refreshProducts,
  filters,
  changeFilterCategory,
  changeFilterPrice,
  message,
  quantityProducts
}: PropsSectionFilters) {
  const ref = useRef<HTMLInputElement>(null);
  const [activeRefresh, setActiveRefresh] = useState<boolean>(false);

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current) return;
    findProduct(ref.current.value);
    ref.current.value = "";
    setActiveRefresh(true);
  };

  const refreshAllProducts = () => {
    refreshProducts();
    setActiveRefresh(false);
  };

  return (
    <aside className="section-filters">
      <section>
        <form className="container-search" onSubmit={submitSearch}>
          <input
            name="search"
            ref={ref}
            placeholder="Search some product..."
            className="input-search"
          />
          <button className="btn-search" type="submit">
            <img
              src={iconSearch.src}
              loading="lazy"
              alt="search icon"
              width={20}
              height={20}
            />
          </button>
          {activeRefresh && (
            <button className="btn-search" type="button">
              <img
                src={iconRefresh.src}
                alt="refresh icon"
                width={20}
                height={20}
                loading="lazy"
                onClick={refreshAllProducts}
              />
            </button>
          )}
        </form>
        {message && <p className="title msg">{message}</p>}
        <p className="title results">{quantityProducts} results</p>
        <div className="container-filters">
          <p className="title-filters">
            Categories
            <img
              src={iconRight.src}
              loading="lazy"
              alt="arrow right"
              width={15}
              height={15}
            />
          </p>
          <div className="container-btns">
            <button
              className="btn-filter"
              onClick={() => changeFilterCategory("All")}>
              All
            </button>
            {categories.map(({ id, category }) => (
              <button
                key={id}
                className={`btn-filter ${
                  filters && filters?.category === category ? "current" : ""
                }`}
                onClick={() => changeFilterCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="container-filters">
          <p className="title-filters">
            Filter for prices
            <img
              src={iconRight.src}
              loading="lazy"
              alt="arrow right"
              width={15}
              height={15}
            />
          </p>
          <div className="container-btns">
            <button
              className="btn-filter"
              onClick={() => changeFilterPrice(0, Infinity)}>
              All
            </button>
            {prices.map(({ id, min, max }) => (
              <button
                key={id}
                className={`btn-filter ${
                  filters && filters?.price?.max === max ? "current" : ""
                }`}
                onClick={() => changeFilterPrice(min, max)}>
                {min} - {max}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container-footer">
        <p className="title-footer">© Fast-stock 2025</p>
      </div>
    </aside>
  );
}
