import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/address.jpg";

// import logo from "../assets/img/logo.png";

const Navbar = () => {
  const WalletConnected = true;
  //   const truncatedAddress = isWalletConnected
  //     ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
  //     : "";

  return (
    <header
      id="header"
      className="header fixed-top d-flex
     align-items-center"
    >
      <div className="d-flex align-items-center justify-content-between">
        <i
          className="bi bi-list toggle-sidebar-btn
        hover:text-black mr-3
        lg:hidden"
        ></i>
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" className="h-[70px] w-[70px] object-cover" />
          <span className="d-none d-lg-block">ChainXP</span>
        </Link>
      </div>
      {/* End Logo */}

      {/* End Search Bar */}
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li class="nav-item">
            <Link class="nav-link nav-icon" to="/settings">
              <i class="bi bi-gear"></i>
            </Link>
          </li>

          {!WalletConnected ? (
            <>
              <li className="nav-item pe-3">
                <Link
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  to="/profile"
                  data-bs-toggle="dropdown"
                >
                  <img src={logo} alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block ps-2">oxwk...wdj</span>
                </Link>
              </li>
              <li className="nav-item pe-3">
                <a href="/">
                  <button type="button" className="btn btn-danger">
                    Disconnect
                  </button>
                </a>
              </li>
            </>
          ) : (
            <li className="nav-item pe-3">
              <button type="button" className="btn btn-warning">
                Connect Wallet
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* End Icons Navigation */}
    </header>
    /* End Header */
  );
};

export default Navbar;
