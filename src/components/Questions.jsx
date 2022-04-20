import React, { useState, useEffect } from "react";
import axios from "axios";

function Questions({ options }) {
  const [questions, setAllQuestions] = useState(null);

  console.log(options);

  function getData() {
    if (
      options["category"] === "Any Category" &&
      options["difficulty"] === "Any Difficulty"
    ) {
      axios
        .get("https://opentdb.com/api.php?amount=10")
        .then((response) => response.data)
        .then((data) => setAllQuestions(data.results));
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

    console.log(questions);

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
                <ul>
                  {allAnswers.map((element, ind) => (
                    <li key={ind}>{element}</li>
                  ))}
                </ul>
              </>
            );
          })}
        </div>
      );
    }


}

export default Questions;

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

