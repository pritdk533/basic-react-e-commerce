import React from "react";
import styles from "./navbarStyle.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.navContainer}>
        <nav>
          <div>
            <h1>R-S-APP</h1>
          </div>
          <div>
            <button>Cart</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
