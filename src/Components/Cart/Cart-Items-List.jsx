import React from "react";
import { useCartContext } from "../../Context/Cart-Provider";
import CartItem from "./Cart-Item";

const CartItemsList = () => {
  const { cart } = useCartContext();
  const totalAmount = cart.reduce((acc, item, index, array) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <>
      {cart.length >= 1 ? (
        <>
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          {totalAmount > 0 && <div>Total Amount : {totalAmount}</div>}
        </>
      ) : (
        <div>
          <h1>No Item Added to Cart</h1>
        </div>
      )}
    </>
  );
};

export default CartItemsList;
