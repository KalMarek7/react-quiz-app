const Results = ({ quizData, userAnswer }) => {
  return (
    <section className="results">
      {quizData.map((question, index) => (
        <div key={index} className="resultContainer">
          <p>
            <b>Question {index + 1}:</b> {question.question}
          </p>
          <p>
            <b>Correct Answer:</b> {question[question.answer]}
          </p>
          <p
            style={{
              color:
                question[userAnswer[index]] === question[question.answer]
                  ? "#90ee90"
                  : "#ff6347",
            }}
          >
            <b>Your Answer:</b> {question[userAnswer[index]]}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Results;
