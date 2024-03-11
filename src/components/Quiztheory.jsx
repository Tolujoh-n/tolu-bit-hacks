import React, { useState } from "react";
import useimage from "../assets/address.jpg";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Quiztheory = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          {/* QUiz */}

          <div className="col-lg-12">
            <h1 className="card-title">ABOUT THE CHALLENGE</h1>
            <p style={{ color: "#b1bad3" }}>
              Welcome to the Meta Quest Presence Platform Hackathon: a challenge
              for all developers to practice their mixed reality development
              skills using Presence Platform, and innovate on new categories of
              Meta Quest applications. In this hackathon, you will leverage
              Presence Platform capabilities to build creative prototypes of
              innovative content. With the Mixed Reality features on Meta Quest
              3, we are seeing entirely new categories of applications emerge
              driven by developer innovation. To amplify this experimentation,
              the focus of this hackathon will be on select categories,
              including Social or Casual Gaming, Hobbies, Interests &
              Skill-Building, and Utility & Design Experiences.
            </p>
            <iframe
              src="https://www.youtube.com/watch?v=bg7wQMkj1Zg"
              style={{ width: "100%", height: "400px", border: "none" }}
              title="Embedded Content"
            ></iframe>
          </div>
          {/* End QUiz */}
        </div>
      </div>
    </>
  );
};

export default Quiztheory;
