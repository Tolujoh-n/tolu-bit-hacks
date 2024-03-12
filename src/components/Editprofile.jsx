import React from "react";
import profile from "../assets/address.jpg";

const Editprofile = () => {
  return (
    <>
      <form>
        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="profileImage"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Profile Image
          </label>
          <div className="col-md-8 col-lg-9">
            <img
              style={{ height: "100px", width: "100px" }}
              src={profile}
              alt="Profile"
            />
            <div className="pt-2">
              <a
                href="#"
                className="btn btn-primary btn-sm"
                title="Upload new profile image"
              >
                <i className="bi bi-upload"></i>
              </a>
              <a
                href="#"
                className="btn btn-danger btn-sm"
                title="Remove my profile image"
              >
                <i className="bi bi-trash"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="fullName"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Full Name
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="fullName"
              value="Tolu John"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="about"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Bio
          </label>
          <div className="col-md-8 col-lg-9">
            <textarea
              name="about"
              className="form-control"
              id="about"
              style={{ height: "100px" }}
            >
              I'm an experienced full-stack blockchain developer with a focus on
              frontend development, I'm eager to join teams, contribute my
              expertise, and offer my skills to enhance its success. I'd also
              love to be part of teams for hacks and any collaborative
              opportunity.
            </textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="Email"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Email
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="email"
              type="email"
              className="form-control"
              id="Email"
              value="tolujohnofficial@gmail.com"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="Twitter"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Twitter Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="twitter"
              type="text"
              className="form-control"
              id="Twitter"
              value="https://twitter.com/#"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="Facebook"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Facebook Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="facebook"
              type="text"
              className="form-control"
              id="Facebook"
              value="https://facebook.com/#"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="Instagram"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Instagram Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="instagram"
              type="text"
              className="form-control"
              id="Instagram"
              value="https://instagram.com/#"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="Linkedin"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Linkedin Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="linkedin"
              type="text"
              className="form-control"
              id="Linkedin"
              value="https://linkedin.com/#"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default Editprofile;
