import React from "react";
import { useCartContext } from "../../Context/Cart-Provider";

const CartItem = ({ id, productTitle, price, quantity }) => {
  const { deleteCartItem, increaseQuantity, decreaseQuantity } =
    useCartContext();

  const css = {
    backgroundColor: "rgba(0,0,0,0.8)",
    border: "1px solid #green",
    color: "#efefef",
    margin: "20px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
  };

  const btnDivStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "1rem",
  };
  return (
    <>
      <div className="cart-container" style={css}>
        <div>
          <p>Product Name: {productTitle}</p>
          <p>
            Price: {price} * {quantity} = {price * quantity}
          </p>
        </div>
        <div style={btnDivStyle}>
          <div>
            <button onClick={() => decreaseQuantity(id)}> - </button>
          </div>
          <div>
            <h1>{quantity}</h1>
          </div>
          <div>
            <button onClick={() => increaseQuantity(id)}>+</button>
          </div>
        </div>
        <div>
          <button onClick={() => deleteCartItem(id, productTitle)}>
            Delete Item
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
