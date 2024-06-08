import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Quizcategory = ({ activeLink, setActive }) => {
  const quizcategory = [
    { id: 1, name: "Science", icon: "bi-binoculars" },
    { id: 2, name: "Art", icon: "bi-palette" },
    { id: 3, name: "Commerce", icon: "bi-cash" },
    { id: 4, name: "Blockchain", icon: "bi-boxes" },
    { id: 5, name: "History", icon: "bi-book" },
    { id: 6, name: "Sport", icon: "bi-dribbble" },
  ];

  const userlist = [
    { id: 1, name: "Wallet", icon: "bi-wallet" },
    { id: 2, name: "Notification", icon: "bi-bell" },
    { id: 3, name: "Leaderboard", icon: "bi-award" },
    { id: 4, name: "Profile", icon: "bi-person" },
  ];

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname, setActive]);

  const isActive = (path) => {
    return activeLink === path;
  };

  return (
    <aside id="sidebar" className={`sidebar ${"ml-[300px]"}`}>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/">
            <i className="bi bi-house"></i>
            <span>Home</span>
          </Link>
        </li>
        {quizcategory.map((quiz) => (
          <li key={quiz.id} className="nav-item">
            <Link
              className={`nav-link gap-1 collapsed ${
                isActive(`/${quiz.name.toLowerCase()}`) ? "active" : ""
              }`}
              to={`/${quiz.name.toLowerCase()}`}
            >
              <i className={`bi ${quiz.icon}`}></i>
              <span>{quiz.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <ul className="sidebar-nav" id="sidebar-nav">
        {userlist.map((user) => (
          <li key={user.id} className="nav-item">
            <Link
              className={`nav-link scrollto ${
                isActive(`/${user.name.toLowerCase()}`) ? "active" : ""
              }`}
              onClick={() => setActive(`/${user.name.toLowerCase()}`)}
              to={`/${user.name.toLowerCase()}`}
            >
              <i className={`bi ${user.icon}`}></i>
              <span>{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Quizcategory;
