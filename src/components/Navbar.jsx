import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/geniuslob.png";
import Connectwallet from "./walletconnect/Connectwallet";

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
          <img
            style={{ borderRadius: "5px" }}
            src={logo}
            alt=""
            className="h-[70px] w-[70px] object-cover"
          />
          <span className="d-none d-lg-block">eniusmind</span>
        </Link>
      </div>
      {/* End Logo */}

      {/* search bar */}
      <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            style={{ padding: "10px", borderRadius: "20px", color: "#2f4553" }}
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button
            style={{
              background: "#2f4553",
              padding: "10px",
              borderRadius: "50%",
            }}
            type="submit"
            title="Search"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      <nav className="header-nav ms-auto">
        <Connectwallet />
      </nav>

      {/* End Icons Navigation */}
    </header>
    /* End Header */
  );
};

export default Navbar;
