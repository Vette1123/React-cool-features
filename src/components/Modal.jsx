import React from "react";
import eksde from "../assets/nft.jpg";
import ReactDom from "react-dom";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={eksde} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love NFT's
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
