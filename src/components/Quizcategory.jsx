import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/address.jpg";

const quizcategory = [
  { id: 1, name: "Science", icon: "bi-book" },
  { id: 2, name: "Art", icon: "bi-book" },
  { id: 3, name: "Commerce", icon: "bi-book" },
  { id: 4, name: "Blockchain", icon: "bi-book" },
  { id: 5, name: "History", icon: "bi-book" },
  { id: 6, name: "Sport", icon: "bi-book" },
];

const userlist = [
  { id: 1, name: "Wallet", icon: "bi-book" },
  { id: 2, name: "Notification", icon: "bi-book" },
  { id: 3, name: "Profile", icon: "bi-book" },
];

const Quizcategory = () => {
  return (
    <aside id="sidebar" className={`sidebar ${"ml-[300px]"}`}>
      {/* <li className="nav-heading">Game</li> */}
      <ul className="sidebar-nav" id="sidebar-nav">
        {quizcategory.map((quiz) => (
          <li key={quiz.id} className="nav-item">
            <Link className="nav-link gap-1 collapsed" to="/topquiz">
              <i className="bi-book"></i>
              <span>{quiz.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <ul className="sidebar-nav" id="sidebar-nav">
        {userlist.map((user) => (
          <li key={user.id} className="nav-item">
            <Link className="nav-link gap-1 collapsed" to="/games">
              <i className="bi-person"></i>
              <span>{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Quizcategory;
