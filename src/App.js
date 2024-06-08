import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Quizcategory from "./components/Quizcategory";
import Settings from "./views/Settings";
import Genius from "./views/Allquiz";
import Topquiz from "./components/Topquiz";
import Footer from "./components/Footer";
import QuizInfo from "./components/QuizInfo";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Connectwallet from "./components/walletconnect/Connectwallet";
// Css files
import "./assets/vendor/simple-datatables/style.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";

const App = () => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <div className="">
      <Router>
        <Navbar />
        <Quizcategory activeLink={activeLink} setActive={setActiveLink} />
        <main id="main" className="main">
          <section className="section dashboard">
            <div className="row">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Topquiz />} />
                <Route path="/Science" element={<Topquiz />} />
                <Route path="/Art" element={<Topquiz />} />
                <Route path="/Commerce" element={<Topquiz />} />
                <Route path="/Blockchain" element={<Topquiz />} />
                <Route path="/History" element={<Topquiz />} />
                <Route path="/Sport" element={<Topquiz />} />
                <Route path="/Notification" element={<Topquiz />} />
                <Route path="/Wallet" element={<Topquiz />} />
                <Route path="/Profile" element={<Settings />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/genius" element={<Genius />} />
                <Route path="/quizInfo" element={<QuizInfo />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
              </Routes>
            </div>
          </section>
        </main>
      </Router>
      <Connectwallet />
      <Footer />
    </div>
  );
};

export default App;
