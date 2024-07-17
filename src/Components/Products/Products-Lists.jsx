import React from "react";
import Product from "./Product";
import { Products } from "../../Mock-Data/Products";
import styles from "./CSS/product-style.module.css";

const ProductsLists = () => {
  return (
    <>
      <div className={styles["product-list-container"]}>
        {Products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </>
  );
};

export default ProductsLists;
