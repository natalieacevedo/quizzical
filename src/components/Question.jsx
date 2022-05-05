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

  return (
    <ul className="listAnswers">
      {allAnswers.map((answer, ind) => {
        return (
          <li
            onClick={() => userInput(answer, rightAnswer, indexQuestion)}
            key={ind}
            className={
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
            dangerouslySetInnerHTML={{ __html: answer }}
          ></li>
        );
      })}
    </ul>
  );
}

export default Question;
