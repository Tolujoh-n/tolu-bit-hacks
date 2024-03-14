import React, { useState } from "react";
import useimage from "../assets/address.jpg";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Topquiz = [
  {
    name: "Meta Quest Presence Platform quiz 2024",
    reward: "10",
    level: "1",
    id: 1,
  },
  {
    name: "Meta Quest Presence Platform quiz 2024",
    reward: "15",
    level: "2",
    id: 2,
  },
];

const cardData = [
  { name: "Jane col", reward: "10", level: "1", id: 1 },
  { name: "Tolujohn Bob", reward: "15", level: "2", id: 2 },
  { name: "Fabrre don", reward: "20", level: "3", id: 3 },
  { name: "Rugberbs", reward: "25", level: "4", id: 4 },
  { name: "Naccy colen", reward: "30", level: "5", id: 5 },
  { name: "Petter collins", reward: "40", level: "6", id: 6 },
];

const Genius = () => {
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
        <h5 className="card-title">Top Quiz</h5>

        <div className="row">
          {Topquiz.map((card) => (
            <div key={card.id} className="col-lg-12">
              <div
                style={{ background: "#213743" }}
                className="card info-card revenue-card"
              >
                <Link to="/quizInfo">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="">
                        <img
                          src={useimage}
                          style={{
                            height: "10rem",
                            width: "100px",
                            borderRadius: "5px",
                          }}
                          alt=""
                        />
                      </div>
                      <div className="ps-3">
                        <h4>
                          <a href="#">{card.name}</a>
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
                          </div>
                        </div>
                        <br />
                        <div className="d-flex justify-content-between align-items-center">
                          {/* First word with icon */}
                          <div>
                            <span style={{ color: "#b1bad3" }}>
                              3000 STX in prizes
                            </span>
                          </div>
                          {/* Second word */}
                          <div>
                            <span style={{ color: "#b1bad3" }}>
                              300 participants
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-12">
        <h5 className="card-title">Top Genius</h5>

        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-lg-6">
              <div
                className=""
                style={{
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    background: "#213743",
                    paddingTop: "10px",
                    borderRadius: "5px",
                  }}
                  className="card-body pb-0"
                >
                  <div className="news">
                    <div className="post-item clearfix">
                      <img
                        style={{
                          height: "4rem",
                          width: "70px",
                          borderRadius: "5px",
                        }}
                        src={useimage}
                        alt=""
                      />
                      <h4>
                        <a href="#">{card.name}</a>
                      </h4>

                      <p>
                        <div className="d-flex justify-content-between align-items-center">
                          {/* First word with icon */}
                          <div>
                            <span style={{ color: "#b1bad3" }}>
                              {" "}
                              Quiz Won: {card.level}
                            </span>
                          </div>
                          {/* Second word */}
                          <div>
                            <button id="followbtn">Follow</button>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-12">
        <h5 className="card-title">Top Organizers</h5>

        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-lg-6">
              <div
                className=""
                style={{
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    background: "#213743",
                    paddingTop: "10px",
                    borderRadius: "5px",
                  }}
                  className="card-body pb-0"
                >
                  <div className="news">
                    <div className="post-item clearfix">
                      <img
                        style={{
                          height: "4rem",
                          width: "70px",
                          borderRadius: "5px",
                        }}
                        src={useimage}
                        alt=""
                      />
                      <h4>
                        <a href="#">{card.name}</a>
                      </h4>

                      <p>
                        <div className="d-flex justify-content-between align-items-center">
                          {/* First word with icon */}
                          <div>
                            <span style={{ color: "#b1bad3" }}>
                              {" "}
                              Quiz Hosted: {card.level}
                            </span>
                          </div>
                          {/* Second word */}
                          <div>
                            <button id="followbtn">Follow</button>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <>
        {/* Render the Gamemodal if isGamemodalOpen is true */}
        {isGamemodalOpen && (
          <Modal onClose={handleCloseGamemodal} onSubmit={handleSubmit} />
        )}
      </>
    </>
  );
};

export default Genius;
