import React from "react";
import Topgenius from "./Topgenius";
import Toporganizer from "./Toporganizer";

const Leaderboard = () => {
  return (
    <>
      <div className="col-xl-12">
        <h5 className="card-title">Leatherboard</h5>
        <div className="row">
          <div className="leaderboard">
            <ul
              style={{ background: "#1a2c38" }}
              className="nav nav-tabs nav-tabs-bordered"
            >
              <li className="nav-item">
                <button
                  style={{ color: "white" }}
                  className="nav-link active"
                  data-toggle="tab"
                  data-target="#game-settings"
                >
                  Genius
                </button>
              </li>

              <li className="nav-item">
                <button
                  style={{ color: "white" }}
                  className="nav-link"
                  data-toggle="tab"
                  data-target="#game-list"
                >
                  Organizer
                </button>
              </li>
            </ul>
            <br />
            <div className="tab-content pt-2">
              <div
                style={{ borderRadius: "5px" }}
                className="tab-pane fade show active"
                id="game-settings"
              >
                <Topgenius />
              </div>

              <div
                style={{ borderRadius: "5px" }}
                className="tab-pane fade"
                id="game-list"
              >
                <Toporganizer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
