import React, { useState } from "react";
import useimage from "../assets/address.jpg";
import Modal from "../components/Modal";

const cardData = [
  { name: "sone tvdx sfgff", reward: "10", level: "1", id: 1 },
  { name: "husus autemfe effe", reward: "15", level: "2", id: 2 },
  { name: "Idan usbw ffefef", reward: "20", level: "3", id: 3 },
  { name: "besos corn", reward: "25", level: "4", id: 4 },
  { name: "nacy colen fdsi udf dfdf", reward: "30", level: "5", id: 5 },
];

const Allquiz = () => {
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
          {/* Games */}

          <div className="col-lg-12">
            <h5 className="card-title">Quests</h5>

            <div className="row">
              {cardData.map((card) => (
                <div key={card.id} className="col-lg-6">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img
                            src={useimage}
                            style={{
                              height: "10rem",
                              width: "100px",
                              borderRadius: "10px",
                            }}
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <h4>
                            <a href="#">{card.name}</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                          </p>

                          <button
                            className="text-right"
                            onClick={handleGamemodalClick}
                            id="followbtn"
                          >
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
          {/* End games */}
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

export default Allquiz;
