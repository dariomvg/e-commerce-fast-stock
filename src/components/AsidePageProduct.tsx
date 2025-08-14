import "@/styles/aside-page-product.css";
import { useCart } from "@/hooks/useCart";
import "@/styles/page-product.css";
import Link from "next/link";
import { Product } from "@/types/types";

export default function AsidePageProducts({ product }: { product: Product }) {
  const { addProduct, message, redirectCart } = useCart();

  return (
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
        <button className="btn-product add" onClick={() => addProduct(product)}>
          Add to cart
        </button>
        {redirectCart && <Link href={redirectCart} className="link-cart-aside">Go to cart</Link>}
      </div>
    </aside>
  );
}
