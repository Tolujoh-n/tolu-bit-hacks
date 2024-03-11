import React, { useState } from "react";
import xp from "../assets/img/xp.jpg";
import useimage from "../assets/address.jpg";
import Modal from "./Modal";
import { BsCheckCircle } from "react-icons/bs";
import Quiztheory from "./Quiztheory";
import Paticipants from "./Paticipants";

const cardData = [
  {
    badgeColor: "primary",
    badgeText: "Bronze 10STX",
    range: "60% - 69%",
    items: ["Naccy buu", "sia funky", "Pinat van"],
  },
  {
    badgeColor: "success",
    badgeText: "Silver 20STX",
    range: "70% - 79%",
    items: ["Natmas", "Tolujohn", "Huun gss"],
  },
  {
    badgeColor: "warning",
    badgeText: "Gold 50STX",
    range: "80% - 100%",
    items: ["Tolujohn", "Faih jon", "Percy mat"],
  },
];

const QuizInfo = () => {
  const [isGamemodalOpen, setIsGamemodalOpen] = useState(false);

  const handleGamemodalClick = () => {
    setIsGamemodalOpen(true);
  };

  const handleCloseGamemodal = () => {
    setIsGamemodalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // claim
    handleCloseGamemodal();
  };
  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12">
            <div
              style={{ background: "#213743" }}
              className="card info-card revenue-card d-flex align-items-stretch"
            >
              <div
                style={{ width: "100%" }}
                className="card-body d-flex align-items-center justify-content-between flex-wrap"
              >
                <div style={{ width: "50%" }} className="ps-3 flex-grow-1">
                  <h4>
                    <a href="#">Meta Quest Presence Platform quiz 2024</a>
                  </h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {/* First tag with icon */}
                      <span className="badge bg-warning">upcoming</span>
                    </div>
                    <div className="d-flex align-items-center">
                      {/* Second tag with icon */}
                      <i className="bi bi-globe"> </i>{" "}
                      <span className="badge me-2">Public</span>
                      <span style={{ color: "#b1bad3" }}>12 April 2024</span>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-between align-items-center">
                    {/* First word with icon */}
                    <div>
                      <span style={{ color: "#b1bad3" }}>Fee: 5 STX</span>
                    </div>
                    {/* Second word */}
                    <div>
                      <span style={{ color: "#b1bad3" }}>300 participants</span>
                      <br />
                      <span style={{ color: "#b1bad3" }}>Pool: 2500 STX</span>
                    </div>
                  </div>

                  <button onClick={handleGamemodalClick} id="enterquiz">
                    Enter Quiz
                  </button>
                </div>
                <div className="ms-auto" style={{ width: "50%" }}>
                  <img
                    src={useimage}
                    style={{
                      height: "10rem",
                      width: "100%",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <h5 className="card-title">Genius</h5>
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4">
              <div className="info-box card" style={{ background: "#213743" }}>
                <span className={`badge bg-${card.badgeColor}`}>
                  {card.badgeText}
                </span>
                <h3 className="text-white text-center">{card.range}</h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {card.items.map((item, i) => (
                    <li
                      key={i}
                      style={{ marginLeft: "20px", color: "#b1bad3" }}
                    >
                      <BsCheckCircle
                        style={{ color: card.badgeColor }}
                        size={16}
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Quiztheory />
      <Paticipants />
      <>
        {/* Render the Gamemodal if isGamemodalOpen is true */}
        {isGamemodalOpen && (
          <Modal onClose={handleCloseGamemodal} onSubmit={handleSubmit} />
        )}
      </>
    </>
  );
};

export default QuizInfo;
