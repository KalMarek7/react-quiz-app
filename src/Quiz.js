import Answer from "./Answer";
import useWindowSize from "./hooks/useWindowSize";

const Quiz = ({
  quizData,
  currentQuestion,
  handleSubmit,
  selectedValue,
  setSelectedValue,
}) => {
  const { width } = useWindowSize();

  return quizData.map(
    (question, index) =>
      index === currentQuestion && (
        <form className="form" key={index} onSubmit={handleSubmit}>
          <section className="questionContainer">
            <h2 className="questionCounter">
              Question {currentQuestion + 1}/{quizData.length}
            </h2>
            <p className="question">{question.question}</p>
            {width > 610 && (
              <button autoFocus className="submit" type="submit">
                Next
              </button>
            )}
          </section>
          <section className="answerContainer">
            <ul>
              {["A", "B", "C", "D"].map((n, key) => (
                <Answer
                  key={key}
                  value={n}
                  answer={question[n]}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              ))}
            </ul>
            {width < 611 && (
              <button autoFocus className="submit" type="submit">
                Next
              </button>
            )}
          </section>
        </form>
      )
  );
};

export default Quiz;
