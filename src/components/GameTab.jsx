import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/address.jpg";

const gameData = [
  { id: 1, name: "Game 1: The gamified" },
  { id: 2, name: "Game 2: The second game" },
  { id: 3, name: "Game 3: The third game" },
  { id: 4, name: "Game 4: The third game" },
  { id: 5, name: "Game 5: The third game" },
  { id: 6, name: "Game 6: The third game" },
];

const GameTab = () => {
  return (
    <aside id="sidebar" className={`sidebar ${"ml-[300px]"}`}>
      <ul className="sidebar-nav" id="sidebar-nav">
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              style={{ padding: "10px", borderRadius: "20px" }}
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button
              style={{
                background: "yellow",
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
        <li className="nav-heading">Game</li>
        {gameData.map((game) => (
          <li key={game.id} className="nav-item">
            <Link className="nav-link gap-1 collapsed" to="/games">
              <img
                src={logo}
                alt=""
                className=""
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
              />
              <span>{game.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default GameTab;
