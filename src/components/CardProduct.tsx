import { PropsCardProduct } from "@/types/types";
import "@/styles/card-product.css";
import Link from "next/link";

export const CardProduct = ({ product }: PropsCardProduct) => {
  const { id, picture, title, details, price, stock } = product;
  return (
    <li className="container-card-product">
      <Link href={`/product/${id}?product=${title}`} className="card-product">
        <img
          src={picture}
          alt={title}
          width={280}
          height={280}
          className="picture-card"
          loading="lazy"
        />

        <h3 className="title-card">{title}</h3>
        <div className="cont-price-stock">
          <p className="price-card">${price}</p>
          <p className="stock-card">
            <b>Quantity:</b> {stock}
          </p>
        </div>
        <p className="details-card">{details}</p>
      </Link>
    </li>
  );
};
