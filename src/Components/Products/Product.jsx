import React from "react";
import styles from "./CSS/product-style.module.css";
import { useCartContext } from "../../Context/Cart-Provider";
import { toast } from "react-toastify";

const Product = ({ id, productTitle, price, img }) => {
  const { cart, addCartItemHandler } = useCartContext();

  const addNewItemHandler = () => {
    for (let item of cart) {
      if (item.id === id) {
        toast.error(`${productTitle} Already Added To Cart`);
        return;
      }
    }
    const newCartItem = {
      id: id,
      productTitle: productTitle,
      price: price,
      quantity: 1,
    };
    addCartItemHandler(newCartItem);
    toast.info(`${productTitle} Added Successfully`);
  };
  return (
    <>
      <div className={styles.container}>
        <div className="product-div">
          <img className={styles["product-img"]} src={img} alt={productTitle} />
          <p>Product Name: {productTitle}</p>
          <p>Price: {price}</p>
        </div>
        <div className="btn-div">
          <button className={styles.btn} onClick={addNewItemHandler}>
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
