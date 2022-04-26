import React, { useState } from "react";

function Question({ allAnswers, rightAnswer }) {
  const [responseArr, setResponseArr] = useState([]);

  function userInput(element, correctAnswer) {
    console.log(element, correctAnswer);

    setResponseArr((prev) => {
      let eachInput = {
        correctOne: correctAnswer,
        chosenAnswer: element,
      };

      let newArr = [...prev];
      console.log(newArr);
      newArr.push(eachInput);
      return newArr;
    });
  }

  console.log(responseArr);

  return (
    <ul className="listAnswers">
      {allAnswers.map((answer, ind) => {
        return (
          <li
            onClick={() => userInput(answer, rightAnswer)}
            key={ind}
            className={
              responseArr.length > 0 && responseArr[0].correctOne === answer
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
