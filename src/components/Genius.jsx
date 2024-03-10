import React, { useState } from "react";
import useimage from "../assets/address.jpg";
import Modal from "./Modal";

const cardData = [
  { name: "sone tvdx sfgff", reward: "10", level: "1", id: 1 },
  { name: "husus autemfe effe", reward: "15", level: "2", id: 2 },
  { name: "Idan usbw ffefef", reward: "20", level: "3", id: 3 },
  { name: "besos corn", reward: "25", level: "4", id: 4 },
  { name: "nacy colen fdsi udf dfdf", reward: "30", level: "5", id: 5 },
  { name: "nacy colenhf", reward: "40", level: "6", id: 6 },
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
                            <button
                              onClick={handleGamemodalClick}
                              id="followbtn"
                            >
                              Follow
                            </button>
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
                            <button
                              onClick={handleGamemodalClick}
                              id="followbtn"
                            >
                              Follow
                            </button>
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
