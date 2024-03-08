import React, { useState } from "react";
import logo from "../assets/address.jpg";

const Modal = ({ onClose, onSubmit }) => {
  const [field1, setField1] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Close the modal
    onClose();
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <span style={{ cursor: "pointer" }} className="close" onClick={onClose}>
          &times;
        </span>
        <h2 style={header}>GAME DETAILS</h2>
        <div className="maincard">
          <div className="card info-card revenue-card">
            <div className="card-body">
              <h6 style={{ color: "gold" }}>The Gamifield quests onboard</h6>
              <div className="d-flex align-items-center">
                <div className="">
                  <img
                    src={logo}
                    style={{
                      height: "100%",
                      width: "100px",
                      borderRadius: "10px",
                    }}
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <h5 className="c" style={{ color: "whitesmoke" }}>
                    <b> Game: </b> The game title.
                  </h5>
                  <h5 className="c" style={{ color: "whitesmoke" }}>
                    <b> Current Level: </b> 3
                  </h5>
                  <h5 className="c" style={{ color: "whitesmoke" }}>
                    <b> Duration: </b>{" "}
                    <span style={{ color: "gray" }}>00 : 00 : 00</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>
              <b style={{ color: "goldenrod", fontSize: "20px" }}>
                Description:{" "}
              </b>
              <span style={{ color: "white" }}>
                Your swap is performed directly in Curve protocol ashb
                silysgulidg ldisglyid gls iuyg lausy afsfuak stf sftf
              </span>
            </p>
          </div>
          <div className="form-group">
            <label className="css-1owdu0o">
              <div className="css-zkfaav" style={{ color: "gold" }}>
                Enter Wallet Adress
              </div>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="oxwjk....evkvbh"
              value={field1}
              onChange={(e) => setField1(e.target.value)}
              required
            />
          </div>

          <br />
          <button style={cancelbut} type="button" className="button-style">
            Enter
          </button>
          <button style={submitbut} type="submit" className="button-style">
            Claim Rewards
          </button>
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
  width: "40%",
  background: "linear-gradient(to left, #c33764, #1d2671)",
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
  backgroundColor: "goldenrod",
  color: "black",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
  marginRight: "8px",
};
