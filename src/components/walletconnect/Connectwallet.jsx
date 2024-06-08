import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/address.jpg";
import { ethers } from "ethers";

const Connectwallet = () => {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setConnected(true);
        } else {
          setConnected(false);
        }
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      window.open("https://metamask.io/download.html", "_blank");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      setConnected(true);
      await switchNetwork();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setAccount("");
  };

  const switchNetwork = async () => {
    const chainId = "0x169"; // 361 in hexadecimal
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId,
                chainName: "Theta Mainnet",
                rpcUrls: ["https://eth-rpc-api.thetatoken.org/rpc"],
                nativeCurrency: {
                  name: "TFUEL",
                  symbol: "TFUEL",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.thetatoken.org/"],
              },
            ],
          });
        } catch (addError) {
          console.error("Failed to add network:", addError);
        }
      }
    }
  };

  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
  };

  return (
    <>
      {connected ? (
        <ul className="d-flex align-items-center">
          <li className="nav-item">
            <Link className="nav-link nav-icon" to="/settings">
              Host
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-icon" to="/settings">
              <i className="bi bi-gear"></i>
            </Link>
          </li>
          <li className="nav-item pe-3">
            <Link
              className="nav-link nav-profile d-flex align-items-center pe-0"
              to="/settings"
              data-bs-toggle="dropdown"
            >
              <img src={logo} alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block ps-2">
                {shortenAddress(account)}
              </span>
            </Link>
          </li>
          <li className="nav-item pe-3">
            <button
              onClick={disconnectWallet}
              type="button"
              className="btn btn-danger"
            >
              Disconnect
            </button>
          </li>
        </ul>
      ) : (
        <ul className="d-flex align-items-center">
          <li className="nav-item pe-3">
            <button
              onClick={connectWallet}
              type="button"
              className="btn btn-primary"
            >
              Connect Wallet
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Connectwallet;
