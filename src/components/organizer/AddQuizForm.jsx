import React, { useState } from "react";
import axios from "axios";
import QuizForm from "./QuizForm";

const styles = {
  container: {
    color: "white",
    backgroundColor: "transparent",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  formContainer: {
    marginTop: "20px",
  },
  questContainer: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "20px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "orange",
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    marginRight: "10px",
  },
  table: {
    width: "100%",
    marginBottom: "10px",
  },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
};

const AddQuizForm = () => {
  const [gameInfo, setGameInfo] = useState({
    quizImage: "",
    quizName: "",
    quizDescription: "", // Updated state
    pricepool: 0,
    entranceFee: 0, // Corrected key name
    timer: 0, // Corrected key name
    rewards: [
      { label: "60% - 69%", value: 0 },
      { label: "70% - 79%", value: 0 },
      { label: "80% - 100%", value: 0 },
    ],
  });

  // Function to handle changes in quiz description
  const handleQuizDescriptionChange = (e) => {
    setGameInfo({ ...gameInfo, quizDescription: e.target.value });
  };

  // Function to handle changes in quiz title
  const handleQuizTitleChange = (e) => {
    setGameInfo({ ...gameInfo, quizName: e.target.value });
  };

  // Function to handle changes in rewards
  const handleRewardChange = (index, value) => {
    setGameInfo((prevState) => {
      const rewards = [...prevState.rewards];
      rewards[index].value = value;
      const pricepool = rewards.reduce(
        (total, reward) => total + reward.value,
        0
      );
      return { ...prevState, rewards, pricepool };
    });
  };

  const handleSubmit = (quizData) => {
    console.log("Quiz Data Submitted:", quizData);
    console.log("Quiz Information Submitted:", gameInfo);
    // You can send quizData to the database here
  };

  return (
    <div style={styles.container}>
      <h1>Quiz Information</h1>
      <div className="row gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label style={styles.label}>Quiz Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Quiz Title"
              value={gameInfo.quizName}
              onChange={handleQuizTitleChange}
              style={styles.input}
              required
            />
          </div>
          <div className="form-group">
            <label style={styles.label}>Price Pool:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Price Pool (STX)"
              value={gameInfo.pricepool}
              onChange={(e) =>
                setGameInfo({
                  ...gameInfo,
                  pricepool: parseInt(e.target.value),
                })
              }
              style={styles.input}
              required
              disabled // Disable pricepool input
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: "bold" }} htmlFor="find">
              Quiz Visibility
            </label>
            <select id="find" className="form-select mx-2" required>
              <option selected>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label style={styles.label}>Quiz Image:</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) =>
                setGameInfo({ ...gameInfo, quizImage: e.target.value })
              }
              style={styles.input}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productQuantity">Entrance Fee:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Participants Entrance Fee"
              value={gameInfo.entranceFee} // Corrected key name
              onChange={(e) =>
                setGameInfo({
                  ...gameInfo,
                  entranceFee: parseInt(e.target.value), // Corrected key name
                })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productQuantity">Timer(minutes):</label>
            <input
              type="number"
              className="form-control"
              placeholder="Set minutes for quiz"
              value={gameInfo.timer} // Corrected key name
              onChange={(e) =>
                setGameInfo({
                  ...gameInfo,
                  timer: parseInt(e.target.value), // Corrected key name
                })
              }
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="rewards">Winners Rewards</label>
            <table style={styles.table}>
              <tbody>
                {gameInfo.rewards.map((reward, index) => (
                  <tr key={index} style={styles.tableRow}>
                    <td>{reward.label}</td>
                    <td>
                      <input
                        type="number"
                        value={reward.value}
                        onChange={(e) =>
                          handleRewardChange(index, parseInt(e.target.value))
                        }
                        style={styles.input}
                      />
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td>Price Pool:</td>
                  <td>{gameInfo.pricepool}</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="form-group">
            <label htmlFor="description">Quiz Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Quiz Description"
              value={gameInfo.quizDescription}
              onChange={handleQuizDescriptionChange}
            />
          </div>
        </div>
      </div>

      {/* Render the QuizForm component */}
      {gameInfo.pricepool > 0 && (
        <QuizForm
          pricepool={gameInfo.pricepool}
          entranceFee={gameInfo.entranceFee}
          timer={gameInfo.timer}
          onSubmit={handleSubmit}
          quizTitle={gameInfo.quizName}
          quizDescription={gameInfo.quizDescription}
          rewards={gameInfo.rewards}
        />
      )}
    </div>
  );
};

export default AddQuizForm;
