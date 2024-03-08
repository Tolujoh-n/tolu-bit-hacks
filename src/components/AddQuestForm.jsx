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
};

const QuestForm = ({ totalLevels }) => {
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
    console.log("Game Submitted:", { totalLevels, quests });
  };

  return (
    <div style={styles.formContainer}>
      {quests.map((quest, index) => (
        <div key={index} style={styles.questContainer}>
          <h4>Quest {quest.levelNumber}</h4>
          <div>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              value={quest.name}
              onChange={(e) => handleQuestChange(index, "name", e.target.value)}
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>Description:</label>
            <textarea
              value={quest.description}
              onChange={(e) =>
                handleQuestChange(index, "description", e.target.value)
              }
              style={styles.textarea}
            />
          </div>
          <div>
            <label style={styles.label}>Level Reward:</label>
            <input
              type="number"
              value={quest.levelReward}
              onChange={(e) =>
                handleQuestChange(
                  index,
                  "levelReward",
                  parseFloat(e.target.value)
                )
              }
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>Timer (seconds):</label>
            <input
              type="number"
              value={quest.timer}
              onChange={(e) =>
                handleQuestChange(index, "timer", parseInt(e.target.value))
              }
              style={styles.input}
            />
          </div>
        </div>
      ))}
      <button onClick={handleAddQuest} style={styles.button}>
        Add Quest
      </button>
      <button onClick={handleSubmit} style={styles.button}>
        Submit Game
      </button>
    </div>
  );
};

const AddQuestForm = () => {
  const [gameInfo, setGameInfo] = useState({
    gameImage: "",
    gameName: "",
    totalLevels: 0,
  });

  return (
    <div style={styles.container}>
      <h1>Set Game</h1>
      <div>
        <label style={styles.label}>Game Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setGameInfo({ ...gameInfo, gameImage: e.target.value })
          }
          style={styles.input}
        />
      </div>
      <div>
        <label style={styles.label}>Game Name:</label>
        <input
          type="text"
          value={gameInfo.gameName}
          onChange={(e) =>
            setGameInfo({ ...gameInfo, gameName: e.target.value })
          }
          style={styles.input}
        />
      </div>
      <div>
        <label style={styles.label}>Total Levels:</label>
        <input
          type="number"
          value={gameInfo.totalLevels}
          onChange={(e) =>
            setGameInfo({ ...gameInfo, totalLevels: parseInt(e.target.value) })
          }
          style={styles.input}
        />
      </div>
      {/* <button onClick={() => console.log('Image:', gameInfo.gameImage)} style={styles.button}>
        Preview Image
      </button> */}
      {gameInfo.totalLevels > 0 && (
        <QuestForm totalLevels={gameInfo.totalLevels} />
      )}
    </div>
  );
};

export default AddQuestForm;
