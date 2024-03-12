import React from "react";
import profile from "../assets/address.jpg";
import { Link } from "react-router-dom";

function Profile({ user }) {
  return (
    <>
      <div className="col-lg-12">
        <section className="section profile">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img src={profile} alt="Profile" className="rounded-circle" />
                  <h2>Tolu John</h2>
                  {/* <h2>tolujohnofficial@gmail.com</h2> */}
                  <div className="social-links mt-2">
                    <a href="#" className="twitter" target="_blank">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="facebook" target="_blank">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="instagram" target="_blank">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="linkedin" target="_blank">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-body pt-3">
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">
                        I'm an experienced full-stack blockchain developer with
                        a focus on frontend development, I'm eager to join
                        teams, contribute my expertise, and offer my skills to
                        enhance its success. I'd also love to be part of teams
                        for hacks and any collaborative opportunity.
                      </p>
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

export default Profile;
