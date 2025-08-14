"use client";
import { Product, UseCartTypes } from "@/types/types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useCart = (): UseCartTypes => {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [redirectCart, setRedirectCart] = useState("")
  const [localProducts, setLocalProducts] = useState<Product[]>([]);


  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setLocalProducts(JSON.parse(storedProducts));
    }
  }, []);

  const deleteProduct = useCallback((id: number) => {
    setLocalProducts(localProducts.filter((product) => product.id !== id));
  }, [localProducts]);

  const buyProduct = useCallback((id: number) => {
    deleteProduct(id);
    router.push("/");
  }, [deleteProduct, router]);

  const buyAllProducts = () => {
    setLocalProducts([]);
    localStorage.removeItem("products")
    router.push("/");
  };

  const addProduct = useCallback((product: Product) => {
    const productExist = localProducts.find((item) => item.id === product.id);
    if (productExist) {
      setMessage("Product already added");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    setLocalProducts([...localProducts, { ...product, unit: "1" }]);

    setMessage("Product added");
    setRedirectCart("/cart")
    setTimeout(() => setMessage(""), 3000);
  }, [localProducts]);

  const addUnit = useCallback((unit: string, id: number) => {
    setLocalProducts(
      localProducts.map((product) =>
        product.id === id ? { ...product, unit } : product
      )
    );
  }, [localProducts]);

  useEffect(() => {
    if (localProducts.length > 0) {
      localStorage.setItem("products", JSON.stringify(localProducts));
    }
  }, [localProducts]);


  return {
    localProducts,
    deleteProduct,
    buyProduct,
    addProduct,
    message,
    addUnit,
    buyAllProducts,
    redirectCart
  };
};
