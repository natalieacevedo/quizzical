function Question({
  allAnswers,
  rightAnswer,
  userInput,
  responses,
  indexQuestion,
}) {
  const response = responses[indexQuestion];
  console.log(indexQuestion);
  console.log(responses);
  console.log(allAnswers);
  console.log(response);

  return (
    <ul className="listAnswers">
      {allAnswers.map((answer, ind) => {
        return (
          <li
            onClick={() => userInput(answer, rightAnswer, indexQuestion)}
            key={ind}
            className={
              response !== null && response.chosenAnswer === answer
                ? "chosenOne"
                : ""
            }
          >
            {answer}
          </li>
        );
      })}
    </ul>
  );
}
//<button onClick={restart}>Play again</button>
export default Question;
