"use client";
import { Loader } from "@/components/Loader";
import { useProducts } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import "@/styles/product.css";
import Link from "next/link";

export default function ProductId() {
  const { id } = useParams();
  const { product } = useProducts(id);
  const { addProduct, message } = useCart();

  return (
    <section className="page-product">
      {product ? (
        <div className="container-page-product">
          <img
            src={product.picture}
            alt={product.title}
            width={500}
            height={500}
            className="image-page-product"
          />
          <aside className="aside-page-product">
            <p className="category-product">{product.category}</p>
            <h1 className="title-product">{product.title}</h1>
            <p className="details-product">{product.details}</p>
            <p className="price-product">${product.price}</p>
            <p className="stock-product">
              Available stock: <b>{product.stock}</b>
            </p>
            <div className="container-btns-buy">
              <Link href="/" className="btn-product buy">
                Buy
              </Link>
              {message && <p className="message">{message}</p>}
              <button
                className="btn-product add"
                onClick={() => addProduct(product)}>
                Add to cart
              </button>
            </div>
          </aside>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
}
