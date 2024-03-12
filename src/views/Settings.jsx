import React from "react";
import profile from "../assets/address.jpg";
import AddQuestForm from "../components/AddQuizForm";
import Quizlist from "../components/organizer/Quizlist";
import Editprofile from "../components/Editprofile";
import Profile from "../components/Profile";

function Settings() {
  return (
    <>
      <div className="col-lg-12">
        <section className="section profile">
          <div className="row">
            <div className="col-xl-12">
              <div style={{ background: "#213743" }} className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          color: "whitesmoke",
                          background: "transparent",
                        }}
                        data-toggle="tab"
                        data-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          color: "whitesmoke",
                          background: "transparent",
                        }}
                        data-toggle="tab"
                        data-target="#game-settings"
                      >
                        Host
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          color: "whitesmoke",
                          background: "transparent",
                        }}
                        data-toggle="tab"
                        data-target="#game-list"
                      >
                        Host List
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{
                          color: "whitesmoke",
                          background: "transparent",
                        }}
                        data-toggle="tab"
                        data-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-edit"
                      id="profile-edit"
                    >
                      <Editprofile />
                    </div>

                    <div className="tab-pane fade pt-3" id="game-settings">
                      <AddQuestForm />
                    </div>

                    <div className="tab-pane fade pt-3" id="game-list">
                      <Quizlist />
                    </div>

                    <div className="tab-pane fade pt-3" id="profile-settings">
                      <Profile />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Settings;
