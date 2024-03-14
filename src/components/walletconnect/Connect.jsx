import React, { useEffect, useState } from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";
import { Link } from "react-router-dom";
import logo from "../../assets/address.jpg";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

export const appDetails = {
  name: "Geniusmind",
  icon: "https://ibb.co/CK3qd2M",
};

function authenticate() {
  showConnect({
    appDetails,
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}

const ConnectWallet = () => {
  const [mounted, setMounted] = useState(false);
  const [address, setAddress] = useState("");
  useEffect(() => {
    setMounted(true);
    if (userSession.isUserSignedIn()) {
      setAddress(
        `${userSession
          .loadUserData()
          .profile.stxAddress.mainnet.slice(
            0,
            4
          )}...${userSession
          .loadUserData()
          .profile.stxAddress.mainnet.slice(-4)}`
      );
    }
  }, []);

  if (mounted && userSession.isUserSignedIn()) {
    return (
      <>
        <ul className="d-flex align-items-center">
          <li class="nav-item">
            <Link class="nav-link nav-icon" to="/settings">
              Host
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link nav-icon" to="/settings">
              <i class="bi bi-gear"></i>
            </Link>
          </li>

          <li className="nav-item pe-3">
            <Link
              className="nav-link nav-profile d-flex align-items-center pe-0"
              to="/settings"
              data-bs-toggle="dropdown"
            >
              <img src={logo} alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block ps-2">{address}</span>
            </Link>
          </li>
          <li className="nav-item pe-3">
            <a href="/">
              <button
                onClick={disconnect}
                type="button"
                className="btn btn-danger"
              >
                Disconnect
              </button>
            </a>
          </li>
        </ul>
      </>
    );
  }

  return (
    <ul className="d-flex align-items-center">
      <li className="nav-item pe-3">
        <button
          onClick={authenticate}
          type="button"
          className="btn btn-primary"
        >
          Connect Wallet
        </button>
      </li>
    </ul>
  );
};

export default ConnectWallet;
