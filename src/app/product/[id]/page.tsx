"use client";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { useParams } from "next/navigation";
import { getUniqueProduct } from "@/libs/requests";
import AsidePageProducts from "@/components/AsidePageProduct";
import "@/styles/page-product.css";
import { Product } from "@/types/types";
import { objProduct } from "@/utils/product";

export default function ProductId() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>(objProduct);

  useEffect(() => {
    if (id !== undefined) {
      const fetchProduct = async () => {
        const localProduct = await getUniqueProduct(id);
        if (localProduct) setProduct(localProduct);
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <section className="page-product">
      <div className="container-page-product">
        {product.picture ? (
          <>
            <img
              src={product.picture}
              alt={product.title || "Product image"}
              loading="lazy"
              width={500}
              height={500}
              className="image-page-product"
            />
            <AsidePageProducts product={product} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}
