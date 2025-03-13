"use client";
import { CardCart } from "@/components/CardCart";
import { useCart } from "@/hooks/useCart";
import "@/styles/cart.css";

export default function Cart() {
  const {
    localProducts: products,
    addUnit,
    buyAllProducts,
    deleteProduct,
  } = useCart();

  return (
    <section className="cart">
      <div className="container-cart">
        {products.length > 0 ? (
          <>
            <div className="products-cart">
              {products.map((product) => (
                <CardCart
                  product={product}
                  key={product.id}
                  addUnit={addUnit}
                  deleteProduct={deleteProduct}
                />
              ))}
            </div>
            <div className="resume-cart">
              <h2 className="title-resume">Purchase summary</h2>
              <hr />
              <div className="container-list-prices">
                {products.map(({ id, title, price, unit }) => (
                  <div className="item-count" key={id}>
                    <p className="title-total-product">{title}</p>
                    <strong>
                      {unit && Math.floor(price * parseInt(unit)).toFixed(2)}
                    </strong>
                  </div>
                ))}
              </div>

              <p className="detail-cart-total">
                <b>Total:</b>{" "}
                {products
                  .reduce(
                    (total, { price, unit }) =>
                      total + (unit ? Math.floor(price * parseInt(unit)) : 0),
                    0
                  )
                  .toFixed(2)}
              </p>
              <button className="btn-cart" onClick={buyAllProducts}>
                Buy
              </button>
            </div>
          </>
        ) : (
          <div className="container-cart-empty">
            <h2 className="title-cart-empty">No added products</h2>
          </div>
        )}
      </div>
    </section>
  );
}
