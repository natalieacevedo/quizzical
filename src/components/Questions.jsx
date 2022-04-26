import React, { useState, useEffect } from "react";
import axios from "axios";




function Questions({ options, restart }) {
  const [questions, setAllQuestions] = useState(null);
  const [responseError, setResponseError] = useState(0);
  const [responseArr, setResponseArr] = useState([]);

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

    axios
      .get("https://opentdb.com/api.php", { params })
      // FIXME handle response_code !==0
      .then((response) => {
        console.log(typeof response.data.response_code);
        setResponseError(response.data.response_code);

        return response.data;
      })
      .then((data) => setAllQuestions(propertiesNeeded(data.results)));
  }

  useEffect(getData, [options, responseError]);

  function onClickListItem(element, correctAnswer) {
    console.log(element, correctAnswer);
    setResponseArr((prev) => {
      let newArr = [...prev];
      newArr.push(element, correctAnswer);
      return newArr;
    });
  }

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
    console.log(responseArr);
    return (
      <div className="questionsContainer">
        {questions.map((question, indi) => {
          return (
            <>
              <h3 key={indi}>{question.question}</h3>
              <ul className="listAnswers">
                {question.answersCombined.map((element, ind) => {
                  return (
                    <li
                      onClick={() =>
                        onClickListItem(element, question.correct_answer)
                      }
                      key={ind}
                      // className={
                      //   responseArr.length > 0 &&
                      //   responseArr[indi][ind] === element
                      //     ? "chosenOne"
                      //     : ""
                      // }
                    >
                      {element}
                    </li>
                  );
                })}
              </ul>
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

