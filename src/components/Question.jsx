import React, { useState } from "react";

function Question({
  allAnswers,
  rightAnswer,
  userInput,
  responses,
  indexQuestion,
  displayResults,
}) {
  const response = responses[indexQuestion];
  const [isOver, setIsOver] = useState(false);

  return (
    <ul className="listAnswers">
      {allAnswers.map((answer, ind) => {
        return (
          <li
            onClick={() => userInput(answer, rightAnswer, indexQuestion)}
            key={ind}
            className={
              //   displayResults && answer === rightAnswer
              //     ? "correct"
              //     : response !== null && response.chosenAnswer === answer
              //     ? "chosenOne"
              //     : ""
              displayResults && answer === rightAnswer
                ? "correct"
                : response !== null &&
                  !displayResults &&
                  response.chosenAnswer === answer
                ? "chosenOneBefore"
                : response !== null && response.chosenAnswer === answer
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

export default Question;
