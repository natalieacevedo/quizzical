function Question({ allAnswers, rightAnswer, userInput, responses }) {
  console.log(allAnswers);
  console.log(responses);

  return (
    <ul className="listAnswers">
      {allAnswers.map((answer, ind) => {
        if (responses[ind] !== undefined) {
          console.log(responses);
        }
        return (
          <li
            onClick={() => userInput(answer, rightAnswer)}
            key={ind}
            className={
              responses.length > 0 &&
              responses.findIndex((obj) => obj["chosenAnswer"] === answer) !==
                -1
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
