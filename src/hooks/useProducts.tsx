"use client";
import { getProducts, getUniqueProduct } from "@/libs/requests";
import { Filter, ObjProductsCategories, Product, UseProductTypes } from "@/types/types";
import { objFilters } from "@/utils/filters";
import { objProductsCategories } from "@/utils/obj_products_categories";
import { useEffect, useState } from "react";

export const useProducts = (
  id: string | string[] | undefined
): UseProductTypes => {
  const [products, setProducts] = useState<ObjProductsCategories>(objProductsCategories);
  const [productsFound, setProductsFound] = useState<Product[]>([]); 
  const [message, setMessage] = useState<string>("");
  const [filters, setFilters] = useState<Filter>(objFilters);

  const filteredProducts = products.products.filter((product) => {
    const matchesCategory =
      filters.category === "All" || product.category === filters.category;
    const matchesPrice =
      product.price >= (filters.price?.min ?? 0) &&
      product.price <= (filters.price?.max ?? 6000);

    return matchesCategory && matchesPrice;
  });

  const findProduct = async (title: string) => {
    const foundProducts = products.products.find(
      (product) => product.title.toLowerCase() == title
    );
    if (!foundProducts) {
      setMessage("Product not found");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    setProductsFound([foundProducts]);
  };

  const refreshProducts = async () => {
    setProductsFound([]);
    setFilters({ category: "All", price: { min: 0, max: 6000 } });
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      if (allProducts.categories.length > 0 && allProducts.products.length > 0)
        setProducts(allProducts);
    };
    getAllProducts();
  }, []);

  const changeFilterCategory = (category: string) => {
    setFilters({ ...filters, category });
  };
  const changeFilterPrice = (min: number, max: number) => {
    setFilters({ ...filters, price: { min, max } });
  };

  return {
    findProduct,
    categories: products.categories,
    refreshProducts,
    filteredProducts,
    filters,
    message,
    changeFilterCategory,
    changeFilterPrice,
    productsFound
  };
};
