import React, { useState, useEffect } from "react";
import axios from "axios";

function Questions({ options, restart }) {
  const [questions, setAllQuestions] = useState(null);

    function getData() {
      function randomAnswers(arr) {
        let finalProperties = [];

        console.log(arr);

        arr.forEach((obj) => {
          let allAnswersTogheter = [...obj.incorrect_answers];
          let eachObject = {
            question: obj.question,
            correct_answer: obj.correct_answer,
            answersCombined: "",
          };

          allAnswersTogheter.splice(
            Math.floor(Math.random() * (allAnswersTogheter.length + 1)),
            0,
            obj.correct_answer
          );
          eachObject.answersCombined = allAnswersTogheter;
          finalProperties.push(eachObject);
        });

        return finalProperties;
      }

      if (
        options["category"] === "Any Category" &&
        options["difficulty"] === "Any Difficulty"
      ) {
        axios
          .get("https://opentdb.com/api.php?amount=10")
          .then((response) => response.data)
          .then((data) => {
            console.log(randomAnswers(data.results));
            return setAllQuestions(data.results);
          });
      } else if (
        options["category"] === "Any Category" &&
        options["difficulty"] !== "Any Difficulty"
      ) {
        axios
          .get(
            `https://opentdb.com/api.php?amount=10&difficulty=${options["difficulty"]}`
          )
          .then((response) => response.data)
          .then((data) => setAllQuestions(data.results));
      } else if (
        options["category"] !== "Any Category" &&
        options["difficulty"] === "Any Difficulty"
      ) {
        axios
          .get(
            `https://opentdb.com/api.php?amount=10&category=${options["category"]}`
          )
          .then((response) => response.data)
          .then((data) => setAllQuestions(data.results));
      } else {
        axios
          .get(
            `https://opentdb.com/api.php?amount=10&category=${options["category"]}&difficulty=${options["difficulty"]}`
          )
          .then((response) => response.data)
          .then((data) => setAllQuestions(data.results));
      }
    }

  useEffect(getData, [options]);

  if (questions) {
    return (
      <div className="questionsContainer">
        {questions.map((question, ind) => {
          let allAnswers = [...question.incorrect_answers];
          allAnswers.splice(
            Math.floor(Math.random() * (allAnswers.length + 1)),
            0,
            question.correct_answer
          );

          return (
            <>
              <h3 key={ind}>{question.question}</h3>
              <ul className="listAnswers">
                {allAnswers.map((element, ind) => (
                  <li key={ind}>{element}</li>
                ))}
              </ul>
            </>
          );
        })}

        <button onClick={restart}>Play again</button>
      </div>
    );
  }
}

export default Questions;

