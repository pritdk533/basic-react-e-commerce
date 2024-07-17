import React from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal = ({ children, closeModal }) => {
  return createPortal(
    <>
      <div className="modal-back-drop" onClick={closeModal}></div>
      <div className="modal-content">{children}</div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
