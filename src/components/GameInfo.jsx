import React from 'react'
import xp from "../assets/xp.jpg"



const GameInfo = () => {
  

  return (
    <>
     

      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-6 col-md-6">
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">Level Reward</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    {/* <i className="bi bi-currency-dollar"></i> */}
                    <img id='balance' src={xp} alt='' />
                  </div>
                  <div className="ps-3">
                  <h6>10 XP</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-md-6">
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">Game Earnings</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    {/* <i className="bi bi-currency-dollar"></i> */}
                    <img id='balance' src={xp} alt='' />
                  </div>
                  <div className="ps-3">
                  <h6>400 XP</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  )
}

export default GameInfo
