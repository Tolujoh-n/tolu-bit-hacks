import React from "react";

const Profile = () => {
  return (
    <>
      <form>
        <div className="row mb-3">
          <label
            for="fullName"
            className="col-md-4 col-lg-3 col-form-label"
            style={{ color: "#b1bad3" }}
          >
            Email Notifications
          </label>
          <div className="col-md-8 col-lg-9">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="changesMade"
                checked
              />
              <label
                className="form-check-label"
                for="changesMade"
                style={{ color: "#b1bad3" }}
              >
                New Quiz updates on the platform
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="newProducts"
                checked
              />
              <label
                className="form-check-label"
                for="newProducts"
                style={{ color: "#b1bad3" }}
              >
                Information on new platform and services
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="proOffers"
              />
              <label
                className="form-check-label"
                for="proOffers"
                style={{ color: "#b1bad3" }}
              >
                Marketing and promo offers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="securityNotify"
                checked
                disabled
              />
              <label className="form-check-label" for="securityNotify">
                Security alerts
              </label>
            </div>
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

export default Profile;
