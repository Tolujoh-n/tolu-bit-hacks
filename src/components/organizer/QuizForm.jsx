import React, { useState } from "react";
import axios from "axios";

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

const QuizForm = ({
  pricepool,
  onSubmit,
  quizTitle,
  quizDescription,
  rewards,
}) => {
  const [quiz, setQuiz] = useState([]);

  const handleAddQuiz = () => {
    setQuiz((prevQuiz) => [
      ...prevQuiz,
      {
        question: "",
        options: Array(4).fill(""),
        correctOption: null,
      },
    ]);
  };
  const handleQuestChange = (index, field, value) => {
    setQuiz((prevQuiz) =>
      prevQuiz.map((quest, i) =>
        i === index ? { ...quest, [field]: value } : quest
      )
    );
  };

  const handleOptionChange = (index, optionIndex, value) => {
    setQuiz((prevQuiz) =>
      prevQuiz.map((quest, i) =>
        i === index
          ? {
              ...quest,
              options: quest.options.map((opt, idx) =>
                idx === optionIndex ? value : opt
              ),
            }
          : quest
      )
    );
  };

  const handleCheckboxChange = (index, optionIndex) => {
    setQuiz((prevQuiz) =>
      prevQuiz.map((quest, i) =>
        i === index
          ? {
              ...quest,
              correctOption: optionIndex,
            }
          : quest
      )
    );
  };

  const generateWrongOptions = async (index, question, correctOption) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          prompt: `I'm a quiz organizer and i want you to help me generate 3 incorrect option to this question: ${question}\nMy correct option is : ${correctOption}\ntype out the only 3 incorrect options. please don't type any paragraph before your option list. just give me only the 3 incorrect options:`,
          model: "gpt-3.5-turbo",
          max_tokens: 4096,
          temperature: 0.5,
          n: 3, // Number of incorrect options
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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 ",
          },
        }
      );
      const incorrectOptions = response.data.choices.map((choice) =>
        choice.text.trim()
      );
      setQuiz((prevQuests) =>
        prevQuests.map((quest, i) =>
          i === index ? { ...quest, options: incorrectOptions } : quest
        )
      );
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.log("Rate limit exceeded. Please try again later.");
        console.log("Response data:", error.response.data);
      } else {
        console.error("Error generating incorrect options:", error);
        console.log("Response data:", error.response.data);
      }
    }
  };
  const handleSubmit = () => {
    console.log("Quiz Submitted:", { pricepool, quiz });
    onSubmit({ pricepool, quiz });
  };

  return (
    <div style={styles.formContainer}>
      {quiz.map((quest, index) => (
        <div key={index} style={styles.questContainer}>
          <div
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <div className="row gy-4">
              <div className="col-md-12">
                <div className="form-group">
                  <label style={styles.label}>Question: {index + 1}</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Type your Questions"
                    value={quest.question}
                    onChange={(e) =>
                      handleQuestChange(index, "question", e.target.value)
                    }
                    style={styles.textarea}
                    required
                  />
                </div>
              </div>
              {quest.options.map((option, optionIndex) => (
                <div className="col-md-6" key={optionIndex}>
                  <div className="form-group">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Checkbox and input wrapper */}
                      <div className="d-flex align-items-center">
                        {/* Checkbox */}
                        <input
                          type="checkbox"
                          checked={quest.correctOption === optionIndex}
                          onChange={() =>
                            handleCheckboxChange(index, optionIndex)
                          }
                        />
                        {/* Input */}
                        <input
                          type="text"
                          className="form-control ml-2" // Add margin to separate checkbox and input
                          placeholder={`Option ${optionIndex + 1}`}
                          value={option}
                          onChange={(e) =>
                            handleOptionChange(
                              index,
                              optionIndex,
                              e.target.value
                            )
                          }
                          style={styles.input}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                generateWrongOptions(index, quest.description, quest.options[0])
              }
              id="followbtn"
            >
              AI Wrong Options
            </button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <button onClick={handleAddQuiz} id="followbtn">
            Add Question
          </button>
        </div>
        <div>
          <button onClick={handleSubmit} id="followbtn">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizForm;
