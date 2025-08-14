import "@/styles/card-cart.css";
import { PropsCardCart } from "@/types/types";

export const CardCart = ({
  product,
  deleteProduct,
  addUnit,
}: PropsCardCart) => {
  const { id, title, picture, price, details, unit } = product;
  return (
    <div className="card-cart">
      {picture && <img
        src={picture}
        alt={title || "product image"}
        className="image-card-cart"
        loading="lazy"
        width={100}
        height={100}
      />}
      
      <div className="box-card-cart">
        <h3 className="title-card-cart">{title}</h3>
        <p className="details-card-cart">{details}</p>
        <div className="cont-btn-units">
          <button className="btn-card-cart" onClick={() => deleteProduct(id)}>
            Eliminar
          </button>
          <p className="title-units">{unit}</p>
          <select
            className="select-cart"
            value={unit}
            onChange={(e) => addUnit(e.target.value, id)}>
            <option value="1">1 Unit</option>
            <option value="2">2 Units</option>
            <option value="3">3 Units</option>
          </select>
        </div>
      </div>
      <strong className="price-card-cart">
        ${unit && Math.floor(price * parseInt(unit)).toFixed(2)}
      </strong>
    </div>
  );
};
