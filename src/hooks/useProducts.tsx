"use client";
import { getProducts, getUniqueProduct } from "@/libs/requests";
import { Filter, Product, ProductApi, UseProductTypes } from "@/types/types";
import { product_api } from "@/utils/product_api";
import { useEffect, useState } from "react";

export const useProducts = (
  id: string | string[] | undefined
): UseProductTypes => {
  const [saveProducts, setSaveProducts] = useState<ProductApi>(product_api);
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<ProductApi>(product_api);
  const [message, setMessage] = useState<string>("");
  const [filters, setFilters] = useState<Filter>({
    category: "All",
    price: { min: 0, max: 6000 },
  });

  const filteredProducts = products.products.filter((product) => {
    const matchesCategory =
      filters.category === "All" || product.category === filters.category;
    const matchesPrice =
      product.price >= (filters.price?.min ?? 0) &&
      product.price <= (filters.price?.max ?? 6000);

    return matchesCategory && matchesPrice;
  });

  const findProduct = async (title: string) => {
    const foundProduct = products.products.find(
      (product) => product.title.toLowerCase() == title
    );
    if (!foundProduct) {
      setMessage("Product not found");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    setProducts({ ...products, products: [foundProduct] });
  };

  const refreshProducts = () => {
    setProducts({ ...products, products: saveProducts.products });
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const localProducts = await getProducts();
      if (localProducts) {
        setProducts(localProducts);
        setSaveProducts(localProducts);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        const localProduct = await getUniqueProduct(id);
        if (localProduct) {
          setProduct(localProduct);
        }
      };
      getProduct();
    }
  }, [id]);

  return {
    findProduct,
    categories: products.categories,
    product,
    refreshProducts,
    filteredProducts,
    filters,
    setFilters,
    message,
  };
};
