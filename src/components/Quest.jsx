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

const Quest = () => {
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
        <h5 className="card-title">Quests</h5>

        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-lg-6">
              <div
                className=""
                style={{
                  borderRadius: "20px",
                  border: "1px solid white",
                  marginBottom: "10px",
                }}
              >
                <div className="card-body pb-0">
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src={useimage} alt="" />
                      <h4>
                        <a href="#">{card.name}</a>
                      </h4>
                      <p>
                        <b>00 : 00 : 00</b>
                        <span style={{ color: "whitesmoke" }}>
                          {" "}
                          Level {card.level}
                        </span>
                      </p>
                      <span
                        style={{
                          color: "gold",
                          fontFamily: "fantasy",
                          fontSize: "medium",
                        }}
                      >
                        {card.reward} xp
                      </span>
                      <button onClick={handleGamemodalClick} id="followbtn">
                        Enter
                      </button>
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

export default Quest;
