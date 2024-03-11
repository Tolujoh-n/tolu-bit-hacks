import React, { useState } from "react";
import logo from "../assets/address.jpg";

const Modal = ({ onClose, onSubmit }) => {
  const handleOptionClick = () => {
    const optionButton = document.getElementById("optionbut");
    optionButton.classList.toggle("active");
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <span style={{ cursor: "pointer" }} className="close" onClick={onClose}>
          &times;
        </span>
        <div className="d-flex justify-content-between align-items-center">
          {/* First word with icon */}
          <div>
            <span style={{ color: "#b1bad3" }}>Question: 1 / 20</span>
          </div>
          {/* Second word */}
          <div>
            <span style={{ color: "#b1bad3" }}>00:00:00</span>
          </div>
        </div>
        <div className="maincard">
          <div
            style={{
              background: "#213743",
              border: "5px solid #b1bad3",
              borderStyle: "dashed",
            }}
            className="card info-card revenue-card"
          >
            <div className="card-body">
              <h6 style={{ color: "#d5dceb" }}>
                Which prestigious university did Microsoft founder Bill Gates
                drop out of?
              </h6>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between">
                  {/* option */}
                  <div className="flex-fill mr-2">
                    <button
                      onClick={handleOptionClick}
                      className="btn btn-primary btn-block"
                      id="optionbut"
                    >
                      Option 1
                    </button>
                  </div>
                  {/* Second word */}
                  <div className="flex-fill ml-2">
                    <button
                      onClick={handleOptionClick}
                      className="btn btn-primary btn-block"
                      id="optionbut"
                    >
                      Option 2
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between">
                  {/* option */}
                  <div className="flex-fill mr-2">
                    <button
                      onClick={handleOptionClick}
                      className="btn btn-primary btn-block"
                      id="optionbut"
                    >
                      Option 3
                    </button>
                  </div>
                  {/* Second word */}
                  <div className="flex-fill ml-2">
                    <button
                      onClick={handleOptionClick}
                      className="btn btn-primary btn-block"
                      id="optionbut"
                    >
                      Option 4
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className="d-flex justify-content-between align-items-center">
            {/* First word with icon */}
            <div>
              <button id="followbtn">Previous</button>
              <button id="followbtn">Next</button>
            </div>
            {/* Second word */}
            <div>
              <button id="followbtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// Inline CSS styles for the modal
const header = {
  textAlign: "center",
  color: "whitesmoke",
};
const modalStyle = {
  display: "block",
  position: "fixed",
  zIndex: "9999",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
};

const modalContentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  width: "auto",
  minWidth: "300px",
  background: "#1a2c38",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};
const cancelbut = {
  /* Your button style here */
  padding: "8px 12px",
  backgroundColor: "rgb(129, 128, 125)",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
  marginRight: "8px",
};

const submitbut = {
  /* Your button style here */
  padding: "8px 12px",
  backgroundColor: "white",
  color: "black",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
  marginRight: "8px",
};
