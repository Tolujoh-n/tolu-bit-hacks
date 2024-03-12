// pages/index.js
import React, { useState } from "react";

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

const QuizForm = ({ totalLevels }) => {
  const [quests, setQuests] = useState([]);

  const handleAddQuest = () => {
    setQuests((prevQuests) => [
      ...prevQuests,
      {
        name: "",
        description: "",
        levelReward: 0,
        levelNumber: prevQuests.length + 1,
        timer: 0,
      },
    ]);
  };

  const handleQuestChange = (index, field, value) => {
    setQuests((prevQuests) =>
      prevQuests.map((quest, i) =>
        i === index ? { ...quest, [field]: value } : quest
      )
    );
  };

  const handleSubmit = () => {
    console.log("Quiz Submitted:", { totalLevels, quests });
  };

  return (
    <div style={styles.formContainer}>
      {quests.map((quest, index) => (
        <div key={index} style={styles.questContainer}>
          <h4>Question {quest.levelNumber}</h4>
          <div className="row gy-4">
            <div className="col-md-12">
              <div className="form-group">
                <label style={styles.label}>Question:</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="productName"
                  placeholder="Type your Questions"
                  value={quest.description}
                  onChange={(e) =>
                    handleQuestChange(index, "description", e.target.value)
                  }
                  style={styles.textarea}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="productQuantity"
                  placeholder="Option 1"
                  style={styles.input}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="productQuantity"
                  placeholder="Option 2"
                  style={styles.input}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="productQuantity"
                  placeholder="Option 3"
                  style={styles.input}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="productQuantity"
                  placeholder="Option 4"
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-between align-items-center">
        {/* First word with icon */}
        <div>
          <button onClick={handleAddQuest} id="followbtn">
            Add Question
          </button>
          <button onClick={handleSubmit} id="followbtn">
            AI Wrong Options
          </button>
        </div>
        {/* Second word */}
        <div>
          <button onClick={handleSubmit} id="followbtn">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

const AddQuizForm = () => {
  const [gameInfo, setGameInfo] = useState({
    gameImage: "",
    gameName: "",
    totalLevels: 0,
    rewards: [
      { label: "60% - 69%", value: 0 },
      { label: "70% - 79%", value: 0 },
      { label: "80% - 100%", value: 0 },
    ],
  });

  const handleRewardChange = (index, value) => {
    setGameInfo((prevState) => {
      const rewards = [...prevState.rewards];
      rewards[index].value = value;
      return { ...prevState, rewards };
    });
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
              id="productName"
              placeholder="Enter Quiz Title"
              value={gameInfo.gameName}
              onChange={(e) =>
                setGameInfo({ ...gameInfo, gameName: e.target.value })
              }
              style={styles.input}
              required
            />
          </div>
          <div className="form-group">
            <label style={styles.label}>Price Pool:</label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="Price Pool (STX)"
              value={gameInfo.totalLevels}
              onChange={(e) =>
                setGameInfo({
                  ...gameInfo,
                  totalLevels: parseInt(e.target.value),
                })
              }
              style={styles.input}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label style={styles.label}>Quiz Image:</label>
            <input
              type="file"
              className="form-control"
              id="productimgs"
              accept="image/*"
              onChange={(e) =>
                setGameInfo({ ...gameInfo, gameImage: e.target.value })
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
              id="productQuantity"
              placeholder="Participants Entrance Fee"
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
                          handleRewardChange(index, e.target.value)
                        }
                        style={styles.input}
                      />
                    </td>
                  </tr>
                ))}
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
            />
          </div>
        </div>
      </div>

      {gameInfo.totalLevels > 0 && (
        <QuizForm totalLevels={gameInfo.totalLevels} />
      )}
    </div>
  );
};

export default AddQuizForm;
