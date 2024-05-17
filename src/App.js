import "./styles.css";
import quizDataIds from "./data/quizDataIds.json";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";
import Score from "./Score";
import About from "./About";
import Layout from "./Layout";
import Contact from "./Contact";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    function generateRandomIds() {
      const randomIds = new Set();
      while (randomIds.size < 10) {
        randomIds.add(Math.floor(Math.random() * 547));
      }
      return Array.from(randomIds);
    }
    if (score === -1) {
      setScore(0);
    } else if (score === 0) {
      const randomIds = generateRandomIds();
      setQuizData(randomIds.map((id) => quizDataIds[id]));
    }
  }, [score]);

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedValue === quizData[currentQuestion].answer && setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedValue("");
    setUserAnswer([...userAnswer, selectedValue]);
  };

  const highscore =
    localStorage.getItem("highscore") === null
      ? 0
      : localStorage.getItem("highscore");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <main className="quiz">
              {currentQuestion === quizData.length ? (
                <Score
                  score={score}
                  setScore={setScore}
                  quizData={quizData}
                  setCurrentQuestion={setCurrentQuestion}
                  userAnswer={userAnswer}
                  setUserAnswer={setUserAnswer}
                  highscore={highscore}
                />
              ) : (
                <Quiz
                  quizData={quizData}
                  currentQuestion={currentQuestion}
                  handleSubmit={handleSubmit}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              )}
            </main>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
