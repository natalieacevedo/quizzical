import React, { useState, useEffect } from "react";
import Question from "./Question";
import axios from "axios";

function Questions({ options, restart }) {
  const [questions, setAllQuestions] = useState(null);
  const [responseError, setResponseError] = useState(0);
  const [responses, setResponses] = useState([]);

  function userInput(element, correctAnswer) {
    //     console.log(element, correctAnswer);
    setResponses((prev) => {
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

  function getData() {
    function propertiesNeeded(arr) {
      let finalProperties = [];

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

    axios
      .get("https://opentdb.com/api.php", { params })
      // FIXME handle response_code !==0
      .then((response) => {
        setResponseError(response.data.response_code);

        return response.data;
      })
      .then((data) => setAllQuestions(propertiesNeeded(data.results)));
  }

  useEffect(getData, [options, responseError]);

  if (responseError) {
    return (
      <>
        <h1>
          There are not enough questions with your chosen parameters, please try
          something different
        </h1>
        <button onClick={restart}>Play again</button>
      </>
    );
  } else if (questions) {
    //setResponses(new Array(questions.length).fill(null));
    return (
      <div className="questionsContainer">
        {questions.map((question, indi) => {
          return (
            <>
              <h3 key={indi}>{question.question}</h3>
              <Question
                allAnswers={question.answersCombined}
                rightAnswer={question.correct_answer}
                userInput={userInput}
                responses={responses}
              />
            </>
          );
        })}
        <button onClick={restart}>Play again</button>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default Questions;
