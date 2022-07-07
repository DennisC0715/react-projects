import React from "react";
import { useGlobeContext } from "./context";

const Modal = () => {
  const { closeModal, showModel, correct } = useGlobeContext();
  return (
    <div
      className={`${showModel ? "modal-container isOpen" : "modal-container"}`}
    >
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered 20% of questions correctly</p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
