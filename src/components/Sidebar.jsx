import React, { useState } from "react";
import { Link } from "react-router-dom";
import stx from "../assets/img/stacks.png";
import btc from "../assets/img/btc.png";
import useimage from "../assets/address.jpg";
import Modal from "./Modal";

const Ongoinggm = [
  { id: 1, title: "ongoing que", reward: "30", level: "1" },
  { id: 2, title: "ongoing que", reward: "15", level: "6" },
  { id: 3, title: "ongoing que", reward: "10", level: "3" },
  { id: 4, title: "ongoing que", reward: "25", level: "5" },
  { id: 5, title: "ongoing que", reward: "20", level: "2" },
];

const Sidebar = () => {
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
      <div className="col-lg-4">
        {/* Recent Activity */}
        <div className="card info-card revenue-card">
          <div className="card-body">
            <h5 className="card-title">Balance:</h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                {/* <i className="fas fa-dollar-sign"></i>  */}
                <img id="balance" src={stx} alt="" />
              </div>
              <div className="ps-3">
                <h6>0 STX</h6>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                {/* <i className="fas fa-dollar-sign"></i>  */}
                <img id="balance" src={btc} alt="" />
              </div>
              <div className="ps-3">
                <h6>0 BTC</h6>
              </div>
            </div>
          </div>
        </div>
        {/* End Recent Activity */}

        {/* News & Updates Traffic */}
        <div className="card">
          <div className="card-body pb-0">
            <h5 className="card-title">Top Genius</h5>
            <div className="news">
              {Ongoinggm.map((card) => (
                <div
                  key={card.id}
                  className="post-item clearfix"
                  style={{
                    background: "#213743",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <img src={useimage} alt="" />
                  <h4>
                    <a href="#">{card.title}</a>
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
                        <button onClick={handleGamemodalClick} id="followbtn">
                          Follow
                        </button>
                      </div>
                    </div>
                  </p>
                </div>
              ))}
            </div>

            {/* End sidebar recent posts */}
          </div>
        </div>
        {/* End News & Updates */}
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

export default Sidebar;
