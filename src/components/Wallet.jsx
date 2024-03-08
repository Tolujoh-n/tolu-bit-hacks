import React from "react";
import xp from "../assets/xp.jpg";
import ll from "../assets/ll.png";
import Sidebar from "./Sidebar";

const Wallet = () => {
  return (
    <>
      <div className="pagetitle">
        <h1>Wallets</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/wallet">Wallets</a>
            </li>
            <li className="breadcrumb-item active">mywallet</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}

      <div className="col-lg-8">
        <div className="row">
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">XP</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    {/* <i className="bi bi-currency-dollar"></i> */}
                    <img id="balance" src={xp} alt="" />
                  </div>
                  <div className="ps-3">
                    <h6>0 XP</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">Light Link</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    {/* <i className="bi bi-currency-dollar"></i> */}
                    <img id="balance" src={ll} alt="" />
                  </div>
                  <div className="ps-3">
                    <h6>0 LL</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Wallet;
