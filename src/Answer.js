const Answer = ({ value, answer, selectedValue, setSelectedValue }) => {
  return (
    <li
      className="answerList"
      style={{
        backgroundColor: value === selectedValue ? "#90ee90" : "#00FFFF",
      }}
    >
      <input
        required
        type="radio"
        name="answer"
        className="answer"
        value={value}
        id={value}
        onChange={() => setSelectedValue(value)}
      />
      <label htmlFor={value}>
        {value}. {answer}
      </label>
    </li>
  );
};

export default Answer;
