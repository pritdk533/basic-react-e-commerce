import React, { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

// Cart Context
const CartContext = createContext();

// Cart Provider Component
const CartProvider = ({ children }) => {
  // CART REDUCER
  const cartReducer = (cart, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        return [...cart, action.payload.cartItem];
      }

      case "REMOVE_CART_ITEM": {
        toast.info(`${action.payload.productTitle} removed`);
        return cart.filter((item) => {
          return item.id !== action.payload.id;
        });
      }

      case "INCREASE_ITEM_QUANTITY": {
        return cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }

      case "DECREASE_ITEM_QUANTITY": {
        return cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            };
          } else {
            return item;
          }
        });
      }
      default:
        return cart;
    }
  };

  // ADD TO CART HANDLER
  const addCartItemHandler = (newCartItem) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cartItem: newCartItem,
      },
    });
  };

  // DELETE CART HANDLER
  const deleteCartItem = (id, productTitle) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: {
        id: id,
        productTitle: productTitle,
      },
    });
  };

  // INCREASE QUANTITY HANDLER
  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_ITEM_QUANTITY",
      payload: {
        id: id,
      },
    });
  };

  // DECREASE QUANTITY HANDLER
  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_ITEM_QUANTITY",
      payload: {
        id: id,
      },
    });
  };

  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItemHandler,
        deleteCartItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      <div>{children}</div>
    </CartContext.Provider>
  );
};

// useContext Function
export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
