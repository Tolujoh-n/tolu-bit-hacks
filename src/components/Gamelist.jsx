// pages/index.js
import React, { useState } from "react";

const styles = {
  container: {
    color: "white",
    backgroundColor: "transparent",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
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

const QuestForm = ({ quests, handleQuestChange, handleAddQuest }) => {
  return (
    <div>
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
    </div>
  );
};

const GameListComponent = ({ games, handleEditGame, handleSaveEditedGame }) => {
  const [editingGame, setEditingGame] = useState(null);

  const handleEdit = (game) => {
    setEditingGame(game);
    handleEditGame(game);
  };

  const handleSave = () => {
    handleSaveEditedGame(editingGame);
    setEditingGame(null);
  };

  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            {game.gameName}{" "}
            <button onClick={() => handleEdit(game)}>Edit Game</button>
          </li>
        ))}
      </ul>
      {editingGame && (
        <div>
          <h2>Edit Game</h2>
          <QuestForm
            quests={editingGame.quests || []}
            handleQuestChange={(index, field, value) =>
              handleEditGame({
                ...editingGame,
                quests: editingGame.quests.map((quest, i) =>
                  i === index ? { ...quest, [field]: value } : quest
                ),
              })
            }
            handleAddQuest={() =>
              handleEditGame({
                ...editingGame,
                quests: [
                  ...(editingGame.quests || []),
                  {
                    name: "",
                    description: "",
                    levelReward: 0,
                    levelNumber: (editingGame.quests || []).length + 1,
                    timer: 0,
                  },
                ],
              })
            }
          />
          <br />
          <button onClick={handleSave} style={styles.button}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

const Gamelist = () => {
  const [games, setGames] = useState([
    {
      gameName: "Sample Game 1",
      quests: [
        {
          name: "Quest 1",
          description: "Description 1",
          levelReward: 10,
          levelNumber: 1,
          timer: 30,
        },
        {
          name: "Quest 2",
          description: "Description 2",
          levelReward: 20,
          levelNumber: 2,
          timer: 45,
        },
      ],
    },
    {
      gameName: "Sample Game 2",
      quests: [
        {
          name: "Quest A",
          description: "Description A",
          levelReward: 15,
          levelNumber: 1,
          timer: 40,
        },
        {
          name: "Quest B",
          description: "Description B",
          levelReward: 25,
          levelNumber: 2,
          timer: 60,
        },
      ],
    },
  ]);

  const handleEditGame = (game) => {
    setGames((prevGames) =>
      prevGames.map((g) => (g.gameName === game.gameName ? game : g))
    );
  };

  const handleSaveEditedGame = (editedGame) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.gameName === editedGame.gameName ? editedGame : game
      )
    );
  };

  return (
    <div style={styles.container}>
      <GameListComponent
        games={games}
        handleEditGame={handleEditGame}
        handleSaveEditedGame={handleSaveEditedGame}
      />
    </div>
  );
};

export default Gamelist;
