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

  if (questions) {
    console.log(questions[0]);
  }

  return (
    <div className="questionsContainer">
      <h2>Here are all the questions</h2>
    </div>
  );
}

export default Questions;
