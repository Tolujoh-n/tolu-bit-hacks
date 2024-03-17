import React, { useState, useEffect } from "react";
import logo from "../assets/address.jpg";

const Modal = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(600); // For testing, changed time to 10 seconds
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  // Define quiz questions
  const quizQuestions = [
    {
      question: "What is the powerhouse of the cell?",
      options: [
        "Golgi apparatus",
        "Nucleus",
        "Mitochondria",
        "Endoplasmic reticulum",
      ],
      correctAnswer: "Mitochondria",
    },
    {
      question:
        "Which process allows plants to convert sunlight into chemical energy?",
      options: ["Respiration", "Photosynthesis", "Osmosis", "Diffusion"],
      correctAnswer: "Photosynthesis",
    },
    {
      question:
        "What is the primary function of red blood cells in the human body?",
      options: [
        "Fighting infections",
        "Transporting oxygen",
        "Producing antibodies",
        "Digesting food",
      ],
      correctAnswer: "Transporting oxygen",
    },
    {
      question:
        "Which of the following is NOT a function of the skeletal system?",
      options: [
        "Providing structural support",
        "Producing blood cells",
        "Facilitating movement",
        "Storing fat",
      ],
      correctAnswer: "Storing fat",
    },
    {
      question: "What is the longest bone in the human body?",
      options: ["Radius", "Femur", "Tibia", "Humerus"],
      correctAnswer: "Femur",
    },
    {
      question:
        "Which organ is responsible for filtering waste products from the blood?",
      options: ["Liver", "Kidney", "Pancreas", "Spleen"],
      correctAnswer: "Kidney",
    },
    {
      question:
        "What is the chemical responsible for carrying genetic information in living organisms?",
      options: ["RNA", "DNA", "Protein", "Carbohydrate"],
      correctAnswer: "DNA",
    },
    {
      question:
        "Which part of a plant is responsible for the process of transpiration?",
      options: ["Stomata", "Petals", "Roots", "Stem"],
      correctAnswer: "Stomata",
    },
    {
      question:
        "What is the unit of heredity that is passed from parents to offspring?",
      options: ["Allele", "Chromosome", "Gene", "Phenotype"],
      correctAnswer: "Gene",
    },
    {
      question:
        "What is the process by which cells replicate their DNA and divide into two identical daughter cells?",
      options: ["Mitosis", "Meiosis", "Fertilization", "Apoptosis"],
      correctAnswer: "Mitosis",
    },
  ];

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setShowMessage(true); // Show message when time elapses
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clear the interval when component unmounts or time reaches 0
    return () => clearInterval(timer);
  }, []);

  // Handle next button click
  const handleNext = () => {
    if (currentQuestion < quizQuestions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  // Handle previous button click
  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  // Handle option selection
  const handleOptionSelect = (selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: selectedOption,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Here you can send the answers to the database or perform any other action
    console.log("Answers:", answers);
    setShowMessage(true); // Show message when user submits
  };

  // Handle redirection to home page
  const handleRedirect = () => {
    // Perform redirection logic here
    window.location.href = "/quizInfo";
    console.log("Redirecting to home page...");
  };

  // const handleOptionClick = () => {
  //   const optionButton = document.getElementById("optionbut");
  //   optionButton.classList.toggle("active");
  // };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        {/* <span style={{ cursor: "pointer" }} className="close" onClick={onClose}>
          &times;
        </span> */}

        {showMessage ? (
          <>
            <div className="maincard">
              <div
                style={{
                  background: "#213743",
                  border: "5px solid #b1bad3",
                  // borderStyle: "dashed",
                }}
                className="card info-card revenue-card"
              >
                <div className="card-body">
                  <h6 style={{ color: "#d5dceb" }}>
                    Thanks for participating!
                  </h6>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="d-flex justify-content-between">
                      {/* option */}
                      <div className="flex-fill mr-2">
                        <button
                          onClick={handleRedirect}
                          className="btn btn-primary btn-block"
                          id="optionbut"
                        >
                          See Results
                        </button>
                      </div>
                      {/* Second word */}
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center">
              {/* First word with icon */}
              <div>
                <span style={{ color: "#b1bad3" }}>
                  Question: {currentQuestion} / {quizQuestions.length}
                </span>
              </div>
              {/* Second word */}
              <div>
                <span style={{ color: "#b1bad3" }}>
                  {" "}
                  {Math.floor(timeLeft / 60)}:
                  {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
                </span>
              </div>
            </div>
            {currentQuestion <= quizQuestions.length && (
              <div className="maincard">
                <div
                  style={{
                    background: "#213743",
                    border: "5px solid #b1bad3",
                    borderStyle: "dashed",
                  }}
                  className="card info-card revenue-card"
                >
                  <div className="card-body">
                    <h6 style={{ color: "#d5dceb" }}>
                      {quizQuestions[currentQuestion - 1].question}
                    </h6>
                  </div>
                </div>

                <div className="container">
                  {quizQuestions[currentQuestion - 1].options.map(
                    (option, index) =>
                      index % 2 === 0 && (
                        <div key={index} className="row mb-2">
                          <div className="col-md-6">
                            <button
                              onClick={() => handleOptionSelect(option)}
                              className={`btn btn-block ${
                                answers[currentQuestion] === option
                                  ? "btn-success"
                                  : "btn-secondary"
                              }`}
                            >
                              {option}
                            </button>
                          </div>
                          <div className="col-md-6">
                            <button
                              onClick={() =>
                                handleOptionSelect(
                                  quizQuestions[currentQuestion - 1].options[
                                    index + 1
                                  ]
                                )
                              }
                              className={`btn btn-block ${
                                answers[currentQuestion] ===
                                quizQuestions[currentQuestion - 1].options[
                                  index + 1
                                ]
                                  ? "btn-success"
                                  : "btn-secondary"
                              }`}
                            >
                              {
                                quizQuestions[currentQuestion - 1].options[
                                  index + 1
                                ]
                              }
                            </button>
                          </div>
                        </div>
                      )
                  )}
                </div>

                <br />
                <div className="d-flex justify-content-between align-items-center">
                  {/* First word with icon */}
                  <div>
                    <button onClick={handlePrevious} id="followbtn">
                      Previous
                    </button>
                    <button onClick={handleNext} id="followbtn">
                      Next
                    </button>
                  </div>
                  {/* Second word */}
                  <div>
                    <button onClick={handleSubmit} id="followbtn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

// Inline CSS styles for the modal
const header = {
  textAlign: "center",
  color: "whitesmoke",
};
const modalStyle = {
  display: "block",
  position: "fixed",
  zIndex: "9999",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
};

const modalContentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  width: "auto",
  minWidth: "300px",
  background: "#1a2c38",
  border: "1px solid white",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};
const cancelbut = {
  /* Your button style here */
  padding: "8px 12px",
  backgroundColor: "rgb(129, 128, 125)",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
  marginRight: "8px",
};

const submitbut = {
  /* Your button style here */
  padding: "8px 12px",
  backgroundColor: "white",
  color: "black",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "10px",
  marginRight: "8px",
};
