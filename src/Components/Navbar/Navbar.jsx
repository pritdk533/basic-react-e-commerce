import React, { useState } from "react";
import styles from "./navbarStyle.module.css";
import Modal from "../Modal/Modal";
import CartItemsList from "../Cart/Cart-Items-List";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <header className={styles.navContainer}>
        <nav>
          <div>
            <h1>R-S-APP</h1>
          </div>
          <div>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>Cart</button>
          </div>
          {isModalOpen && (
            <Modal closeModal={closeModal}>
              <CartItemsList />
            </Modal>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
