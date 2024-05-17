import { useState } from "react";
import Results from "./Results";

const Score = ({
  score,
  setScore,
  quizData,
  setCurrentQuestion,
  userAnswer,
  setUserAnswer,
  highscore,
}) => {
  const [isResults, setIsResults] = useState(false);

  return (
    <>
      <section className="scoreContainer">
        {score > highscore && localStorage.setItem("highscore", score)}
        {highscore !== 0 && (
          <h2 className="high score">High score: {highscore}</h2>
        )}
        <h2 className="score">
          Score: {score}/{quizData.length}
        </h2>
        <button
          className="reset"
          onClick={() => {
            setCurrentQuestion(0);
            setScore(-1);
            setUserAnswer([]);
          }}
        >
          Reset
        </button>
        {!isResults && (
          <button className="reset" onClick={() => setIsResults(!isResults)}>
            Answers
          </button>
        )}
      </section>
      {isResults && <Results quizData={quizData} userAnswer={userAnswer} />}
    </>
  );
};

export default Score;
