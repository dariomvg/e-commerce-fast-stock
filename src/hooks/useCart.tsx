"use client";
import { Product, UseCartTypes } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCart = (): UseCartTypes => {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [localProducts, setLocalProducts] = useState<Product[]>([]);


  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setLocalProducts(JSON.parse(storedProducts));
    }
  }, []);

  const deleteProduct = (id: number) => {
    setLocalProducts(localProducts.filter((product) => product.id !== id));
  };

  const buyProduct = (id: number) => {
    deleteProduct(id);
    router.push("/");
  };

  const buyAllProducts = () => {
    setLocalProducts([]);
    localStorage.removeItem("products")
    router.push("/");
  };

  const addProduct = (product: Product) => {
    const productExist = localProducts.find((item) => item.id === product.id);
    if (productExist) {
      setMessage("Product already added");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    setLocalProducts([...localProducts, { ...product, unit: "1" }]);

    setMessage("Product added");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const addUnit = (unit: string, id: number) => {
    setLocalProducts(
      localProducts.map((product) =>
        product.id === id ? { ...product, unit } : product
      )
    );
  };

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
  };
};
