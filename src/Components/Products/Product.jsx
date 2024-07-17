import React from "react";
import styles from "./CSS/product-style.module.css";

const Product = ({ id, productTitle, price, img }) => {
  return (
    <>
      <div className={styles.container}>
        <div className="product-div">
          <img className={styles["product-img"]} src={img} alt={productTitle} />
          <p>Product Name: {productTitle}</p>
          <p>Price: {price}</p>
        </div>
        <div className="btn-div">
          <button className={styles.btn}>Add Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
