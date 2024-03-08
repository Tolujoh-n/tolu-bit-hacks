import React, { useState } from "react";
import { Link } from "react-router-dom";
import xp from "../assets/xp.jpg";
import ll from "../assets/ll.png";
import useimage from "../assets/address.jpg";
import Modal from "./Modal";

const Ongoinggm = [
  { id: 1, title: "ongoing quest title", reward: "30", level: "1" },
  { id: 2, title: "ongoing quest title", reward: "15", level: "6" },
  { id: 3, title: "ongoing quest title", reward: "10", level: "3" },
  { id: 4, title: "ongoing quest title", reward: "25", level: "5" },
  { id: 5, title: "ongoing quest title", reward: "20", level: "2" },
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
                <img id="balance" src={xp} alt="" />
              </div>
              <div className="ps-3">
                <h6>0 XP</h6>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                {/* <i className="fas fa-dollar-sign"></i>  */}
                <img id="balance" src={ll} alt="" />
              </div>
              <div className="ps-3">
                <h6>0 LL</h6>
              </div>
            </div>
          </div>
        </div>
        {/* End Recent Activity */}

        {/* News & Updates Traffic */}
        <div className="card">
          <div className="card-body pb-0">
            <h5 className="card-title">Ongoing Games</h5>
            <div className="news">
              {Ongoinggm.map((card) => (
                <div
                  key={card.id}
                  className="post-item clearfix"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid white",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <img src={useimage} alt="" />
                  <h4>
                    <a href="#">{card.title}</a>
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
              ))}
            </div>
            <div className="text-center">
              <Link to="/quests">
                <button id="followbtn">View All</button>
              </Link>
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
