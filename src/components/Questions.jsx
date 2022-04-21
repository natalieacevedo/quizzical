import React, { useState, useEffect } from "react";
import axios from "axios";

function Questions({ options, restart }) {
  const [questions, setAllQuestions] = useState(null);

  function getData() {
    function propertiesNeeded(arr) {
      let finalProperties = [];

      console.log(arr);

      arr.forEach((obj) => {
        let allAnswersTogether = [...obj.incorrect_answers];
        let eachObject = {
          question: obj.question,
          correct_answer: obj.correct_answer,
          answersCombined: "",
        };

        allAnswersTogether.splice(
          Math.floor(Math.random() * (allAnswersTogether.length + 1)),
          0,
          obj.correct_answer
        );
        eachObject.answersCombined = allAnswersTogether;
        finalProperties.push(eachObject);
      });

      console.log(finalProperties);
      return finalProperties;
    }

    ////////////////////////from here new code

    let params = { amount: 10 };

    if (options["difficulty"] !== "Any Difficulty") {
      params.difficulty = options["difficulty"];
    }
    if (options["category"] !== "Any Category") {
      params.category = options["category"];
    }
    if (
      options["category"] !== "Any Category" &&
      options["difficulty"] !== "Any Diffuculty"
    ) {
      params.category = options["category"];
      params.difficulty = options["difficulty"];
    }

    console.log(params);
    axios
      .get("https://opentdb.com/api.php", { params })
      .then((response) => response.data)
      .then(
        (data) => setAllQuestions(propertiesNeeded(data.results))
        //setAllQuestions(propertiesNeeded());
      );

    //setAllQuestions(propertiesNeeded());
    //   if (
    //     options["category"] === "Any Category" &&
    //     options["difficulty"] === "Any Difficulty"
    //   ) {
    //     axios
    //       .get("https://opentdb.com/api.php?amount=10")
    //       .then((response) => response.data)
    //       .then((data) => {
    //         console.log(propertiesNeeded(data.results));
    //         return setAllQuestions(data.results);
    //       });
    //   } else if (
    //     options["category"] === "Any Category" &&
    //    options["difficulty"] !== "Any Difficulty"
    //   ) {
    //     axios
    //       .get(
    //         `https://opentdb.com/api.php?amount=10&difficulty=${options["difficulty"]}`
    //       )
    //       .then((response) => response.data)
    //       .then((data) => setAllQuestions(data.results));
    // acaaaa  } else if (
    //     options["category"] !== "Any Category" &&
    //     options["difficulty"] === "Any Difficulty"
    //   ) {
    //     axios
    //       .get(
    //         `https://opentdb.com/api.php?amount=10&category=${options["category"]}`
    //       )
    //       .then((response) => response.data)
    //       .then((data) => setAllQuestions(data.results));
    //   } else {
    //     axios
    //       .get(
    //         `https://opentdb.com/api.php?amount=10&category=${options["category"]}&difficulty=${options["difficulty"]}`
    //       )
    //       .then((response) => response.data)
    //       .then((data) => setAllQuestions(data.results));
    //   }
  }

  useEffect(getData, [options]);

  if (questions) {
    return (
      <div className="questionsContainer">
        {questions.map((question, ind) => {
          return (
            <>
              <h3 key={ind}>{question.question}</h3>
              <ul className="listAnswers">
                {question.answersCombined.map((element, ind) => (
                  <li key={ind}>{element}</li>
                ))}
              </ul>
            </>
          );
        })}

        <button onClick={restart}>Play again</button>
      </div>
    );
  } else {
    <h1>Loading</h1>;
  }
}


export default Questions;

