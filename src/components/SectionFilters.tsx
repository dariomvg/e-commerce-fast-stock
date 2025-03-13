"use client";
import "@/styles/section-filters.css";
import { PropsSectionFilters } from "@/types/types";
import { FormEvent, useState } from "react";
import { prices } from "@/utils/prices";
import iconRefresh from "@/assets/refresh.svg";
import iconSearch from "@/assets/search.svg";
import iconRight from "@/assets/arrow-right.svg";

export const SectionFilters = ({
  categories,
  findProduct,
  refreshProducts,
  filters,
  setFilters,
  message,
  products
}: PropsSectionFilters) => {
  const [search, setSearch] = useState<string>("");

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    findProduct(search);
    setSearch("");
  };

  return (
    <aside className="section-filters">
      <form className="container-search" onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Search some product..."
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-search"
        />
        <button className="btn-search">
          <img src={iconSearch.src} alt="search icon" width={20} height={20} />
        </button>
          <button className="btn-search">
            <img
              src={iconRefresh.src}
              alt="refresh icon"
              width={20}
              height={20}
              onClick={refreshProducts}
            />
          </button>
      </form>
      {message && <p className="title msg">{message}</p>}
      <p className="title results">{products.length} results</p>
      <div className="container-filters">
        <p className="title-filters">
          Categories
          <img src={iconRight.src} alt="arrow right" width={15} height={15} />
        </p>
        <div className="container-btns">
          <button
            className="btn-filter"
            onClick={() => setFilters({ ...filters, category: "All" })}>
            All
          </button>
          {categories.length > 0 &&
            categories.map(({ id, category }) => (
              <button
                key={id}
                className={`btn-filter ${
                  filters && filters?.category === category ? "current" : ""
                }`}
                onClick={() => setFilters({ ...filters, category })}>
                {category}
              </button>
            ))}
        </div>
      </div>
      <div className="container-filters">
        <p className="title-filters">
          Filter for prices
          <img src={iconRight.src} alt="arrow right" width={15} height={15} />
        </p>
        <div className="container-btns">
          <button
            className="btn-filter"
            onClick={() =>
              setFilters({ ...filters, price: { min: 0, max: Infinity } })
            }>
            All
          </button>
          {prices.map(({ id, min, max }) => (
            <button
              className={`btn-filter ${
                filters && filters?.price?.max === max ? "current" : ""
              }`}
              key={id}
              onClick={() => setFilters({ ...filters, price: { min, max } })}>
              {min} - {max}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
