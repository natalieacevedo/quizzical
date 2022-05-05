import React, { useState, useEffect } from "react";
import Question from "./Question";
import Modal from "./Modal";
import axios from "axios";


function Questions({ options, restart }) {
  const [questions, setAllQuestions] = useState(null);
  const [responseError, setResponseError] = useState(0);
  const [responses, setResponses] = useState(new Array(10).fill(null));
  const [displayResults, setDisplayResults] = useState(false);

  const finishGame = responses.some((obj) => obj === null);
  let numRightAnswers = displayResults
    ? responses.reduce(
        (prev, current) =>
          current.correctOne === current.chosenAnswer ? (prev += 1) : prev,
        0
      )
    : 0;

  function userInput(element, correctAnswer, inde) {
    if (!displayResults) {
      setResponses((prev) => {
        let eachInput = {
          correctOne: correctAnswer,
          chosenAnswer: element,
        };

        let newArr = [...prev];
        console.log(newArr);
        newArr[inde] = eachInput;
        return newArr;
      });
    }
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

      .then((response) => {
        setResponseError(response.data.response_code);

        return response.data;
      })
      .then((data) => setAllQuestions(propertiesNeeded(data.results)));
  }

  useEffect(getData, [options, responseError]);

  if (responseError) {
    return <Modal restart={restart} />;
  } else if (questions) {
    return (
      <div className="questionsContainer">
        {questions.map((question, indi) => {
          return (
            <>
              <hr />
              {/*inserting raw HTML is not ideal, but since I tried with other options and could not make it work, and this is a trusted api, I decided to decode the string this way */}

              <h3
                className="question"
                dangerouslySetInnerHTML={{ __html: question.question }}
              />
              <Question
                allAnswers={question.answersCombined}
                rightAnswer={question.correct_answer}
                userInput={userInput}
                responses={responses}
                indexQuestion={indi}
                displayResults={displayResults}
              />
            </>
          );
        })}
        <div className="buttonContainer">
          <button onClick={restart}>Play again</button>
          <button onClick={() => setDisplayResults(true)} disabled={finishGame}>
            See results
          </button>
        </div>
        {displayResults && (
          <p className="correctNumber">
            Your correct number of answers is {numRightAnswers}
          </p>
        )}
      </div>
    );
  } else {
    <div className="loader"></div>;
  }
}

export default Questions;
